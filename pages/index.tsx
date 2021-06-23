import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/layout";
import Step from "../components/step";
import Step1 from "../components/step-1";
import Step2 from "../components/step-2";
import Step3 from "../components/step-3";
import Select from "../components/select";
import Input from "../components/input";
import Checkbox from "../components/checkbox";
import { fetchPrices, postData } from "../lib/fetch";
import { subscriptionDTO } from "../lib/types";

const IndexPage: FC = () => {
  const [step, setStep] = useState<number>(0);

  const [duration, setDuration] = useState<number>(12);
  const [space, setSpace] = useState<number>(5);
  const [upfront, setUpfront] = useState<boolean>(false);

  const [finalPrice, setFinalPrice] = useState<number>(0);

  let prices = [];
  fetchPrices().then((res) => {
    prices = res.subscription_plans.reduce((map, obj) => {
      map[obj.duration_months] = obj.price_usd_per_gb;
      return map;
    }, {});
    calculatePrice();
  });

  const calculatePrice = async () => {
    let price = 0;
    price = prices[duration] * space;
    if (upfront) price = price * 0.9;
    await setFinalPrice(price);
  };

  const handleUpfrontChange = async (value: boolean) => {
    await setUpfront(value);
    calculatePrice();
  };

  const handleDurationChange = async (value: number) => {
    await setDuration(value);
    calculatePrice();
  };

  const handleSpaceChange = async (value: number) => {
    await setSpace(value);
    calculatePrice();
  };

  const [formData, setFormData] = useState<subscriptionDTO>({
    duration: 12,
    space: 5,
    upfront: false,
    cardnumber: "",
    expm: 0,
    expy: 0,
    cvv: "",
    email: "",
    terms: false,
  });

  const onSubmit1 = async ({ duration, space, upfront }) => {
    setStep(1);
    const data = { ...formData };
    data.duration = duration;
    data.space = space;
    data.upfront = upfront;
    await setFormData(data);
  };

  const onSubmit2 = async ({ cardnumber, expm, expy, cvv }) => {
    setStep(2);
    const data = { ...formData };
    data.cardnumber = cardnumber;
    data.expm = expm;
    data.expy = expy;
    data.cvv = cvv;
    await setFormData(data);
  };

  const onSubmit3 = async ({ email, terms }) => {
    const data = { ...formData };
    data.email = email;
    data.terms = terms;
    setFormData(data);
    postData(data);
  };

  const backStep = () => {
    setStep(step - 1);
  };

  return (
    <Layout>
      <div>
        <p>{duration} Month</p>
        <p>{space} Gigabytes</p>
        <p>{upfront ? "" : "No"} Upfront Payment</p>
        <p>{finalPrice} $</p>
      </div>
      <Step1
        turn={step}
        index={0}
        priceState={{
          handleUpfrontChange,
          handleDurationChange,
          handleSpaceChange,
        }}
        onSubmit={onSubmit1}
      />
      <Step2 turn={step} index={1} onSubmit={onSubmit2} onBack={backStep} />
      <Step3
        turn={step}
        index={2}
        planProperties={{ duration, space, upfront, finalPrice }}
        onSubmit={onSubmit3}
        onBack={backStep}
      />
    </Layout>
  );
};

export default IndexPage;

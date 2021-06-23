import { FC, useState } from "react";
import Layout from "../components/layout";
import Step from "../components/step";
import Step1 from "../components/step-1";
import Step2 from "../components/step-2";
import Step3 from "../components/step-3";
import { fetchPrices, postData } from "../lib/fetch";
import { subscriptionDTO } from "../lib/types";

const IndexPage: FC = () => {
  const [step, setStep] = useState<number>(0);

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
    price = prices[formData.duration] * formData.space;
    if (formData.upfront) price = price * 0.9;
    await setFinalPrice(price);
  };

  const handleUpfrontChange = async (upfront: boolean) => {
    await setFormData({ ...formData, upfront });
    calculatePrice();
  };

  const handleDurationChange = async (duration: number) => {
    await setFormData({ ...formData, duration });
    calculatePrice();
  };

  const handleSpaceChange = async (space: number) => {
    await setFormData({ ...formData, space });
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
        <p>{formData.duration} Month</p>
        <p>{formData.space} Gigabytes</p>
        <p>{formData.upfront ? "" : "No"} Upfront Payment</p>
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
        planProperties={{
          duration: formData.duration,
          space: formData.space,
          upfront: formData.upfront,
          finalPrice: finalPrice,
        }}
        onSubmit={onSubmit3}
        onBack={backStep}
      />
    </Layout>
  );
};

export default IndexPage;

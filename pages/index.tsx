import { useState, FC } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/layout";
import Step from "../components/step";
import Select from "../components/select";
import Input from "../components/input";
import Checkbox from "../components/checkbox";

const IndexPage: FC = () => {
  const [step, setStep] = useState<number>(0);

  const [duration, setDuration] = useState<number>(12);
  const [space, setSpace] = useState<number>(5);
  const [upfront, setUpfront] = useState<boolean>(false);

  const thisYear = new Date().getFullYear();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (formObject) => {
    console.log(formObject);
  };

  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const backStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Step turn={step} index={0}>
          <div className="row">
            <div className="col">
              <h3 className="form-header">Duration is required</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Select
                label="Duration:"
                name="duration"
                register={register}
                errors={errors}
                options={[3, 6, 12].map((m) => ({
                  value: m,
                  title: `${m} Months`,
                }))}
                defaultValue="12"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Select
                label="Space:"
                name="space"
                register={register}
                errors={errors}
                options={[5, 10, 50].map((m) => ({
                  value: m,
                  title: `${m} Gigabytes`,
                }))}
                defaultValue="5"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Checkbox
                label="Upfront Payment"
                name="upfront"
                register={register}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button onClick={nextStep} className="btn login-btn">
                Next
              </button>
            </div>
          </div>
        </Step>
        <Step turn={step} index={1}>
          <div className="row">
            <div className="col">
              <h3 className="form-header">Payment</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Input
                label="Credit card number:"
                name="cardnumber"
                register={register}
                errors={errors}
                placeHolder="1111-2222-3333-4444"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-50">
              <Select
                label="Exp month:"
                name="expm"
                register={register}
                errors={errors}
                options={Array.from({ length: 12 }, (_, i) => i + 1).map(
                  (m) => ({
                    value: m,
                    title: m,
                  })
                )}
              />
            </div>
            <div className="col-50">
              <Select
                label="Exp year:"
                name="expy"
                register={register}
                errors={errors}
                options={Array.from({ length: 10 }, (_, i) => i + thisYear).map(
                  (m) => ({
                    value: m,
                    title: m,
                  })
                )}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Input
                label="CVV:"
                name="cvv"
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-50">
              <button onClick={backStep} className="btn login-btn">
                Previus
              </button>
            </div>
            <div className="col-50">
              <button onClick={nextStep} className="btn login-btn">
                Next
              </button>
            </div>
          </div>
        </Step>
        <Step turn={step} index={2}>
          <div className="row">
            <div className="col">
              <h3 className="form-header">Duration is required</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Input
                label="Email:"
                name="email"
                register={register}
                errors={errors}
                placeHolder="your.email@example.com"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-50">
              <button onClick={backStep} className="btn login-btn">
                Previus
              </button>
            </div>
            <div className="col-50">
              <button type="submit" className="btn login-btn">
                Confirm
              </button>
            </div>
          </div>
        </Step>
      </form>
    </Layout>
  );
};

export default IndexPage;

import { useForm } from "react-hook-form";
import Select from "../components/select";
import Input from "../components/input";
import Checkbox from "../components/checkbox";

export default function Step2({
  turn,
  index,
  onSubmit,
  onBack,
}: {
  turn: number;
  index: number;
  onSubmit;
  onBack?;
  }) {
  
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const onFormSubmit = (formObject) => {
    onSubmit(formObject);
  };

  const style = {
    display: turn == index ? "" : "none",
  };
  
  const thisOnBack = (e) => {
    e.preventDefault();
    onBack();
  };

  return (
    <section style={style}>
      <form id="step2" onSubmit={handleSubmit(onFormSubmit)}>
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
              options={Array.from({ length: 12 }, (_, i) => i + 1).map((m) => ({
                value: m,
                title: m,
              }))}
            />
          </div>
          <div className="col-50">
            <Select
              label="Exp year:"
              name="expy"
              register={register}
              errors={errors}
              options={Array.from(
                { length: 10 },
                (_, i) => i + new Date().getFullYear()
              ).map((m) => ({
                value: m,
                title: m,
              }))}
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
            <button onClick={thisOnBack} className="btn login-btn">
              Previus
            </button>
          </div>
          <div className="col-50">
            <button type="submit" className="btn login-btn">
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

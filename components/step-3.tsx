import { useForm } from "react-hook-form";
import Select from "../components/select";
import Input from "../components/input";
import Checkbox from "../components/checkbox";

export default function Step3({
  turn,
  index,
  planProperties,
  onSubmit,
  onBack,
}: {
  turn: number;
  index: number;
  planProperties: {
    duration: number;
    space: number;
    upfront: boolean;
    finalPrice: number;
  };
  onSubmit;
  onBack?;
}) {
  const { duration, space, upfront, finalPrice } = planProperties;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onFormSubmit = (formObject) => {
    onSubmit(formObject);
  };

  const thisOnBack = (e) => {
    e.preventDefault();
    onBack();
  };

  const style = {
    display: turn == index ? "" : "none",
  };

  return (
    <section style={style}>
      <form id="step3" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="row">
          <div className="col">
            <h3 className="form-header">Confirmation</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Duration:</p>
            <h3>{duration} Month</h3>
            <p>Space:</p>
            <h3>{space} Gigabytes</h3>
            <p>Upfront Payment:</p>
            <h3>{upfront ? "Yes" : "No"}</h3>
            <p>Total:</p>
            <h3>{finalPrice} $</h3>
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
          <div className="col">
            <Checkbox
              label="Terms and conditions"
              name="terms"
              register={register}
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
              Confirm
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

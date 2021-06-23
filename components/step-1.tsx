import { useForm } from "react-hook-form";
import Select from "../components/select";
import Input from "../components/input";
import Checkbox from "../components/checkbox";

export default function Step1({
  turn,
  index,
  priceState,
  onSubmit,
  onBack,
}: {
  turn: number;
  index: number;
  priceState;
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

  const handleUpfrontChange = (e) => {
    priceState.handleUpfrontChange(e.target.checked);
  };

  const handleDurationChange = (e) => {
    priceState.handleDurationChange(e.target.value);
  };

  const handleSpaceChange = (e) => {
    priceState.handleSpaceChange(e.target.value);
  };

  return (
    <section style={style}>
      <form id="step1" onSubmit={handleSubmit(onFormSubmit)}>
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
              onChange={handleDurationChange}
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
              onChange={handleSpaceChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Checkbox
              label="Upfront Payment"
              name="upfront"
              register={register}
              onChange={handleUpfrontChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className="btn login-btn">
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

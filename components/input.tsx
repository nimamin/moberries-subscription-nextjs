
export default function Input({
  register,
  errors,
  name,
  label,
  placeHolder,
}: {
  register;
  errors;
  name;
  label;
  placeHolder?;
}) {
  return (
    <>
      <label>{label}</label>
      <input
        id={name}
        {...register(name)}
        required
        className={"form-field" + (errors[name] ? " has-error" : "")}
        placeholder={placeHolder}
      />
      {errors[name] && (
        <span className="error-label">{errors[name].message}</span>
      )}
    </>
  );
}

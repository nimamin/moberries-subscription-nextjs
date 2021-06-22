
export default function Input({
  register,
  errors,
  name,
  label,
  placeHolder,
  onChange,
}: {
  register;
  errors;
  name;
  label;
  placeHolder?;
  onChange?;
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
        onChange={onChange}
      />
      {errors[name] && (
        <span className="error-label">{errors[name].message}</span>
      )}
    </>
  );
}

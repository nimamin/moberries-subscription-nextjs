export default function Select({
  register,
  errors,
  name,
  label,
  options,
  defaultValue,
}: {
  register;
  errors;
  name;
  label;
  options;
  defaultValue?;
}) {
  return (
    <>
      <label>{label}</label>
      <select
        id={name}
        {...register(name)}
        defaultValue={defaultValue}
        required
        className={"form-field" + (errors[name] ? " has-error" : "")}
      >
        {options.map(({ value, title }) => (
          <option value={value} key={value}>
            {title}
          </option>
        ))}
      </select>
      {errors[name] && (
        <span className="error-label">{errors[name].message}</span>
      )}
    </>
  );
}

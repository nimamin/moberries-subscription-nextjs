export default function Select({
  register,
  errors,
  name,
  label,
  options,
  defaultValue,
  onChange,
}: {
  register;
  errors;
  name;
  label;
  options;
  defaultValue?;
  onChange?;
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
        onChange={onChange}
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

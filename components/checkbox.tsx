export default function Checkbox({
  register,
  name,
  label,
  onChange,
}: {
  register;
  name;
  label;
  onChange?;
}) {
  return (
    <>
      <input type="checkbox" id={name} {...register(name)} onChange={onChange}/>
      <label htmlFor={name} className="remember-label">
        {label}
      </label>
    </>
  );
}

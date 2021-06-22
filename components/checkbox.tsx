export default function Checkbox({
  register,
  name,
  label,
}: {
  register;
  name;
  label;
}) {
  return (
    <>
      <input type="checkbox" id={name} {...register(name)} />
      <label htmlFor={name} className="remember-label">
        {label}
      </label>
    </>
  );
}

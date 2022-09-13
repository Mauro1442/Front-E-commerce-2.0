export default function Input(props) {
  const { label, type, placeholder, name, register } = props;
  return (
    <div>
      <label>{label}</label>
      <input
        type={type || "text"}
        name={name || ""}
        placeholder={placeholder}
        {...register}
      ></input>
    </div>
  );
}

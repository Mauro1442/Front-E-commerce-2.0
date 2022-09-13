import Input from "../Components/Input";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //send
    console.log("form", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="E-Mail"
          register={{ ...register("email", { required: true }) }}
        />
        {errors.email && <span>Mandatory</span>}
        <Input
          label="Password"
          register={{ ...register("password", { required: true }) }}
        />
        {errors.password && <span>Mandatory</span>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

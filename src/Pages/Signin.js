import Input from "../Components/Input";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

export default function Signin() {
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          register={{ ...register("name", { required: true }) }}
        />
        {errors.name && <span>Mandatory</span>}
        <Input
          label="Last Name"
          register={{ ...register("lastname", { required: true }) }}
        />
        {errors.lastname && <span>Mandatory</span>}
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
        <Button type="submit" variant="dark">
          Sign Me Up
        </Button>
      </Form>
    </div>
  );
}

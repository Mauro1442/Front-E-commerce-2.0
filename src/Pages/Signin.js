import { useState } from "react";
import Input from "../Components/Input";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AlertCustom from "../Components/Alert";
import axios from "../Config/Axios";

export default function Signin() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [alert, setAlert] = useState({ variant: "", text: "" });


  const onSubmit = async (data) => {
    var config = {
      method: "post",
      url: "https://api-nodeservice.herokuapp.com/users/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        setAlert({
          variant: "success",
          text: "User Created",
        });
        setTimeout(() => {
          navigate("/log")
        }, 1000);
      })
      .catch(function (error) {
        console.log(error);
        setAlert({ variant: "danger", text: error });

      });
  };

    return (
      <div>
        <Form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >        <Input
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
          register={{ ...register("password", { required: true, minLength: 8  }) }}
        />
        {errors.password && <span>Mandatory</span>}


        <Button type="submit" variant="dark">
          Sign Me Up
        </Button>
        <AlertCustom variant={alert.variant} text={alert.text} />

      </Form>
    </div>
    );

}

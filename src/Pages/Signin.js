import { useState } from "react";
import Input from "../Components/Input";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import { login } from "../Services/usersServices";
import axios from "../Config/Axios";

export default function Signin() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate();

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
        setSignedIn(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (!signedIn) {
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
      </Form>
    </div>
    );
  } else {
    return (
      <>
        
        <Button variant="dark" onClick={() => navigate("/log")}>
          To Log
        </Button>
      </>
    );
  }
}

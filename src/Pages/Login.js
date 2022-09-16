import { useState } from "react";
import Input from "../Components/Input";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import { login } from "../Services/usersServices";
import axios from "../Config/Axios";

export default function Login() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    var config = {
      method: "post",
      url: "https://api-nodeservice.herokuapp.com/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem("access_token", JSON.stringify(response.data));
        console.log(response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (!loggedIn) {
    return (
      <div>
        <Form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <Input
            label="E-Mail"
            register={{ ...register("email", { required: true }) }}
          />
          {errors.email && <span>Mandatory</span>}
          <Input
            label="Password"
            register={{
              ...register("password", { required: true, minLength: 8 }),
            }}
          />
          {errors.password && <span>Mandatory/Min 8 character</span>}
          <Button type="submit" variant="dark">
            Log In
          </Button>
        </Form>
      </div>
    );
  } else {
    return (
      <>
        <p>Welcome!</p>
        <Button variant="dark" onClick={() => navigate("/")}>
          To Home
        </Button>
      </>
    );
  }
}

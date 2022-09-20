import Input from "../Components/Input";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import AlertCustom from "../Components/Alert";

import { useNavigate } from "react-router-dom";
import axios from "../Config/Axios";
import AuthContext from "../Context/AuthContext";
import { useState, useContext } from "react";

export default function Login(props) {

  const context = useContext(AuthContext)
  const [alert, setAlert] = useState({ variant: "", text: "" });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



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
        localStorage.setItem("access_token", JSON.stringify(response.data.token));
        console.log(response);
        if (response.data.token === undefined){
          setAlert({ variant: "danger", text: response.data.message });
        }else{
        context.loginUser();
        console.log(response.data)
        setAlert({
          variant: "success",
          text: "Welcome",
        });
        setTimeout(() => {
          navigate("/")
        }, 1000);
        }


      })
      .catch(function (e) {
        console.log(e);
        setAlert({ variant: "danger", text: e });

      });
  };

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
          <AlertCustom variant={alert.variant} text={alert.text} />

        </Form>
      </div>
    );

}

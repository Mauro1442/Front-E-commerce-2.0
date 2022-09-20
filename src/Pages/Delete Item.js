import Input from "../Components/Input";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import AlertCustom from "../Components/Alert";

import { useNavigate } from "react-router-dom";
import axios from "../Config/Axios";
import AuthContext from "../Context/AuthContext";
import { useState, useContext } from "react";

export default function DeleteItem(props) {
  const context = useContext(AuthContext);
  const [alert, setAlert] = useState({ variant: "", text: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    var config = {
      method: "delete",
      url: `https://api-nodeservice.herokuapp.com/products/${data.id}`,
      headers: {        
        "x-access-token": `${JSON.parse(window.localStorage.getItem("access_token"))}`,"Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
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
          label="Item ID"
          register={{ ...register("id", { required: true }) }}
        />
        {errors.id && <span>Mandatory</span>}


        <Button type="submit" variant="dark">
          Delete Item
        </Button>
        <AlertCustom variant={alert.variant} text={alert.text} />
      </Form>
    </div>
  );
}

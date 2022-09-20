import Input from "../Components/Input";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import AlertCustom from "../Components/Alert";

import { useNavigate } from "react-router-dom";
import axios from "../Config/Axios";
import AuthContext from "../Context/AuthContext";
import { useState, useContext } from "react";

export default function AddItem(props) {
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
      method: "post",
      url: "https://api-nodeservice.herokuapp.com/products/",
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
          label="Name"
          register={{ ...register("name", { required: true }) }}
        />
        {errors.name && <span>Mandatory</span>}
        <Input
          label="Price"
          register={{
            ...register("price", { required: true }),
          }}
        />
        {errors.price && <span>Mandatory</span>}
        <Input
          label="Image URL"
          register={{ ...register("code", { required: true }) }}
        />
        {errors.code && <span>Mandatory</span>}
        <Input
          label="Description"
          register={{
            ...register("description", { required: true }),
          }}
        />
        {errors.description && <span>Mandatory</span>}
        <Input
          label="Quantity"
          register={{ ...register("quantity", { required: true }) }}
        />
        {errors.quantity && <span>Mandatory</span>}

        <Button type="submit" variant="dark">
          Add Item
        </Button>
        <AlertCustom variant={alert.variant} text={alert.text} />
      </Form>
    </div>
  );
}

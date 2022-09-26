import Input from "../Components/Input";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import AlertCustom from "../Components/Alert";
import { useParams } from "react-router-dom";
import { getByIdProducts } from "../Services/productsServices";
import { useNavigate } from "react-router-dom";
import axios from "../Config/Axios";
import { useState, useEffect } from "react";



function ModifyItem() {

  const [alert, setAlert] = useState({ variant: "", text: "" });


  const {
    register,
    handleSubmit, setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getByIdProducts(id);
        setValue("_id", response.data._id);
        setValue("name", response.data.name);
        setValue("price", response.data.price);
        setValue("code", response.data.code);
        setValue("description", response.data.description);
        setValue("destacado", response.data.destacado);
        setValue("category", response.data.category);

      } catch (e) {}
    };
    request();
  }, [id, setValue]);
  const onSubmit = async (data) => {

    var config = {
      method: "put",
      url: "https://api-nodeservice.herokuapp.com/products/"+id,
      headers: {        
        "x-access-token": `${JSON.parse(window.localStorage.getItem("access_token"))}`,"Content-Type": "application/json",
      },
      data: data,
    };


    console.log("Form", data);
    try {
      const document = await axios(config);
      console.log("document", document);
      setAlert({
        variant: "success",
        text: "Item Updated",
      })
      setTimeout(() => {
        navigate("/")
      }, 1000);
    
    } catch (e) {
      console.log(e);
      setAlert({ variant: "danger", text: e });

    }
  };
  return (
    <>

      <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
          label="ID"
          register={{ ...register("_id") }}
        />
        {errors._id && <span>Mandatory field</span>}
        <Input
          label="Name"
          register={{ ...register("name", { required: true }) }}
        />
        {errors.nombre && <span>Mandatory field</span>}
        <Input
          label="Price"
          type="number"
          register={{ ...register("price", { required: true }) }}
        />
        {errors.precio && <span>Mandatory field</span>}
        <Input
          label="Description"
          register={{ ...register("description", { required: true }) }}
        />
        {errors.descripcion && <span>Mandatory field</span>}
        <Input
          label="URL Thumbnail"
          register={{ ...register("code", { required: true }) }}
        />
        {errors.thumbnail && <span>Mandatory field</span>}
        <Input
          label="Featured (true/false)"
          register={{ ...register("destacado") }}
        />
        {errors.destacado && <span>Mandatory</span>}
        <Input
          label="Category (ID)"
          register={{ ...register("category", { required: true }) }}
        />
        {errors.thumbnail && <span>Mandatory field</span>}

        <Button variant="dark" type="submit">
          Update
        </Button>
        <AlertCustom variant={alert.variant} text={alert.text} />

      </Form>
    </>
  );
}

export default ModifyItem;






/*
export default function ModifyItem(props) {
  const context = useContext(AuthContext);
  const [alert, setAlert] = useState({ variant: "", text: "" });

  const {
    register,
    handleSubmit, setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();




  const onSubmit = async (data) => {

    var config = {
      method: "update",
      url: `https://api-nodeservice.herokuapp.com/products/${data.id}`,
      headers: {        
        "x-access-token": `${JSON.parse(window.localStorage.getItem("access_token"))}`,"Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        setAlert({
          variant: "success",
          text: "Item Added",
        })
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
          Modify Item
        </Button>
        <AlertCustom variant={alert.variant} text={alert.text} />
      </Form>
    </div>
  );
}
*/
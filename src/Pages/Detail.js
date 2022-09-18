import { useParams } from "react-router-dom";
import { getByIdProducts } from "../Services/productsServices";
import  { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await getByIdProducts(id);
        setProduct(response.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    request();
  }, [id]);

  if (loading) {
    return "loading...";
  } else {
    return (
      <div>
        <ul>
          <li>Name: {product.name}</li>
          <li>Price: {product.price}</li>
          <li>Description: {product.description}</li>
          <li>Code: {product.code}</li>
          <li>ID: {product._id}</li>
        </ul>
        <Button type="submit" variant="warning" onClick={() => navigate("/buy")}>
          Buy
        </Button>
 
      </div>
    );
  }
}

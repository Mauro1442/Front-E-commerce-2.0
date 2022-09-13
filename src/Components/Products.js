import { useEffect, useState } from "react";
import { getAllProducts } from "../Services/productsServices";
import Product from "./Product";
import { Row } from "react-bootstrap";

export default function Products() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);

        const response = await getAllProducts();
        console.log("response", response);
        setProductsList(response.data);
        setLoading(false);
        console.log("products", response);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    request();
  }, []);
  if (loading) {
    return "loading...";
  } else {
    return (
      <div>
        <h1>Products</h1>
        <Row>
          {productsList.map((productOfList) => (
            <Product
              name={productOfList.name}
              price={productOfList.price}
              description={productOfList.description}
              id={productOfList._id}
              code={productOfList.code}
            />
          ))}
        </Row>
      </div>
    );
  }
}

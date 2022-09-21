import { useEffect, useState } from "react";
import { getByIdProducts } from "../Services/productsServices";
import Product from "./Product";
import { Row } from "react-bootstrap";

export default function Products(props) {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
    const {search} = props

  const item = "?buscar="+search


  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);

        const response = await getByIdProducts(item);
        setProductsList(response.data);
        setLoading(false);
        console.log("products", response);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    request();
  }, [item]);
  if (loading) {
    return "loading...";
  } else {
    return (
      <div>
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

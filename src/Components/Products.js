import React, { useEffect, useState } from "react";
import { getAllProducts } from "../Services/productsServices";
import Product from "./Product";

export default function Products() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      try {
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
        {productsList.map((productOfList) => (
          <Product
            name={productOfList.name}
            price={productOfList.price}
            description={productOfList.description}
          />
        ))}
      </div>
    );
  }
}

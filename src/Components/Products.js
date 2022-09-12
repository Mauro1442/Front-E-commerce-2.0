import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function Products() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api-nodeservice.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsList(data);
        setLoading(false);
        console.log("data", data.results);
      })
      .catch((e) => {
        console.log(e);
      });
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

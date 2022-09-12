import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function Products() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod#options")
      .then((res) => res.json())
      .then((data) => {
        setProductsList(data.results);
        setLoading(false);
        console.log("data", data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Products</h1>
        {productsList.map((productOfList) => (
          <Product
            title={productOfList.title}
            price={productOfList.price}
            description={productOfList.description}
          />
        ))}
      </div>
    );
  }
}

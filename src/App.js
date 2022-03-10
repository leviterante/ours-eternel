import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";

import { Home } from "./pages";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  const highlights = products.slice(0, 5);

  return (
    <div>
      <Home products={highlights} />
    </div>
  );
};

export default App;

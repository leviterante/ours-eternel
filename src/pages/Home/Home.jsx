import React from "react";

import {
  Announcement,
  Navbar,
  Slider,
  Newsletter,
  Footer,
  Highlights,
} from "../../components";

const Home = ({ products }) => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Highlights products={products} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;

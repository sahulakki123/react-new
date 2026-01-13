import React from "react";
import { useNavigate } from "react-router-dom";

import im1 from "../assets/react.svg";
import im2 from "../assets/im.jpg";
import im3 from "../assets/react.svg";
import im4 from "../assets/react.svg";
import im5 from "../assets/react.svg";

const Home = () => {
  const navigate = useNavigate();

  const product = {
    id: 1,
    images: [im1, im2, im3, im4, im5],
    title: "Muscle Tech Nitro-Tech Whey Protein",
    price: "₹2,899.00",
    oldPrice: "₹3,350.00",
    rating: "4.6",
  };

  const openProduct = () => {
    navigate("/product", { state: product });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Whey Proteins</h1>

      <img
        src={im1}
        alt="product"
        width="220"
        style={{ cursor: "pointer" }}
        onClick={openProduct}
      />
    </div>
  );
};

export default Home;


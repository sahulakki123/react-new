import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Order.css";

const ProductPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/");
  }, [state, navigate]);

  if (!state) return null;

  const [mainImg, setMainImg] = useState(state.images[0]);

  return (
    <div className="product-page">
      {/* LEFT */}
      <div className="left-section">
        <img src={mainImg} alt="product" className="main-img" />

        <div className="thumb-row">
          {state.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              onClick={() => setMainImg(img)}
              className="thumb"
            />
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="right-section">
        <h2>{state.title}</h2>
        <p>⭐ {state.rating}</p>
        <h3>{state.price}</h3>
        <p style={{ textDecoration: "line-through" }}>{state.oldPrice}</p>
      </div>
    </div>
  );
};

export default ProductPage;

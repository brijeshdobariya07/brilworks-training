import React from "react";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Order Placed</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default OrderDetails;

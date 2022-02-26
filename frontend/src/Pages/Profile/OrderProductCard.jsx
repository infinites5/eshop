import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px auto;
  padding: 10px;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    * {
      margin: 5px;
    }
  }
  > div:nth-child(1) {
    flex-basis: 2;
  }
  > div:nth-child(2) {
    flex-basis: 8;
    text-transform: uppercase;
  }

  img {
    width: 100px;
    object-fit: contain;
  }
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 700;

  ::before {
    content: "₹ ";
  }
`;

function OrderProductCard({ product_name, product_img, price }) {
  return (
    <CardWrapper>
      <div>
        <img src={product_img} alt={product_name}></img>
      </div>
      <div>
        <h4>{product_name.slice(0, 50) + "..."}</h4>
        <ProductPrice>{price}</ProductPrice>
      </div>
    </CardWrapper>
  );
}

export default OrderProductCard;

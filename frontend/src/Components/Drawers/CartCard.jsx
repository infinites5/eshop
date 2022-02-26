import React from "react";
import styled from "styled-components";
import RemoveIcon from "@material-ui/icons/Remove";

const CardWrapper = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  border-bottom: 1px solid #e6e1e1;
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

const RemoveIconHolder = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: #302d2d;
  background: #d8d5d5;
  border-radius: 5px;
  transform: scale(0.8);
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 700;

  ::before {
    content: "₹ ";
  }
`;

function CartCard({ _id, productId, onDeleteHandler }) {
  const { product_name, product_img, price } = productId;
  return (
    <CardWrapper>
      <RemoveIconHolder onClick={() => onDeleteHandler(_id)}>
        <RemoveIcon fontSize="small" />
      </RemoveIconHolder>
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

export default CartCard;

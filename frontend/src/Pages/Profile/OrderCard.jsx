import React from "react";
import styled from "styled-components";
import OrderProductCard from "./OrderProductCard";

const OrderCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 8px 8px 16px #cac5c5;
`;

const OrderCardHead = styled.div`
  display: grid;
  place-content: center;
  > div {
    display: flex;
    margin: 10px;
    font-size: 16px;
    > div:nth-child(1) {
      width: 150px;
      font-weight: 500;
    }
  }
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 700;

  ::before {
    content: "₹ ";
  }
`;

const OrderCardBody = styled.div``;

function OrderCard({
  address,
  city,
  createdAt,
  email,
  name,
  total,
  state,
  products,
  _id,
  index,
}) {
  let orderDate = new Date(createdAt).toLocaleDateString();

  let orderTime = new Date(createdAt).toLocaleTimeString();

  return (
    <OrderCardWrapper>
      <OrderCardHead>
        <div>
          <h1>{index + 1}</h1>
        </div>
        <div>
          <div>
            <p>Order Id</p>
          </div>
          <div>
            <p>{_id}</p>
          </div>
        </div>
        <div>
          <div>
            <p>Ordered Date</p>
          </div>
          <div>
            <p>{orderDate}</p>
          </div>
        </div>
        <div>
          <div>
            <p>Ordered Time</p>
          </div>
          <div>
            <p>{orderTime}</p>
          </div>
        </div>
        <div>
          <div>
            <p>Shipping Address</p>
          </div>
          <div>
            <p>{address}</p>
          </div>
        </div>
        <div>
          <div>
            <p>City</p>
          </div>
          <div>
            <p>{city}</p>
          </div>
        </div>
        <div>
          <div>
            <p>State</p>
          </div>
          <div>
            <p>{state}</p>
          </div>
        </div>
        <div>
          <div>
            <p>Amount Paid</p>
          </div>
          <div>
            <ProductPrice>{total}</ProductPrice>
          </div>
        </div>
      </OrderCardHead>
      <OrderCardBody>
        {products?.map((item) => (
          <OrderProductCard key={item._id} {...item} />
        ))}
      </OrderCardBody>
    </OrderCardWrapper>
  );
}

export default OrderCard;

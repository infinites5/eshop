import React from "react";
import styled from "styled-components";
import CartCard from "../../Components/Drawers/CartCard";
import { cartSubTotalCalculator } from "../../Utils/cartCalculator";

const CheckoutCartWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  height: 500px;
  flex-wrap: wrap;
  min-width: 350px;
  > div {
    margin: 10px;
    width: 600px;
    padding: 20px;
  }
`;

const ProductsInCart = styled.div`
  overflow-y: auto;
`;

const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;

  > div:nth-child(2) {
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
const PlaceOrder = styled.button`
  background-color: ${(props) => props.theme.btnBackground};
  width: 100%;
  color: white;
  margin: 10px 0 0;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid ${(props) => props.theme.btnBackground};
  :hover {
    background-color: white;
    color: ${(props) => props.theme.btnBackground};
  }
`;

const CartFooter = styled.div`
  > div:nth-child(1) {
    display: flex;
    font-size: 24px;
    align-items: center;
    justify-content: space-between;
  }
`;
const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: ${(props) => (props.weight ? 600 : 400)};
  ::before {
    content: "₹ ";
  }
`;

function CheckoutCart({
  totalPrice,
  setTotalPrice,
  price,
  setPrice,
  discount,
  setDiscount,
  setActiveStep,
  cart,
  onDeleteHandler,
}) {
  React.useEffect(() => {
    let subTotal = cartSubTotalCalculator(cart);
    let discount = Math.floor(subTotal * 0.2);
    let total = subTotal - discount;
    setPrice(subTotal);
    setDiscount(discount);
    setTotalPrice(total);
  }, [cart]);

  React.useEffect(() => {}, []);

  return (
    <CheckoutCartWrapper>
      <ProductsInCart>
        <div>
          <h1>Products</h1>
        </div>
        <div>
          {cart?.map((item) => (
            <CartCard onDeleteHandler={onDeleteHandler} {...item}></CartCard>
          ))}
        </div>
      </ProductsInCart>
      <CartDetails>
        <div>
          <h1>Details</h1>
        </div>
        <div>
          <div>
            <div>
              <p>Total Items</p>
            </div>
            <div>
              <p>{cart.length}</p>
            </div>
          </div>
          <div>
            <div>
              <p>Price</p>
            </div>
            <div>
              <ProductPrice>{price}</ProductPrice>
            </div>
          </div>
          <div>
            <div>
              <p>Discount</p>
            </div>
            <div>
              <ProductPrice>{discount}</ProductPrice>
            </div>
          </div>
          <div>
            <div>
              <p>Delivery Charges</p>
            </div>
            <div>
              <p>Free</p>
            </div>
          </div>
        </div>
        <CartFooter>
          <div>
            <h3>Total Price</h3>
            <ProductPrice weight="bold">{totalPrice}</ProductPrice>
          </div>
          <div>
            <PlaceOrder onClick={() => setActiveStep(1)}>Next</PlaceOrder>
          </div>
        </CartFooter>
      </CartDetails>
    </CheckoutCartWrapper>
  );
}

export default CheckoutCart;

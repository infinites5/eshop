import React from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { postOrderHandler } from "../../Redux/Orders/action";
import { emptyCartHandler, getCartHandler } from "../../Redux/CartWish/action";
import { useHistory } from "react-router-dom";

const PaymentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 50vh;
  justify-content: space-between;
  > div:nth-child(1) {
    display: grid;
    place-content: center;
    font-size: 40px;
    padding: 0;
    margin: 0;
  }
  > div {
    width: 28%;
    min-width: 350px;
    margin: 10px;
    padding: 20px;
  }
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.btnBackground};
  width: 40%;
  min-width: 150px;
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

const PaymentSummary = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  justify-content: space-between;
  b {
    font-weight: 600;
  }
`;

const TotalPrice = styled.div`
  font-size: 50px;
  font-weight: 500;
  flex-grow: 2;
  display: grid;
  place-content: center;
  border-radius: 5px;
  ::before {
    content: "Total Payable";
    font-size: 16px;
  }
`;

const PaySection = styled.div`
  display: flex;
  flex-direction: column;

  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }
`;

function Payment({ setActiveStep, formData, totalPrice }) {
  const cartArray = useSelector((state) => state.cartWishReducer.uniqueCart);
  const userData = useSelector((state) => state.authReducer.userData);
  const { name, email, address, pin, city, state } = formData;
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePayment = () => {
    let payload = {
      name,
      email,
      address,
      pin,
      city,
      state,
      products: cartArray,
      userId: userData._id,
      total: totalPrice,
    };
    dispatch(postOrderHandler(payload)).then((res) =>
      dispatch(emptyCartHandler(userData._id)).then(
        (res) => dispatch(getCartHandler(userData._id)),
        setTimeout(() => {
          history.push("/");
        })
      )
    );
  };

  return (
    <PaymentWrapper>
      <div>
        <h1>Checkout</h1>
      </div>
      <PaymentSummary>
        <div>
          <p>
            <b>Name</b> : {name}
          </p>
        </div>
        <div>
          <p>
            <b>Email </b> : {email}
          </p>
        </div>
        <div>
          <p>
            <b>Address</b> : {address}
          </p>
        </div>
        <div>
          <p>
            <b>Pin</b> : {pin}
          </p>
        </div>
        <div>
          <p>
            <b>City</b> : {city}
          </p>
        </div>
        <div>
          <p>
            <b>State</b> : {state}
          </p>
        </div>
      </PaymentSummary>
      <PaySection>
        <TotalPrice> ₹ {totalPrice}</TotalPrice>
        <div>
          <SubmitButton onClick={() => setActiveStep(1)} type="button">
            Back
          </SubmitButton>
          <StripeCheckout
            stripeKey="pk_test_51GuhVYJILFs8StGHjjzZha1VPsLlSzlDyahYHZksGhiDQZ94VIOGLzLOOsZoGwkm9nKgMM3qnVMg8ycODAV2FbWq00z0RR74IN"
            token={handlePayment}
            amount={totalPrice * 100}
            currency="INR"
          >
            <SubmitButton type="button">Pay</SubmitButton>
          </StripeCheckout>
        </div>
      </PaySection>
    </PaymentWrapper>
  );
}

export default Payment;

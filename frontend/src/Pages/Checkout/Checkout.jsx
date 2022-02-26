import React from "react";
import styled from "styled-components";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import CreateIcon from "@material-ui/icons/Create";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentIcon from "@material-ui/icons/Payment";
import StepConnector from "@material-ui/core/StepConnector";
import { withStyles } from "@material-ui/core/styles";
import CheckoutCart from "./CheckoutCart";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartHandler, getCartHandler } from "../../Redux/CartWish/action";
import { cartSubTotalCalculator } from "../../Utils/cartCalculator";
import CheckoutForm from "./CheckoutForm";
import StripeCheckout from "react-stripe-checkout";
import Payment from "./Payment";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundColor: "green",
      height: "3px",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "green",
      height: "3px",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const CheckoutWrapper = styled.div`
  /* min-height: 100vh; */
`;

const CheckoutMain = styled.div`
  width: 80vw;
  min-height: 80vh;
  margin: 5vh auto;
  border-radius: 10px;
  /* box-shadow: 8px 8px 16px #c9c5c5; */
  padding: 20px;
`;

const CheckoutHead = styled.div`
  border-radius: 10px;
`;

const CheckoutBody = styled.div``;

// confirm cart => form => payment

const initState = {
  name: "",
  email: "",
  address: "",
  city: "",
  pin: "",
  state: "",
};

function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState(initState);
  const [price, setPrice] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartWishReducer.cart);
  const userData = useSelector((state) => state.authReducer.userData);

  function onDeleteHandler(id) {
    dispatch(deleteCartHandler(id)).then((res) =>
      dispatch(getCartHandler(userData._id))
    );
  }

  return (
    <CheckoutWrapper>
      <CheckoutMain>
        <CheckoutHead>
          <Stepper
            connector={<ColorlibConnector />}
            alternativeLabel
            activeStep={activeStep}
          >
            <Step>
              <StepLabel StepIconComponent={ShoppingCartIcon}>Cart</StepLabel>
            </Step>
            <Step>
              <StepLabel StepIconComponent={CreateIcon}>Details</StepLabel>
            </Step>
            <Step>
              <StepLabel StepIconComponent={PaymentIcon}>Payment</StepLabel>
            </Step>
          </Stepper>
        </CheckoutHead>
        <CheckoutBody>
          {activeStep === 0 ? (
            <CheckoutCart
              setActiveStep={setActiveStep}
              onDeleteHandler={onDeleteHandler}
              cart={cart}
              price={price}
              setPrice={setPrice}
              discount={discount}
              setDiscount={setDiscount}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          ) : activeStep === 1 ? (
            <CheckoutForm
              initState={initState}
              formData={formData}
              setFormData={setFormData}
              setActiveStep={setActiveStep}
            />
          ) : (
            <Payment
              formData={formData}
              setActiveStep={setActiveStep}
              totalPrice={totalPrice}
            ></Payment>
          )}
        </CheckoutBody>
      </CheckoutMain>
    </CheckoutWrapper>
  );
}

export default Checkout;

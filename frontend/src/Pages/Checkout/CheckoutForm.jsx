import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import orderImage from "../../Images/order.svg";

export const Form = styled.form`
  display: flex;
  width: 100%;

  > div {
    width: 45%;
    margin: 20px;
    margin: 0 auto;
    min-width: 400px;
  }
  > div:nth-child(1) {
    > div {
      width: 100%;
      margin: 20px 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      > input {
        width: 100%;
        padding: 20px;
        border: 1px solid #e4e4e4;
        border-radius: 5px;
        outline: none;
        font-size: 18px;
        transition: all 500ms ease;
        :focus {
          border: 1px solid #858282;
        }
      }
    }
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    border: 1px solid black;

    img {
      width: 500px;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.btnBackground};
  min-width: 140px;
  width: 45%;
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

function CheckoutForm({ setActiveStep, formData, setFormData }) {
  function onChangeHandler(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    setActiveStep(3);
  }

  const { name, email, address, pin, city, state } = formData;

  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <div>
          <div>
            <input
              onChange={onChangeHandler}
              name="name"
              placeholder="Name"
              value={name}
              required
            />
          </div>
          <div>
            <input
              onChange={onChangeHandler}
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              required
            />
          </div>
          <div>
            <input
              onChange={onChangeHandler}
              name="address"
              placeholder="Address"
              value={address}
              required
            />
          </div>
          <div>
            <input
              onChange={onChangeHandler}
              name="city"
              placeholder="City"
              value={city}
              required
            />
          </div>
          <div>
            <input
              onChange={onChangeHandler}
              name="pin"
              placeholder="Pincode"
              value={pin}
              required
            />
          </div>
          <div>
            <input
              onChange={onChangeHandler}
              name="state"
              placeholder="State"
              value={state}
              required
            />
          </div>
          <div>
            <SubmitButton type="button" onClick={() => setActiveStep(0)}>
              Back
            </SubmitButton>
            <SubmitButton>Next</SubmitButton>
          </div>
        </div>
      </Form>
    </>
  );
}

export default CheckoutForm;

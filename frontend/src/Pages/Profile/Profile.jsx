import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersHandler } from "../../Redux/Orders/action";
import OrderCard from "./OrderCard";
import wave from "../../Images/wave.svg";
import empty from "../../Images/empty.svg";

const ProfileWrapper = styled.div`
  min-height: 100vh;
  position: relative;

  > div {
    width: 100%;
    max-width: 1400px;
    margin: 100px auto;
  }
`;

const ProfileSection = styled.div`
  background: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  padding: 20px;
  justify-content: center;
  color: #ffffff;
`;

const ProfilePicture = styled.div`
  > img {
    border-radius: 50%;
    background-color: #eee7e7;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;

  > div {
    display: flex;
    align-items: center;
    margin: 15px;
  }

  b {
    font-weight: 600;
    width: 130px;
  }
  p {
    text-transform: capitalize;
  }
  span {
    font-size: 20px;
  }
`;

const ProfileOrders = styled.div`
  > div {
    margin: 10px;
  }
`;

const OrderEmpty = styled.div`
  background: url(${empty});
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 50vh;
  background-position: center;
`;

function Profile() {
  const userData = useSelector((state) => state.authReducer.userData);
  const orders = useSelector((state) => state.ordersReducer.orders);
  const dispatch = useDispatch();

  const { first_name, last_name, email, _id } = userData;

  React.useEffect(() => {
    dispatch(getOrdersHandler(_id));
  }, []);

  console.log(orders);
  return (
    <ProfileWrapper>
      <div>
        <ProfileSection>
          <ProfilePicture>
            <img
              alt="profile pic"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/ad507775-57a5-41a9-8138-0b0ec5c5ea03/d7kry6f-fabc6a09-ac15-47e7-a46b-1349bb848f91.png"
            ></img>
          </ProfilePicture>
          <ProfileInfo>
            <div>
              <b>First Name</b>
              <p>{first_name}</p>
            </div>
            <div>
              <b>Last Name</b>
              <p>{last_name}</p>
            </div>
            <div>
              <b>Email</b>
              <span>{email}</span>
            </div>
          </ProfileInfo>
        </ProfileSection>
        <ProfileOrders>
          <div>
            <h1>Orders</h1>
          </div>
          <div>
            {orders?.length === 0 ? (
              <OrderEmpty> </OrderEmpty>
            ) : (
              orders?.map((item, index) => (
                <OrderCard index={index} key={item._id} {...item} />
              ))
            )}
          </div>
        </ProfileOrders>
      </div>
    </ProfileWrapper>
  );
}

export default Profile;

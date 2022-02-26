import React from "react";
import Drawer from "@material-ui/core/Drawer";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import {
  deleteWishlistHandler,
  getCartHandler,
  getWishlistHandler,
  postCartHandler,
  uniqueWishlistProductsHandler,
} from "../../Redux/CartWish/action";
import { wishlistDuplicateHandler } from "../../Utils/duplicateHandler";

const WishlistWrapper = styled.div`
  height: 420px;
  padding: 20px;
`;

const WishlistHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.2ch;
`;

const WishlistBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding: 10px;
  overflow-x: auto;
  direction: rtl;
`;

const WishlistCard = styled.div`
  border: 1px solid #cecaca;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
  height: 300px;
  margin-right: 20px;
  align-items: center;
  padding: 30px;
  border-radius: 5px;
  p {
    font-weight: 500;
    margin: 10px;
  }
  img {
    width: 200px;
    height: 150px;
    object-fit: contain;
  }
`;

const Button = styled.button`
  font-size: 14px;
  font-weight: 400;
  background-color: ${(props) => props.theme.btnBackground};
  color: white;
  text-transform: uppercase;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.btnBackground};
  border-radius: 5px;
  outline: none;
  transition: all 500ms ease;
  margin: 5px;
  :hover {
    color: ${(props) => props.theme.btnBackground};
    background-color: white;
  }
`;

function WishList({ wishlistState, setWishlistState }) {
  const wishlistArray = useSelector((state) => state.cartWishReducer.wishlist);
  const userData = useSelector((state) => state.authReducer.userData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      uniqueWishlistProductsHandler(wishlistDuplicateHandler(wishlistArray))
    );
  }, [wishlistArray]);

  function moveToCartHandler(id, productId) {
    onDeleteHandler(id);
    let payload = {
      userId: userData?._id,
      productId,
    };
    dispatch(postCartHandler(payload)).then((res) =>
      dispatch(getCartHandler(userData._id))
    );
  }

  function onDeleteHandler(id) {
    dispatch(deleteWishlistHandler(id)).then((res) =>
      dispatch(getWishlistHandler(userData._id))
    );
  }
  return (
    <Drawer
      anchor="bottom"
      open={wishlistState}
      onClose={() => setWishlistState(false)}
    >
      <WishlistWrapper>
        <WishlistHead>
          <div>
            <h1>Wishlist</h1>
          </div>
          <div>
            <ClearIcon
              fontSize="large"
              onClick={() => setWishlistState(false)}
            />
          </div>
        </WishlistHead>
        <WishlistBody>
          {wishlistArray?.map((item) => (
            <WishlistCard key={item._id}>
              <div>
                <img
                  src={item?.productId?.product_img}
                  alt={item?.productId?.product_name}
                ></img>
              </div>
              <div>
                <p>{item?.productId?.product_name.slice(0, 20)}</p>
              </div>
              <div>
                <Button
                  onClick={() =>
                    moveToCartHandler(item._id, item?.productId?._id)
                  }
                >
                  Move to cart
                </Button>
                <Button onClick={() => onDeleteHandler(item._id)}>
                  Remove
                </Button>
              </div>
            </WishlistCard>
          ))}
        </WishlistBody>
      </WishlistWrapper>
    </Drawer>
  );
}

export default WishList;

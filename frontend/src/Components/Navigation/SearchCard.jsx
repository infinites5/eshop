import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

const SearchCardWrapper = styled.div`
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #f6f6f6;
  :nth-last-child(1) {
    border: none;
  }
  > div:nth-child(1) {
    width: 90%;
    text-transform: capitalize;
  }
  > div:nth-child(2) {
    width: 10%;
  }
  :hover {
    background-color: #f8f8f8;
    border-radius: 5px;
  }
`;
const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 600;
  ::before {
    content: "₹ ";
  }
`;

function SearchCard({
  setSearchModal,
  _id,
  product_name,
  product_img,
  price,
  categoryId,
  setSearch,
}) {
  const history = useHistory();
  function onClickHandler() {
    history.push(`/shop/${_id}`);
    setSearchModal(false);
    setSearch("");
  }
  return (
    <SearchCardWrapper onClick={onClickHandler}>
      <div>
        <p>{product_name}</p>
      </div>
      <div>
        <ProductPrice>{price}</ProductPrice>
      </div>
    </SearchCardWrapper>
  );
}

export default SearchCard;

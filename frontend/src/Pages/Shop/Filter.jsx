import React from "react";
import styled from "styled-components";
import {
  MainHeading,
  Paragraph,
  SubHeadingOne,
  SubHeadingTwo,
} from "../../Components/Global/Typography";
import Slider from "@material-ui/core/Slider";

const FilterWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  border-bottom: 1px solid #e3e3e3;
`;

const SectionHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 25px;
  margin: 10px 0;
  justify-content: space-between;
`;

const SectionItemHolder = styled.div`
  height: 200px;
  overflow-y: auto;
`;

const SectionItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  text-transform: uppercase;
  font-weight: 500;
  input {
    margin: 5px;
  }
  > div {
    margin: 5px 10px;
  }
  span {
  }
`;

const SectionSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  > input {
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 2px solid #a19f9f;
    transition: all 500ms ease;
  }
  > input:focus {
    border-bottom: 2px solid #1f7de9;
  }
`;

const SliderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0 10px;
  p {
    font-weight: 500;
  }
`;

const ClearALL = styled.button`
  background-color: #ebe6e6;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  visibility: ${(props) => props.visibility};
`;

function Filter({
  brands,
  categories,
  minPrice,
  maxPrice,
  setPriceLimit,
  onCategoryChangeHandler,
  onBrandChangeHandler,
  priceLimit,
  categoriesArray,
  brandsArray,
  onCategoryClearHandler,
  onBrandClearHandler,
}) {
  let [forSearchBrands, setForSearchBrands] = React.useState([]);
  let [forSearchCategories, setForSearchCategories] = React.useState([]);
  let [tempValue, setTempValue] = React.useState(priceLimit);

  let onCategorySearchHandler = (e) => {
    if (!e.target.value.trim()) {
      return setForSearchCategories(categories);
    }
    let arr = categories.filter((item) =>
      item.name
        .substr(e.target.value)
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setForSearchCategories(arr);
  };

  let onBrandSearchHandler = (e) => {
    if (!e.target.value.trim()) {
      return setForSearchBrands(brands);
    }
    let arr = brands.filter((item) =>
      item.name
        .substr(e.target.value)
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setForSearchBrands(arr);
  };

  React.useEffect(() => {
    setForSearchCategories(categories);
    setForSearchBrands(brands);
  }, [categories, brands]);

  return (
    <FilterWrapper>
      <Section>
        <SectionHead>
          <SubHeadingTwo>Price</SubHeadingTwo>
        </SectionHead>
        <SectionItem>
          <Slider
            min={minPrice}
            max={maxPrice}
            value={tempValue}
            onChange={(e, newValue) => setTempValue(newValue)}
            onChangeCommitted={(e, newValue) => setPriceLimit(newValue)}
            valueLabelDisplay="auto"
          />
        </SectionItem>
        <SliderInfo>
          <div>
            <Paragraph>₹ {priceLimit[0]}</Paragraph>
          </div>
          <div>
            <Paragraph>₹ {priceLimit[1]}</Paragraph>
          </div>
        </SliderInfo>
      </Section>
      <Section>
        <SectionHead>
          <SubHeadingTwo>Category</SubHeadingTwo>
          <div>
            <ClearALL
              onClick={onCategoryClearHandler}
              visibility={categoriesArray.length !== 0 ? "visible" : "hidden"}
            >
              Clear all
            </ClearALL>
          </div>
        </SectionHead>
        <SectionSearch>
          <input
            onChange={onCategorySearchHandler}
            placeholder="Search categories"
          />
        </SectionSearch>
        <SectionItemHolder>
          {forSearchCategories?.map((item, index) => (
            <SectionItem>
              <div key={item._id}>
                <label>
                  <input
                    className="categories"
                    onChange={onCategoryChangeHandler}
                    type="checkbox"
                    name={item._id}
                  ></input>
                  {item.name}
                </label>
              </div>
            </SectionItem>
          ))}
        </SectionItemHolder>
      </Section>
      <Section>
        <SectionHead>
          <SubHeadingTwo>Brands</SubHeadingTwo>
          <div>
            <ClearALL
              onClick={onBrandClearHandler}
              visibility={brandsArray.length !== 0 ? "visible" : "hidden"}
            >
              Clear all
            </ClearALL>
          </div>
        </SectionHead>

        <SectionSearch>
          <input onChange={onBrandSearchHandler} placeholder="Search brands" />
        </SectionSearch>
        <SectionItemHolder>
          {forSearchBrands?.map((item, index) => (
            <SectionItem>
              <div key={item._id}>
                <label>
                  <input
                    className="brands"
                    onChange={onBrandChangeHandler}
                    name={item._id}
                    type="checkbox"
                  ></input>
                  {item.name}
                </label>
              </div>
            </SectionItem>
          ))}
        </SectionItemHolder>
      </Section>
    </FilterWrapper>
  );
}

export default Filter;

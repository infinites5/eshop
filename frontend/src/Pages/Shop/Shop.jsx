import React from "react";
import styled from "styled-components";
import { PageWrapper } from "../../Components/Global/Wrapper";
import Filter from "./Filter";
import { useHistory } from "react-router-dom";
import {
  getProductsHandler,
  getCategoriesHandler,
  getBrandsHandler,
} from "../../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Paragraph, SubHeadingThree } from "../../Components/Global/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Hero from "./Carousel";
import {
  getCartHandler,
  postCartHandler,
  getWishlistHandler,
  postWishlistHandler,
  deleteWishlistHandler,
} from "../../Redux/CartWish/action";
import Loader from "../../Components/Loader/Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 50px auto;
  max-width: 1600px;

  > div {
    padding: 10px;
  }
  > div:nth-child(1) {
    width: 25%;
  }
  > div:nth-child(2) {
    width: 75%;
  }
`;

const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SortingField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px;

  p {
    font-size: 22px;
  }
  select {
    font-size: 16px;
    padding: 8px 15px;
    border-radius: 5px;
    margin: 0 -15%;
    outline: none;
    border: 1px solid #dad5d5;
  }
  option {
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 5px;
    width: 200px;
    border: 1px solid #dad5d5;
  }
`;

const ShopItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PaginationWapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;
`;

function Shop() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  const productsTotal = useSelector(
    (state) => state.productReducer.productsTotal
  );
  const brands = useSelector((state) => state.productReducer.brands);
  const categories = useSelector((state) => state.productReducer.categories);
  const minPrice = useSelector((state) => state.productReducer.minPrice);
  const maxPrice = useSelector((state) => state.productReducer.maxPrice);
  const userData = useSelector((state) => state.authReducer.userData);
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const wishlistArray = useSelector((state) => state.cartWishReducer.wishlist);
  const productsInCart = useSelector(
    (state) => state.cartWishReducer.uniqueCart
  );
  const productsInWishlist = useSelector(
    (state) => state.cartWishReducer.uniqueWishlist
  );

  const [priceLimit, setPriceLimit] = React.useState([0, 1000000000000]);
  const [brandsArray, setBrandsArray] = React.useState([]);
  const [categoriesArray, setCategoriesArray] = React.useState([]);
  const [allProducts, setAllProducts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortSelection, setSortSelection] = React.useState(0);

  const history = useHistory();

  React.useEffect(() => {
    setAllProducts(products);
  }, [products]);

  React.useEffect(() => {
    setPriceLimit([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const onCategoryChangeHandler = (e) => {
    let arr = [];
    let categoryClass = document.getElementsByClassName("categories");
    for (let i = 0; i < categoryClass.length; i++) {
      if (categoryClass[i].checked) {
        arr.push(categoryClass[i].name);
      }
    }
    setCategoriesArray(arr);
  };

  const onBrandChangeHandler = (e) => {
    let arr = [];
    let brandClass = document.getElementsByClassName("brands");
    for (let i = 0; i < brandClass.length; i++) {
      if (brandClass[i].checked) {
        arr.push(brandClass[i].name);
      }
    }
    setBrandsArray(arr);
  };

  const onBrandClearHandler = (e) => {
    setBrandsArray([]);
    let brandClass = document.getElementsByClassName("brands");
    for (let i = 0; i < brandClass.length; i++) {
      brandClass[i].checked = false;
    }
  };

  const onCategoryClearHandler = (e) => {
    setCategoriesArray([]);
    let categoryClass = document.getElementsByClassName("categories");
    for (let i = 0; i < categoryClass.length; i++) {
      categoryClass[i].checked = false;
    }
  };

  // function clearCheckbox(className) {
  //   let element = document.getElementsByClassName(className);
  //   for (let i = 0; i < element.length; i++) {
  //     element[i].checked = false;
  //   }
  // }

  //resetting page number whenever filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [brandsArray, categoriesArray]);

  function getProducts() {
    let payload = {
      priceLimit,
      categoriesArray,
      brandsArray,
    };
    dispatch(getProductsHandler(payload, currentPage, sortSelection));
  }

  React.useEffect(() => {
    getProducts();
  }, [priceLimit, categoriesArray, brandsArray, currentPage, sortSelection]);

  React.useEffect(() => {
    getProducts();
    dispatch(getCategoriesHandler());
    dispatch(getBrandsHandler());
  }, []);

  function addToCartHandler(productId) {
    if (!isAuth) {
      return history.push("/auth/login");
    }
    let payload = {
      userId: userData?._id,
      productId,
    };
    dispatch(postCartHandler(payload)).then((res) =>
      dispatch(getCartHandler(userData._id))
    );
  }
  function addToWishlistHandler(productId) {
    if (!isAuth) {
      return history.push("/auth/login");
    }
    let payload = {
      userId: userData?._id,
      productId,
    };
    dispatch(postWishlistHandler(payload)).then((res) =>
      dispatch(getWishlistHandler(userData._id))
    );
  }
  function removeFromWishlistHandler(productId) {
    let wishlistSolo = wishlistArray.find(
      (item) => item.productId._id === productId
    );

    dispatch(deleteWishlistHandler(wishlistSolo?._id)).then((res) =>
      dispatch(getWishlistHandler(userData._id))
    );
  }
  function onCheckoutHandler() {
    history.push("/checkout");
  }

  return (
    <>
      <PageWrapper>
        <Hero></Hero>
        <Container>
          <Filter
            minPrice={minPrice}
            maxPrice={maxPrice}
            brands={brands}
            categories={categories}
            setPriceLimit={setPriceLimit}
            priceLimit={priceLimit}
            onCategoryChangeHandler={onCategoryChangeHandler}
            onBrandChangeHandler={onBrandChangeHandler}
            categoriesArray={categoriesArray}
            brandsArray={brandsArray}
            setCategoriesArray={setCategoriesArray}
            setBrandsArray={setBrandsArray}
            onBrandClearHandler={onBrandClearHandler}
            onCategoryClearHandler={onCategoryClearHandler}
          ></Filter>
          <ShopContainer>
            <SortingField>
              <div>
                <Paragraph>
                  {productsTotal} {productsTotal === 1 ? "Product" : "Products"}
                </Paragraph>
              </div>
              <div>
                <select
                  value={sortSelection}
                  onChange={(e) => setSortSelection(e.target.value)}
                  name="price"
                  id="price"
                >
                  <option value={0}>Relevance</option>
                  <option value={-1}>High to low</option>
                  <option value={1}>Low to high</option>
                </select>
              </div>
            </SortingField>
            <ShopItems>
              {allProducts?.map((item) => (
                <ProductCard
                  onCheckoutHandler={onCheckoutHandler}
                  removeFromWishlistHandler={removeFromWishlistHandler}
                  addToCartHandler={addToCartHandler}
                  productsInCart={productsInCart}
                  addToWishlistHandler={addToWishlistHandler}
                  productsInWishlist={productsInWishlist}
                  key={item._id}
                  {...item}
                ></ProductCard>
              ))}
            </ShopItems>
            <PaginationWapper>
              <div className={classes.root}>
                <Pagination
                  count={Math.ceil(productsTotal / 9)}
                  variant="outlined"
                  shape="rounded"
                  page={currentPage}
                  onChange={(e, page) => setCurrentPage(page)}
                />
              </div>
            </PaginationWapper>
          </ShopContainer>
        </Container>
      </PageWrapper>
    </>
  );
}

export default Shop;

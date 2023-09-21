import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "../../pages/Loader/Loader";
import { BsFillCartCheckFill } from "react-icons/bs";
import ReactPaginate from "react-paginate";

const uRl = "https://dummyjson.com/products";
const ProductcardStore = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isProduct, setIsProduct] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  let location = useLocation();
  const { grid } = props;

  // get product

  const getProduct = () => {
    axios
      .get(`${uRl}`, {
        params: {
          page: pageNum,
        },
      })

      .then((response) => {
        setIsLoading(true);
        setIsProduct(response.data.products);
        setTotalRecords(response.data.limit);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const ratingChanged = (newRating) => {};
  return (
    <>
      {isLoading ? (
        isProduct &&
        isProduct.length > 0 &&
        isProduct.map((product, index) => {
          const imgUrl =
            product.images && product.images.length > 0
              ? product.images[0]
              : "no Image";
          return (
            <>
              <div
                index="true"
                key={product.id}
                className={`${
                  location.pathname === "/ourstore" ? ` gr-${grid}` : " col-3"
                }`}
              >
                <Link
                  to={`/single-product/${product.id}`}
                  className="card cardWidth product-card position-relative"
                >
                  <div className="wish-list position-absolute ">
                    <Link>
                      <img
                        src={imgUrl}
                        alt="wishlist"
                        className=" "
                        style={{ width: "110px", height: "200px" }}
                      />
                    </Link>
                  </div>

                  <div className="product_details">
                    <h6 className="brand mr-4">{product.title}</h6>
                  </div>
                  <div className="card-body product_details">
                    <h6 className="card-text  text-start mr-2">
                      {product.description}
                    </h6>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      //   value="3"
                      //   edit={false}
                      activeColor="#ffd700"
                    />
                    <h5 className="price">${product.price}</h5>
                    <Link
                      to={`/${product.id}`}
                      className="btn btn-success btn-sm "
                    >
                      <BsFillCartCheckFill /> add to cart
                    </Link>
                  </div>
                  <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-8">
                      <Link>
                        <img
                          src="images/prodcompare.svg"
                          alt="productcompare"
                          className=""
                        />
                      </Link>
                      <Link>
                        <img src="images/view.svg" alt="view" className="" />
                      </Link>
                      <Link>
                        <img
                          src="images/add-cart.svg"
                          alt="add-cart"
                          className=""
                        />
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })
      ) : (
        <Loader />
      )}
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
        containerClassName="pagination"
        pageCount={Math.ceil(totalRecords / 6)} //total
        onPageChange={(res) => {
          setPageNum(res.selected + 1);
        }}
      />
    </>
  );
};

export default ProductcardStore;

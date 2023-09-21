import React, { useEffect, useState } from "react";
import Breadcrums from "../Breadcrums/Breadcrums";
import Meta from "../../componets/Meta/Meta";
import Productcard from "../../componets/Productcard/Productcard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { Link, useParams } from "react-router-dom";
import Color from "../../componets/Color/Color";
import { MdOutlineCompareArrows } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
const uRl = "https://dummyjson.com/products";

const SingleProduct = () => {
  const productId = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState([]);
  const getProduct = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`, {
        params: {
          id: productId,
        },
      })

      .then((response) => {
        setIsLoading(true);
        console.log(response.data, "single proudct");
        if (response.data) {
          const {
            id: id,
            brand: brand,
            thumbnail: image,
            description: description,
            category: category,
            price: price,
            title: title,
            stock: stock,
            rating: rating,
          } = response.data;

          setSingleProduct(response.data);
        } else {
          setSingleProduct(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  // const props = {
  //   width: 100,
  //   height: 500,
  //   zoomWidth: 500,
  //   img: "https://i0.wp.com/ais.blog/wp-content/uploads/2019/10/iphone11-applewatch5review-aisblog-11.jpg?resize=700%2C467&ssl=1",
  // };

  const ratingChanged = (newRating) => {};

  const [orderProduct, setOrderProduct] = useState(true);
  useEffect(() => {
    setOrderProduct();
  }, []);

  // copy text
  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const {
    newId,
    newBrand,
    newImage,
    newDescription,
    newCategory,
    newPrice,
    newTitle,
    newStock,
    newRating,
  } = singleProduct;

  return (
    <>
      <Meta title={"Single Product"} />
      <Breadcrums title="Single Product" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row" key={singleProduct.id}>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="main-product-image bg-white">
                <div className="d-flex other-product-image flex-wrap gap-15">
                  <img
                    src={singleProduct.thumbnail}
                    className={{ width: "50px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h6 className="title text-success">{singleProduct.title}</h6>
                </div>
                <div className="border-bottom py-3">
                  <p className="fw-bold ">$ {singleProduct.price}</p>
                  <div className="d-flex align-items-center gap-10  ">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      value={singleProduct.rating}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">({singleProduct.rating})</p>
                  </div>
                  <a href="#review-data" className="mb-0 text-secondary">
                    Write a review
                  </a>
                </div>
                <div className="border-bottom ">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="text-secondary">Display :</h6>
                    <p className="text-secondary">Digital </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="text-secondary">Brand :</h6>
                    <p className="text-secondary">{singleProduct.brand}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="text-secondary">Strap Material :</h6>
                    <p className="text-secondary">Silicon</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="text-secondary">Heart Rate Monitor :</h6>
                    <p className="text-secondary">Yes</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="text-secondary">Bluetooth :</h6>
                    <p className="text-secondary">Yes</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="text-secondary">Water Resistance Depth :</h6>
                    <p className="text-secondary">IP68</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="text-secondary">Pedometer :</h6>
                    <p className="text-secondary">Yes</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="text-secondary ">Color</h6>
                    <p className="text-secondary color-text ">
                      <Color className="py-4" />
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="text-secondary">Quantity :</h6>
                    <div>
                      <input
                        type="number"
                        className="from-control"
                        min={1}
                        max={10}
                        style={{ width: "40px" }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success btn-sm border-0"
                    >
                      Add to cart
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary btn-sm border-0"
                    >
                      Buy it Now
                    </button>
                  </div>
                  <div className="d-flex align-items-center border-bottom  gap-10 py-2">
                    <div>
                      <MdOutlineCompareArrows className="fs-5 me-2" />
                      <Link className="text-secondary" to="#">
                        Add to Compare
                      </Link>
                    </div>
                    <div>
                      <AiOutlineHeart className="fs-5 me-2" />
                      <Link className="text-secondary" to="#">
                        Add to Wishlist
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center py-2">
                    <p className="text-secondary fw-bold">
                      Shopping & Returns :
                    </p>
                    <p className="text-secondary">
                      Nemo enim ipsam voluptatem quia aspernatur aut odit aut
                      loret fugit, sed
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center py-2">
                    <p className="text-secondary fw-bold">Copy Product Link:</p>
                    <Link
                      className="mb2"
                      to="#;"
                      onClick={() => {
                        copyToClipboard("https://preview.colorlib.com/#ashion");
                      }}
                    >
                      Copy Link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="popular-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-12"></div>
          </div>
        </div>
      </section>
      <div className="review-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-12">
              <div className="bg-white p-3">
                <h5>Description</h5>
                <p className="">{singleProduct.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="review-data"
        className="review-inner-wrapper py-5 home-wrapper-2"
      >
        <div className="container-xxl bg-white ">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-12">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h5 className="mb-2">Customer Review</h5>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      //   value="3"
                      //   edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                <div>
                  {orderProduct && (
                    <Link
                      className="text-dark text-decoration-underline"
                      to="#"
                    >
                      Write a review
                    </Link>
                  )}
                </div>
              </div>
              <div id="review" className="review-form py-4">
                <form action="" className=" d-flex flex-column mr-4">
                  <h5 className="mb-2 marginRight ">Write a review</h5>
                  <ReactStars
                    classNames="marginRight"
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    //   value="3"
                    //   edit={false}
                    activeColor="#ffd700"
                  />
                  <div className="mb-3">
                    <label for="floatingTextarea mr-4">Comments</label>
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                  </div>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      class="btn btn-dark btn-sm me-md-2 borderradius"
                      type="button"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
              <div className="reviews">
                <div className="review">
                  <div className="d-flex gap-10 align-item-center">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-2 mr-4 ">Rajkumar </h6>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        //   value="3"
                        //   edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius Provident similique accusantium nemo autem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="popular-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-12">
              <h4 className="section-heading">Our Popular Products</h4>
              <div className="d-flex">
                <Productcard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;

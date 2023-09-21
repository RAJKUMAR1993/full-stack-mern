import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Blog from "../../componets/Blogs/Blog";
import Productcard from "../../componets/Productcard/Productcard";
import Specialproducts from "../../componets/Productcard/Specialproducts";
import Container from "../../componets/Container/Container";
import { services } from "../../alldata/Data";

const Home = () => {
  return (
    <>
      <Container classOne="home-wrapper-1 py-2">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 col-xxl-3 py-2">
            <div className="main-banner position-relative  ">
              <img
                src="/images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="bannerOne"
              />
              <div className="main-banner-content  position-absolute ">
                <h5>SUPERCHARGED FOR PRO...</h5>
                <h6>Ipad S13+ Pro..</h6>
                <p>From $990.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-7  col-xl-8 col-xxl-9">
            <div className="d-flex flex-wrap gap-15  aline-items-center ">
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="bannerOne"
                />
                <div className="small-banner-content  position-absolute ">
                  <h5>SUPERCHARGED FOR PRO...</h5>
                  <h6>Ipad S13+ Pro..</h6>
                  <p>From $990.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
              <div className="small-banner position-relative  ">
                <img
                  src="/images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="bannerOne"
                />
                <div className="small-banner-content  position-absolute ">
                  <h5>NEW ARRIVAl</h5>
                  <h6>Buy Ipad Air</h6>
                  <p>
                    From $990.00 <br /> $49.31/mo. 12 mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative  ">
                <img
                  src="/images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="bannerOne"
                />
                <div className="small-banner-content  position-absolute ">
                  <h5>15% OFF</h5>
                  <h6>Smartwatch 7</h6>
                  <p>
                    Shop the latest band <br /> Styles and colors
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative  ">
                <img
                  src="/images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="bannerOne"
                />
                <div className="small-banner-content  position-absolute ">
                  <h5>FREE ENGRAVING</h5>
                  <h6>AirP0rd Max</h6>
                  <p>
                    High-fidelity playback & <br /> ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container classOne="home-wrapper-1 py-2">
        <div className="row">
          <div className=" col-sm-12 col-md-6 col-lg-12">
            <div className="services d-flex aline-items-center justify-content-around">
              {services.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="d-flex align-items-center  gap-15">
                      <img src={item.image} alt=" " />
                    </div>
                    <div>
                      <h6 className="">{item.title}</h6>
                      <p className="mb-0">{item.tagline}</p>
                    </div>
                  </div>
                );
              })}

              {/* 
              
              <div className="d-flex align-items-center  gap-15">
                <img src="images/service-04.png" alt=" " />
              </div>
              <div>
                <h6 className="">Free Shipping</h6>
                <p className="mb-0">From all orders over 500</p>
              </div>
              <div className="d-flex align-items-center  gap-15">
                <img src="images/service-05.png" alt=" " />
              </div>
              <div>
                <h6 className="">Free Shipping</h6>
                <p className="mb-0">From all orders over 500</p>
              </div> */}
            </div>
          </div>
        </div>
      </Container>

      <section className="home-wrapper-2  py-2">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className="catgories d-flex aline-items-center flex-wrap justify-content-around bgshadow py-2">
                <div className="d-flex aline-items-center  gap-30">
                  <div>
                    <h5>Camera</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="img" />
                </div>
                <div className="d-flex aline-items-center  gap-30">
                  <div>
                    <h5>Camera</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="img" />
                </div>
                <div className="d-flex aline-items-center  gap-30">
                  <div>
                    <h5>Smart Tv</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="img" />
                </div>
                <div className="d-flex aline-items-center  gap-30">
                  <div>
                    <h5>Music & Gaming </h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="img" />
                </div>
                <div className="d-flex aline-items-center  gap-30">
                  <div>
                    <h5>Camera</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="img" />
                </div>
                <div className="d-flex aline-items-center  gap-30">
                  <div>
                    <h5>Camera</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="img" />
                </div>
                <div className="d-flex aline-items-center  gap-30">
                  <div>
                    <h5>Smart Tv</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="img" />
                </div>
                <div className="d-flex aline-items-center  gap-30">
                  <div>
                    <h5>Music & Gaming </h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper home-wrapper-2 py-3">
        <div className="container">
          <div className="row">
            <h5 className="text-title">Featured Collection</h5>
            <Blog />
          </div>
        </div>
      </section>

      <section className="blog-wrapper home-wrapper-2 py-3">
        <div className="container">
          <div className="row">
            <h5 className="text-title">Our Latest Blogs</h5>
            <Productcard />
          </div>
        </div>
      </section>

      <section className="special-wrapper py-2 home-wrapper-2 ">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h4 className="section-heading">Special Products</h4>
            </div>
            <div className="row">
              <Specialproducts />
            </div>
          </div>
        </div>
      </section>

      <section className="special-wrapper py-4 home-wrapper-2 ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="famous-card bg-dark position-relative height-60">
                <img
                  src="images/famous.png"
                  alt="bgImage"
                  className="imgresponsive img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h6 className="text-white">Big Screen</h6>
                  <h5 className="text-white">Smart Watch Series 7</h5>
                  <p className="text-white">
                    From $399 or $16.69/mo. for 24/mo.*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="famous-card bg-white position-relative">
                <img
                  src="images/famous.png"
                  alt="bgImage"
                  className="imgresponsive1 img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h6 className="text-dark">HOME SPEKAKERS</h6>
                  <h4 className="text-dark">Room-filling sound</h4>
                  <p className="text-dark">
                    From $699 or $116.58/mo. for 12/mo.*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="famous-card bg-white  position-relative">
                <img
                  src="images/famous.png"
                  alt="bgImage"
                  className="imgresponsive1 img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h6 className="text-dark">SMARTPHONES </h6>
                  <h4 className="text-dark">Smartphone 13 Pro</h4>
                  <p className="text-dark">
                    Now in green. From $990.00 or $41.62/mo. for 24/mo.
                    footnote.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="famous-card bg-white position-relative">
                <img
                  src="images/famous.png"
                  alt="bgImage"
                  className="imgresponsive1 img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h6 className="text-dark">Big Screen</h6>
                  <h4 className="text-dark">Smart Watch Series 7</h4>
                  <p className="text-dark">
                    From $399 or $16.69/mo. for 24/mo.*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper home-wrapper-2 py-3">
        <div className="container">
          <div className="row">
            <h5 className="text-title">Our Latest Blogs</h5>
            <Blog />
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex aline-items-center  justify-content-between">
                  <div className="mx-4 ww-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

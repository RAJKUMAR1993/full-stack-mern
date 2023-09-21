import React from "react";
import Breadcrums from "../../pages/Breadcrums/Breadcrums";
import Meta from "../../componets/Meta/Meta";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

// import Blog from "../../componets/Blogs/Blog";

// import { Link } from "react-router-dom AiOutlineArrowLeft";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <Breadcrums title="Dynamic Blog Name" />
      <div className="store-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 ">
              <Link to="/blog" className="d-flex align-items-center gap-10 ">
                <AiOutlineArrowLeft />
                Back to Blod
              </Link>
              <h6 className="text-center">
                <b>A Beautiful Sunday Morining Resistance</b>
              </h6>
              <img
                src="/images/blog-1.jpg"
                className="img-fluid w-80 my-4 imgposition"
                alt="singleBlog"
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8 py-5 ">
              <div className="marginTop align-middle">
                <p className="py-6 fs-6 fst-italic fw-bold">
                  Using color to add meaning only provides a visual indication,
                  which will not be conveyed to users of assistive technologies
                  – such as screen readers. Ensure that information denoted by
                  the color is either obvious from the content itself (e.g. the
                  visible text), or is included through alternative means, such
                  as additional text hidden with the
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

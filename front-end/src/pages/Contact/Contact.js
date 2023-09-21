import React from "react";
import Breadcrums from "../../pages/Breadcrums/Breadcrums";
import Meta from "../../componets/Meta/Meta";
import { AiOutlineHome, AiOutlineMail, AiFillInfoCircle } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <Breadcrums title="Contact Us" />
      <div className="content-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-12">
              <iframe
                id="googleMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14231.623508723796!2d79.43849087617083!3d18.457058049134666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a332bb622c73aaf%3A0x33db093fc3c9c511!2sOdela%2C%20Telangana!5e1!3m2!1sen!2sin!4v1672402836521!5m2!1sen!2sin"
                width="1300"
                height="500"
              ></iframe>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12 mt-4">
            <div className="contact-liner-wrapper d-flex justify-content-between">
              <div>
                <h5 className="contact-title">Contact</h5>
                <form action="" className=" d-flex flex-column gap-20">
                  <div className="mb-3">
                    <label for="formControlInput" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formControlInput"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="formControlInput" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="formControlInput"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="floatingTextarea">Comments</label>
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                  </div>
                  <div className="mb-3   float-end">
                    <button type="button" class="btn btn-dark rounded btn-sm">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h5 className=" contact-title mt-2 ">Get in touch with us</h5>
                <div>
                  <ul className="ps-0">
                    <li className="list-group-item  d-flex align-content-center gap-15">
                      <AiOutlineHome className="fs-4" />
                      <address>Hno.6-85/B, Kansas, oliva Street,USA</address>
                    </li>
                    <li className="list-group-item mb-3 d-flex align-content-center gap-15">
                      <BiPhoneCall className="fs-4" /> +91 9848604561
                    </li>
                    <li className="list-group-item mb-3 d-flex align-content-center gap-15">
                      <AiOutlineMail className="fs-4" />{" "}
                      rajkumarramineni19@gmail.com
                    </li>
                    <li className="list-group-item mb-3 d-flex align-content-center gap-15">
                      <AiFillInfoCircle className="fs-4" /> Monday - Friday
                      <b>10AM -7PM</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

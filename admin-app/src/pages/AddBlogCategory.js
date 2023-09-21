import React from "react";
import CustomInputs from "../components/CustomInputs";

const AddBlogCategory = () => {
  return (
    <>
      <div className="container">
        <h3 className="mb-4 four-side-color title">Add Category</h3>
        <div className="row">
          <div className="col-md-12">
            <form action="">
              <div className="mb-3">
                <CustomInputs
                  type="text"
                  placeholder="Enter Title"
                  id="title"
                  className="form-control form-control-sm"
                  label="Title"
                />
              </div>

              <button className="btn btn-info btn-sm fw-bold">add blog</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlogCategory;

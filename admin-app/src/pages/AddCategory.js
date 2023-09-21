import React from "react";
import CustomInputs from "../components/CustomInputs";

const AddCategory = () => {
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
                  id="title"
                  placeholder="Enter Title"
                  className="form-control form-control-sm"
                  label="Category"
                />
              </div>

              <button className="btn btn-info btn-sm fw-bold">
                add Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;

import React from "react";
import CustomInputs from "../components/CustomInputs";

const AddBrand = () => {
  return (
    <>
      <div className="container">
        <h3 className="mb-4 four-side-color title">Add Color</h3>
        <div className="row">
          <div className="col-md-12">
            <form action="">
              <div className="mb-3">
                <CustomInputs
                  type="text"
                  id="brand"
                  placeholder="Add brand name"
                  className="form-control form-control-sm"
                  label="Brand"
                />
              </div>

              <button className="btn btn-info btn-sm fw-bold">add Brand</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBrand;

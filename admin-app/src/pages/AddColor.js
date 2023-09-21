import React from "react";
import CustomInputs from "../components/CustomInputs";

const AddColor = () => {
  return (
    <>
      <div className="container">
        <h3 className="mb-4 four-side-color title">Add Color</h3>
        <div className="row">
          <div className="col-md-12">
            <form action="">
              <div className="mb-3">
                <CustomInputs
                  type="color"
                  id="color"
                  className="form-control form-control-sm"
                  label="Color"
                />
              </div>

              <button className="btn btn-info btn-sm fw-bold">add Color</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddColor;

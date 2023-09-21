import React, { useState } from "react";
import CustomInputs from "../components/CustomInputs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Stepper } from "react-form-stepper";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

// image uploading support for the default settings
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const AddBlog = () => {
  const [value, setValue] = useState("");
  const handleDes = (e) => {
    setValue(e);
  };
  const { Dragger } = Upload;

  return (
    <>
      <div className="container">
        <h3 className="mb-4 four-side-color title">Add Blog</h3>
        <div className="row">
          <div className="col-md-12">
            <form action="">
              <div className="mb-3">
                <label>Upload Images</label>
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </Dragger>
              </div>
              <div className="mb-3">
                <CustomInputs
                  type="text"
                  placeholder="Enter Title"
                  id="title"
                  className="form-control form-control-sm"
                  label="Title"
                />
              </div>
              <div className="mb-3">
                <label>Select Blog Category</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>select blog category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Description</label>
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={(e) => {
                    handleDes(e);
                  }}
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

export default AddBlog;

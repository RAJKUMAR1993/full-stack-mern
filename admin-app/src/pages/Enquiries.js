import React, { useEffect } from "react";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBrand } from "../features/brand/brandService";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { getEnquiry } from "../features/enquiry/enquiryService";

const Enquiries = () => {
  const dispatch = useDispatch();
  const enquiry = useSelector((state) => state.enquiry.enquiry);
  console.log(enquiry);
  const data1 = [];

  for (let i = 0; i < enquiry.length; i++) {
    if (enquiry[1].status === "Submitted") {
      data1.push({
        key: i + 1,
        name: enquiry[i].name,
        email: enquiry[i].email,
        mobile: enquiry[i].mobile,
        comment: enquiry[i].comment,
        status: (
          <>
            {enquiry[i].status == "Submitted" ? (
              <span className="badge bg-success">{enquiry[i].status}</span>
            ) : (
              <span className="badge bg-danger">{enquiry[i].status}</span>
            )}
          </>
        ),
        action: (
          <>
            <Link to="/">
              <AiFillDelete className="fs-5 text-danger" />
            </Link>
          </>
        ),
      });
    }
  }

  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.key.length - b.key.length,
    },
    {
      title: "Name",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email ",
      dataIndex: "email",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Mobile ",
      dataIndex: "mobile",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Comment ",
      dataIndex: "comment",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.comment.length - b.comment.length,
    },
    {
      title: "Status ",
      dataIndex: "status",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action ",
      dataIndex: "action",
    },
  ];
  useEffect(() => {
    dispatch(getEnquiry());
  }, []);
  //
  return (
    <>
      <div className="mt-4">
        <h3 className="mb-4 four-side-color title">Enquiries</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </>
  );
};

export default Enquiries;

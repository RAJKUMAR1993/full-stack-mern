import React, { useEffect } from "react";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/customer/customerService";

const Customers = () => {
  const dispatch = useDispatch();
  const customerData = useSelector((state) => state.customers.customers);
  const data1 = [];
  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].role !== "admin") {
      data1.push({
        key: i + 1,
        name: customerData[i].firstName,
        lastName: customerData[i].lastName,
        email: customerData[i].email,
        mobile: customerData[i].mobile,
        role: customerData[i].role,
      });
    }
  }
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "First Name",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.lastName.length - b.lastName.length,
    },
    {
      title: "Email ",
      dataIndex: "email",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.lastName.length - b.lastName.length,
    },
    {
      title: "Mobile Number ",
      dataIndex: "mobile",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Role ",
      dataIndex: "role",
    },
  ];

  return (
    <>
      <div className="mt-4">
        <h3 className="mb-4 four-side-color title"> Customers </h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </>
  );
};

export default Customers;

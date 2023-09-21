import React, { useEffect } from "react";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBrand } from "../features/brand/brandService";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { getOrders } from "../features/auth/authService";

const Order = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.auth.orders);
  // console.log(orders);

  const data1 = [];
  for (let i = 0; i < 45; i++) {
    data1.push({
      key: i + 1,
      name: `Edward King ${i}`,
      product: 32,
      product: `London, Park Lane no. ${i}`,
      status: `True. ${i}`,
    });
  }

  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Product ",
      dataIndex: "product",
    },
    {
      title: "Status ",
      dataIndex: "status",
    },
  ];

  useEffect(() => {
    dispatch(getOrders());
  }, []);
  //
  return (
    <>
      <div className="mt-4">
        <h3 className="mb-4 four-side-color title">Orders </h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </>
  );
};

export default Order;

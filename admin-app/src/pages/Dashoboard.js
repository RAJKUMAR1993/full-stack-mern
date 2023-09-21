import React from "react";
import { BsArrowDownRight, BsArrowDownLeft } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
//import { toast } from "react-toastify";
const Dashoboard = () => {
  // graphs
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "jun",
      sales: 48,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 48,
    },
    {
      type: "Sep",
      sales: 58,
    },
    {
      type: "Oct",
      sales: 68,
    },
    {
      type: "Nov",
      sales: 28,
    },
    {
      type: "Dec",
      sales: 78,
    },
  ];

  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#AE2B2B";
    },
    label: {
      position: "middle",
      // 'top', 'bottom', 'middle',
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };

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
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      product: `London, Park Lane no. ${i}`,
      status: `True. ${i}`,
    });
  }
  // console.log(data1);

  return (
    <>
      <div>
        <h3 className="mb-4 title">Dashboard</h3>
        <div className="d-flex justify-content-between aline-item-center gap-3">
          <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
            <div className="d-flex align-items-end flex-column">
              <p className="mb-1 marginright fs-5 fw-bold text-primary">
                Total
              </p>
              <h4 className="mb-0 sub-title">$1000</h4>
            </div>
            <div className="d-flex align-items-end flex-column">
              <h6 className="mb-0 text-success">
                <BsArrowDownRight className="text-success fs-4 m-0" />
                32%
              </h6>
              <p className="mb-0 desc">Compared To April 2022</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
            <div className="d-flex align-items-end flex-column">
              <p className="mb-1 marginright fs-5 fw-bold text-dark">Total</p>
              <h4 className="mb-0 sub-title">$1000</h4>
            </div>
            <div className="d-flex align-items-end flex-column">
              <h6 className="mb-0 text-danger">
                <BsArrowDownRight className="text-danger fs-4 m-0" />
                32%
              </h6>
              <p className="mb-0 desc">Compared To April 2022</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
            <div className="d-flex align-items-end flex-column">
              <p className="mb-1 marginright fs-5 fw-bold text-success">
                Total
              </p>
              <h4 className="mb-0 sub-title">$1000</h4>
            </div>
            <div className="d-flex align-items-end flex-column">
              <h6 className="mb-0 text-info">
                <BsArrowDownRight className="text-info fs-4 m-0" />
                32%
              </h6>
              <p className="mb-0 desc">Compared To April 2022</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-4 title">Income Statics</h3>
          <div>
            <Column {...config} />
          </div>
        </div>

        <div className="mt-4">
          <h3 className="mb-4 title">Recent Orders</h3>
          <div>
            <Table columns={columns} dataSource={data1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashoboard;

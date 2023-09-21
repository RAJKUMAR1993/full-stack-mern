import React, { useEffect } from "react";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBrand } from "../features/brand/brandService";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

const BrandList = () => {
  const dispatch = useDispatch();
  const brandList = useSelector((state) => state.brand.brand);
  const data1 = [];
  for (let i = 0; i < brandList.length; i++) {
    data1.push({
      key: i + 1,
      brand: brandList[i].title,
      action: (
        <>
          <Link to="/" className="p-1">
            <FiEdit className="fs-5 text-info" />
          </Link>

          <Link to="/">
            <AiFillDelete className="fs-5 text-danger" />
          </Link>
        </>
      ),
    });
  }

  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.key.length - b.key.length,
    },
    {
      title: "Brand ",
      dataIndex: "brand",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: "Action ",
      dataIndex: "action",
    },
  ];

  useEffect(() => {
    dispatch(getBrand());
  }, []);
  //
  return (
    <>
      <div className="mt-4">
        <h3 className="mb-4 four-side-color title">Brand List</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </>
  );
};

export default BrandList;

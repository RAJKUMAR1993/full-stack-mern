import React, { useEffect } from "react";
import { Column } from "@ant-design/plots";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "antd";
import { getCategory } from "../features/category/categoryService";

const CategoryList = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category);

  const data1 = [];
  for (let i = 0; i < category.length; i++) {
    data1.push({
      key: i + 1,
      category: category[i].categoryName,
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
      title: "Category ",
      dataIndex: "category",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: "Action ",
      dataIndex: "action",
    },
  ];

  useEffect(() => {
    dispatch(getCategory());
  }, []);
  //
  return (
    <>
      <div className="mt-4">
        <h3 className="mb-4 four-side-color title">Category List</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </>
  );
};

export default CategoryList;

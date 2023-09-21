import React, { useEffect } from "react";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { getColors } from "../features/color/colorService";

const ColorList = () => {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.color.color);

  const data1 = [];
  for (let i = 0; i < colors.length; i++) {
    data1.push({
      key: i + 1,
      color: colors[i].title,
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
      title: "Color ",
      dataIndex: "color",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.color.length - b.color.length,
    },
    {
      title: "Action ",
      dataIndex: "action",
    },
  ];

  useEffect(() => {
    dispatch(getColors());
  }, []);
  //
  return (
    <>
      <div className="mt-4">
        <h3 className="mb-4 four-side-color title">Color List</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </>
  );
};

export default ColorList;

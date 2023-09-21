import React, { useEffect } from "react";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { getBlog } from "../features/blog/blogService";

const BlogList = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.blog);
  const data1 = [];
  for (let i = 1; i < blog.length; i++) {
    data1.push({
      key: i,
      title: blog[i].title,
      category: blog[i].category,
      description: blog[i].description,
      image: (
        <img
          src={blog[i].image}
          alt="noImage"
          style={{ width: 50, height: 50 }}
        />
      ),
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
      title: "Name",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: "Category ",
      dataIndex: "category",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Description ",
      dataIndex: "description",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Image ",
      dataIndex: "image",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.image.length - b.image.length,
    },
    {
      title: "Action ",
      dataIndex: "action",
    },
  ];

  useEffect(() => {
    dispatch(getBlog());
  }, []);

  //
  return (
    <>
      <div className="mt-4">
        <h3 className="mb-4 four-side-color title">Blog List</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </>
  );
};

export default BlogList;

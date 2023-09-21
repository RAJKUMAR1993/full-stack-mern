import React, { useEffect } from "react";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/product/productService";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

const ProductList = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products.products);
  //console.log("products:", productsData);

  const data1 = [];
  for (let i = 0; i < productsData.length; i++) {
    data1.push({
      key: i + 1,
      title: productsData[i].title,
      title: productsData[i].title,
      description: productsData[i].description,
      price: `$ ${productsData[i].price}`,
      category: productsData[i].category,
      brand: productsData[i].brand,
      // color: productsData[i].color[1],
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

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
      defaultSortOrder: "descend",

      sorter: (a, b) => a.key.length - b.key.length,
    },
    {
      title: "Product Name",
      dataIndex: "title",
      defaultSortOrder: "descend",

      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: "image ",
      dataIndex: "images",
      defaultSortOrder: "descend",

      sorter: (a, b) => a.images.length - b.images.length,
    },
    {
      title: "Description ",
      dataIndex: "description",
      defaultSortOrder: "descend",

      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Price ",
      dataIndex: "price",
      defaultSortOrder: "descend",

      sorter: (a, b) => a.price.length - b.price.length,
    },
    {
      title: "Category ",
      dataIndex: "category",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Brand ",
      dataIndex: "brand",
      defaultSortOrder: "descend",

      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    // {
    //   title: "Color ",
    //   dataIndex: "color",
    //   defaultSortOrder: "descend",
    //   sorter: (a, b) => a.color.length - b.color.length,
    // },
    {
      title: "Action ",
      dataIndex: "action",
    },
  ];

  //
  return (
    <>
      <div className="mt-4">
        <h3 className="mb-4 four-side-color title">Product List</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </>
  );
};

export default ProductList;

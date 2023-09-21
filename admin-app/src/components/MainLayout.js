import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  BiSolidDashboard,
  BiSolidCategoryAlt,
  BiSolidColorFill,
  BiCartDownload,
} from "react-icons/bi";
import { Outlet } from "react-router-dom";
import { BsHandbagFill, BsFillBagHeartFill } from "react-icons/bs";
import { LuBaggageClaim } from "react-icons/lu";
import { TbBrandAlpineJs } from "react-icons/tb";
import { FaUsers, FaBlog, FaUserAlt } from "react-icons/fa";
import { FcEndCall } from "react-icons/fc";
import { BiSolidLogInCircle } from "react-icons/bi";
import { GoDot } from "react-icons/go";

import {
  AiFillBell,
  AiOutlineBell,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;

const MainLayOut = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h2 className="bg-color-lightslategrey  text-center fs-bold">
              <span className="sm-logo fw-bold fs-5 text-center">
                Rich
                <span className=" lg-logo text-white">DotCom</span>
              </span>
            </h2>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key === "signout") {
              } else {
                navigate(key);
              }
            }}
            items={[
              {
                key: "",
                icon: <BiSolidDashboard className="fs-5" />,
                label: "Dashboard",
              },
              {
                key: "customers",
                icon: <FaUsers className="fs-5" />,
                label: "Customers",
              },
              {
                key: "catalog",
                icon: <BsHandbagFill className="fs-5" />,
                label: "Catalog",
                children: [
                  {
                    key: "add-product",
                    icon: <LuBaggageClaim className="fs-5" />,
                    label: "Add Product",
                  },
                  {
                    key: "product-list",
                    icon: <BsFillBagHeartFill className="fs-5" />,
                    label: "Product List",
                  },
                  {
                    key: "add-brand",
                    icon: <TbBrandAlpineJs className="fs-5" />,
                    label: "Brand",
                  },
                  {
                    key: "brand-list",
                    icon: <TbBrandAlpineJs className="fs-5" />,
                    label: "Brand list",
                  },
                  {
                    key: "add-category ",
                    icon: <BiSolidCategoryAlt className="fs-5" />,
                    label: "Category",
                  },
                  {
                    key: "category-list",
                    icon: <BiSolidCategoryAlt className="fs-5" />,
                    label: "Category list",
                  },
                  {
                    key: "add-color ",
                    icon: <BiSolidColorFill className="fs-5" />,
                    label: "Color",
                  },
                  {
                    key: "color-list",
                    icon: <BiSolidColorFill className="fs-5" />,
                    label: "Color list",
                  },
                ],
              },
              {
                key: "orders",
                icon: <BiCartDownload className="fs-5" />,
                label: "Orders",
              },
              {
                key: "blog",
                icon: <FaBlog className="fs-5" />,
                label: "Blog",
                children: [
                  {
                    key: "add-blog",
                    icon: <FaBlog className="fs-6" />,
                    label: "Add Blog",
                  },
                  {
                    key: "blog-list",
                    icon: <FaBlog className="fs-6" />,
                    label: "Blog list",
                  },
                  {
                    key: "add-blog-category",
                    icon: <FaBlog className="fs-6" />,
                    label: "Add Blog Category",
                  },
                  {
                    key: "blog-cat-list",
                    icon: <FaBlog className="fs-6" />,
                    label: "Category Blog List",
                  },
                ],
              },
              {
                key: "enquiries",
                icon: <FcEndCall className="fs-5" />,
                label: "Enquiries",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="d-flex justify-content-between ps-1 pe-5"
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div className="d-flex gap-3 align-items-center">
              <div className="d-flex gap-3">
                <AiOutlineShoppingCart className="fs-5" />
                <AiOutlineBell className="fs-5" />
              </div>
              <div className="d-flex  gap-3 align-items-center ">
                <GoDot className="text-success bg-success rounded border-success py-1" />
                <div>
                  <img
                    src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                    className="rounded-circle image-height-25"
                    alt="stroyka"
                  />
                </div>

                <div
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h5 className="text-dark">Rajkumar</h5>
                  <p className="mb-0">rajkumar@gmail.com</p>
                </div>
                <div
                  className="dropdown-menu mydropdown"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li className="">
                    <Link className="dropdown-item  py-2 mb-1" to="#">
                      <FaUserAlt /> View profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item py-2 mb-1" to="#">
                      <BiSolidLogInCircle /> log out
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item py-3" to="#">
                      Something else here
                    </Link>
                  </li> */}
                </div>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayOut;

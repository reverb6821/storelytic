import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import {
    Row,
    Col,
    Breadcrumb,
    Badge,
    Dropdown,
    Button,
    List,
    Avatar,
    Input,
} from "antd";
import {
    SearchOutlined,
} from "@ant-design/icons";

import {Bell} from '@styled-icons/boxicons-regular';
import { AlertCircleOutline } from '@styled-icons/evaicons-outline';
import { TextAlignCenter } from '@styled-icons/fluentui-system-filled';
import { Exit } from '@styled-icons/boxicons-regular';
import { Clock } from '@styled-icons/fa-solid';

const data = [
  {
    title: "Shipment XXX21  has been stocked",
    description: <><Clock size={20} color='#2EBD59' /> 2 hours ago</>,

    avatar: <AlertCircleOutline size={20} color='red'/>,
  },
  {
    title: "New Expedition from TESLA has arrived",
    description: <><Clock size={20}/> 2 days ago</>,

    avatar: <AlertCircleOutline size={20} color='red'/>,
  },
  {
    title: "The shipment XXXX23 has shipped",
    description: <><Clock size={20}/> 5 hours ago</>,
    avatar: <AlertCircleOutline size={20} color='red'/>,
  },
];

const menu = (
  <List
    min-width="100%"
    className="header-notifications-dropdown "
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar shape="square" src={item.avatar} />}
          title={item.title}
          description={item.description}
        />
      </List.Item>
    )}
  />
);

function Header({
  name,
  subName,
  onPress,

}) {

  useEffect(() => window.scrollTo(0, 0));

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/dashboard">StoreLytic</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              {name.replace("/", "")}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {subName.replace("/", "")}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control">
          <Badge size="small" count={4}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                href="#pablo"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Bell size={20}/>
              </a>
            </Dropdown>
          </Badge>
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => onPress()}
          >
            <TextAlignCenter size={20}/>
          </Button>
          <Link to="/" className="btn-sign-in">
            <Exit size={20}/>
            <span>Logout</span>
          </Link>
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
    </>
  );
}

export default Header;
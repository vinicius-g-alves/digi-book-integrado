import { Layout, Typography, Menu } from "antd";
import React from "react";
const { Header } = Layout;
const { Title } = Typography;

const HeaderLayout = ({ children }) => {
  const headerStyles = {
    zIndex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
  };
  const titleStyles = { color: "#fff", textAlign: "center" };
  return (
    <Header style={headerStyles}>
      <Menu theme="dark" />
      <Title style={titleStyles}>{children}</Title>
    </Header>
  );
};

export default HeaderLayout;

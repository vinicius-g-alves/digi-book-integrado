import { Button, Layout } from "antd";
import HeaderLayout from "./Header";
import FooterLayout from "./Footer";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;

const MainLayout = ({ children }) => {
  const layoutStyle = {
    minHeight: "100vh",
    textAlign: "center",
    padding: 0,
    margin: 0,
  };

  const navigate = useNavigate();

  const footerData = (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Button
        type="primary"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home
      </Button>
      <h4>Digibook</h4>
    </div>
  );
  return (
    <Layout style={layoutStyle}>
      <HeaderLayout children={"Digibook"} />
      <Content>{children}</Content>
      <FooterLayout children={footerData} />
    </Layout>
  );
};
export default MainLayout;

import { Card, Layout, Menu, Row, Col, theme, Typography } from "antd";
import axios from "axios";
import { useState } from "react";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  const [aux, setAux] = useState();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((res) => {
      console.log({ res });
      setAux(res.data);
    })
    .catch((err) => console.log({ err }));

  return (
    <Layout
      style={{
        textAlign: "center",
        padding: 0,
        margin: 0,
      }}
    >
      <Header
        style={{
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Menu theme="dark" />
        <Title
          style={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          Digibook
        </Title>
      </Header>
      <Content
        style={{
          background: "red",
        }}
      >
        <Row align={"stretch"}>
          {aux?.map((item) => {
            return (
              <Col style={{ margin: "0px auto" }}>
                <Card
                  style={{
                    margin: 24,
                  }}
                >
                  <img src={item.img} />
                  <h1>
                    {item.name} - {item.level}
                  </h1>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;

import { Card, Col, Layout, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [digimons, setDigimons] = useState();

  const navigate = useNavigate();

  const showError = () => {
    message.error(
      "Não foi possivel buscar a lista de digimons, tente novamente mais tarde"
    );
  };

  const getAllDigimons = (url) => {
    return axios
      .get(url)
      .then((res) => setDigimons(res.data))
      .catch(() => showError());
  };

  useEffect(() => {
    getAllDigimons("https://digimon-api.vercel.app/api/digimon");
  }, []);

  const listDigimons = () => {
    return (
      <Row>
        {digimons?.map((item) => {
          return (
            <Col style={{ margin: "0px auto" }}>
              <Card
                key={item.name}
                onClick={() => {
                  navigate(`/info/${item.name}`, { state: item.name });
                }}
                className="digimon"
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
    );
  };

  return <Layout>{listDigimons()}</Layout>;
};

export default Home;

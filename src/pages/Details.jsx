import { Card, Col, Layout, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate, useLocation } from "react-router-dom";

const Details = () => {
  const [digimonData, setDigimonData] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const showError = () => {
    message.error("teste");
  };

  const getDigimon = (url) => {
    return axios
      .get(url)
      .then((res) => {
        console.log({ res });
        setDigimonData(res.data);
      })
      .catch(() => showError());
  };

  useEffect(() => {
    const apiUrl = `https://digimon-api.vercel.app/api/digimon/name/${location.state}`;
    getDigimon(apiUrl);
  }, []);

  const listDigimons = () => {
    return digimonData?.map((item) => {
      return (
        <div style={{ alignItems: "center" }}>
          <Card
            title={item.name}
            key={item.name}
            onClick={() => navigate(`/info/${item.name}`)}
            style={{ textAlign: "left" }}
          >
            <img src={item.img} />
          </Card>
          <h2>
            Level <br />
            {item.level}
          </h2>
        </div>
      );
    });
  };

  return (
    <Layout style={{ minHeight: "100%", margin: 24 }}>{listDigimons()}</Layout>
  );
};

export default Details;

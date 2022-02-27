import React, { useState, useEffect } from "react";
import "./home.css";
import BundeslaenderKarte from "../../components/bundeslaender/BundeslaenderKarte";
import axios from "axios";
import Header from "../../components/header/Header";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  const [dataGermany, setDataGermany] = useState([]);
  const [dataStates, setDataStates] = useState([]);

  console.log(dataGermany);
  console.log(dataStates);

  useEffect(() => {
    const fetchHomeData = async () => {
      const germanyAPI = "https://api.corona-zahlen.org/germany";
      const statesAPI = "https://api.corona-zahlen.org/states";
      try {
        const data = await Promise.all([
          axios.get(germanyAPI),
          axios.get(statesAPI),
        ]);
        setDataGermany(data[0].data);
        setDataStates(data[1].data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHomeData();
  }, []);

  return (
    <Container fluid>
      <Header />
    </Container>
  );
}

export default Home;

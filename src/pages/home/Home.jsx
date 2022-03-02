import React, { useState, useEffect } from "react";
import "./home.css";

import axios from "axios";
import Header from "../../components/header/Header";
import { Container, Row, Col } from "react-bootstrap";
import BundeslaenderKarte from "./components/bundeslaender/BundeslaenderKarte";
import HistoryChart from "./components/historyChart/HistoryChart";

function Home() {
  const [dataGermany, setDataGermany] = useState([]);
  const [dataStates, setDataStates] = useState([]);
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);

  console.log(dataGermany);
  console.log(dataStates);
  console.log(cases);
  console.log(deaths);

  useEffect(() => {
    const fetchHomeData = async () => {
      const germanyAPI = "https://api.corona-zahlen.org/germany";
      const statesAPI = "https://api.corona-zahlen.org/states";
      const historyCaseAPI =
        "https://api.corona-zahlen.org/germany/history/cases";
      const historyDeathAPI =
        "https://api.corona-zahlen.org/germany/history/deaths";
      try {
        const data = await Promise.all([
          axios.get(germanyAPI),
          axios.get(statesAPI),
          axios.get(historyCaseAPI),
          axios.get(historyDeathAPI),
        ]);
        setDataGermany(data[0].data);
        setDataStates(data[1].data.data);
        setCases(data[2].data.data);
        setDeaths(data[3].data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHomeData();
  }, []);

  return (
    <>
      <Header />
      <Container fluid>
        <Row style={{ justifyContent: "space-around", marginTop: "20px" }}>
          <Col sm={2} className="card shadow">
            <p className="h5">7 Tage Inzidenz</p>
          </Col>
          <Col sm={2} className="card shadow">
            <p className="h5">7 Tage Fallzahlen</p>
          </Col>
          <Col sm={2} className="card shadow">
            <p className="h5">Fälle</p>
          </Col>
          <Col sm={2} className="card shadow">
            <p className="h5">Todesfälle</p>
          </Col>
          <Col sm={2} className="card shadow">
            <p className="h5">Genesen</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="chart shadow">
            <HistoryChart data={(cases, deaths)} />
          </Col>
        </Row>
      </Container>
    </>

    // <div className="home">
    //   <Header />
    //   <div className="homeBody">
    //     <div className="homeTop">
    //       <div className="card"></div>
    //       <div className="card"></div>
    //       <div className="card"></div>
    //       <div className="card"></div>
    //       <div className="card"></div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Home;

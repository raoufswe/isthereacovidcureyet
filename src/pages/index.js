import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SEO from "../components/seo"
import Header from "../components/header"
import LatestUpdates from "../components/latestUpdates"
import VaccinesProcess from "../components/vaccinesProcess"
import Statistics from "../components/statistics"
import Footer from "../components/footer"
import "../styles/global.css"

const App = () => (
  <Container>
    <SEO title="Home" />
    <Row>
      <Col>
        <Header />
      </Col>
    </Row>
    <Row>
      <Col>
        <LatestUpdates />
      </Col>
    </Row>

    <Row>
      <Col md="6" sm="12">
        <VaccinesProcess />
      </Col>
      <Col md="6" sm="12">
        <Statistics />
      </Col>
    </Row>
    <Row>
      <Col>
        <Footer />
      </Col>
    </Row>
  </Container>
)

export default App

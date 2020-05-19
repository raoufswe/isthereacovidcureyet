import React from "react"
import Wrapper from "../components/Wrapper"
import Header from "../components/Header"
import LatestUpdates from "../components/LatestUpdates"
import VaccinesProcess from "../components/VaccinesProcess"
import Statistics from "../components/Statistics"
import Footer from "../components/Footer"

const App = () => (
  <>
    <Wrapper>
      <Header />
      <LatestUpdates />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <VaccinesProcess />
        <Statistics />
      </div>
      <Footer />
    </Wrapper>
  </>
)

export default App

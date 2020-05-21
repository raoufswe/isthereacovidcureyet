import React from "react"
import Wrapper from "../components/Wrapper"
import SEO from "../components/seo"
import Header from "../components/Header"
import LatestUpdates from "../components/LatestUpdates"
import VaccinesProcess from "../components/VaccinesProcess"
import Statistics from "../components/Statistics"
import Footer from "../components/Footer"

const App = () => (
  <>
    <SEO />
    <Wrapper>
      <Header />
      <LatestUpdates />
      <div className="statistics-section">
        <VaccinesProcess />
        <Statistics />
      </div>
      <Footer />
    </Wrapper>
  </>
)

export default App
console.error("Built by Bineabble-Labs")

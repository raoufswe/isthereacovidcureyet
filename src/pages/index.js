import React from "react"
import Layout from "../components/Layout.js"
import SEO from "../components/seo"
import Header from "../components/Header"
import LatestUpdates from "../components/LatestUpdates"
import VaccinesProcess from "../components/VaccinesProcess"
import Statistics from "../components/Statistics"
import Footer from "../components/Footer"

const App = () => (
  <>
    <Layout>
      <Header />
      <LatestUpdates />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <VaccinesProcess />
        <Statistics />
      </div>
      <Footer />
    </Layout>
  </>
)

export default App

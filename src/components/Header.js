import React from "react"
import { Link } from "gatsby"
import DoctorsIllustartion from "../assets/doctors.jsx"
import HappyIcon from "../assets/happyIcon"
import styled from "styled-components"

const Styled = styled.div`
  .header {
    padding-top: 1rem;
    font-size: x-large;
  }

  .cureStatus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.75rem;
    padding: 1.75rem;
    text-align: center;
  }

  .statusBox {
    background-color: #cd4242;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;
    width: 15%;
  }

  .doctors {
    position: absolute;
    top: 0;
    right: 0;
    width: 25%;
  }

  @media only screen and (max-width: 991px) {
    .header {
      padding: 1.5rem;
      margin: 0 -5vw;
      background: #353a5e;
      border-radius: 0px 0px 15px 15px;
      text-align: center;
    }
    .cureStatus {
      padding: 2rem 1rem 0;
    }
    .statusBox {
      width: 50%;
    }

    .doctors {
      display: none;
    }
  }
`

const Header = () => (
  <Styled>
    <div className="header">
      <Link to="/">isthereaCOVIDcureyet </Link>
    </div>
    <div className="cureStatus">
      <div>Is there a cure for COVID-19 yet?</div>
      <div className="statusBox">
        <HappyIcon />
        <span>NO</span>
      </div>
    </div>

    <div className="doctors">
      <DoctorsIllustartion />
    </div>
  </Styled>
)

export default Header

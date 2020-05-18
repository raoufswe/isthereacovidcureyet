import React, { useEffect, useState } from "react"
import Badge from "./Badge"
import styled from "styled-components"
import useHasMounted from "../hooks/useHasMounted"

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .statustis-title {
    padding: 1.5rem 0;
    font-size: x-large;
  }

  .statistics {
    margin-right: 1rem;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;

    div:first-of-type {
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 991px) {
    .statistics {
      width: 100%;
    }
  }
`

const Statistics = () => {
  const [globalSummary, setGlobalSummary] = useState(null)
  const [userLocationSummary, setUserLocationSummary] = useState(null)
  const hasMounted = useHasMounted()

  const fetchSummary = async () => {
    const response = await fetch("https://covid19.mathdro.id/api")
    if (response.ok) {
      let data = await response.json()
      setGlobalSummary(data)
    } else {
      console.log("something went wrong")
    }
  }

  const fetchUserCountry = async () => {
    const response = await fetch("https://ipapi.co/json/")
    if (response.ok) {
      const userLocation = await response.json()
      const userCountry = userLocation.country_name
      const countrySummary = await fetch(
        `https://covid19.mathdro.id/api/countries/${userCountry}`
      )
      if (countrySummary.ok)
        setUserLocationSummary({
          country: userCountry,
          ...(await countrySummary.json()),
        })
    }
  }

  useEffect(() => {
    fetchSummary()
    fetchUserCountry()
  }, [])

  console.log(userLocationSummary)
  if (!hasMounted || !globalSummary || !userLocationSummary) return null

  return (
    <>
      <Styled>
        <div className="statustis-title">Global COVID-19 Statistics</div>
        <div className="statistics">
          <Badge
            titleColor="#FAFF08"
            title="Active Cases"
            numbersColor="#CCD00D"
            numbers={globalSummary?.confirmed?.value?.toLocaleString("en")}
          />
          <Badge
            titleColor="#08FF3F"
            title="Recovered Cases"
            numbersColor="#1CD00D"
            numbers={globalSummary?.recovered?.value?.toLocaleString("en")}
          />
        </div>
      </Styled>

      <Styled>
        <div className="statustis-title">{`${userLocationSummary?.country}'s COVID-19 Statistics `}</div>
        <div className="statistics">
          <Badge
            titleColor="#FAFF08"
            title="Active Cases"
            numbersColor="#CCD00D"
            numbers={userLocationSummary?.confirmed?.value?.toLocaleString(
              "en"
            )}
          />
          <Badge
            titleColor="#08FF3F"
            title="Recovered Cases"
            numbersColor="#1CD00D"
            numbers={userLocationSummary?.recovered?.value?.toLocaleString(
              "en"
            )}
          />
        </div>
      </Styled>
    </>
  )
}

export default Statistics

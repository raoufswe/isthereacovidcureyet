import React, { useEffect, useState } from "react"
import Badge from "./Badge"
import styled from "styled-components"
import useHasMounted from "../hooks/useHasMounted"

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  flex-grow: 1;

  .statustis-title {
    padding: 1.5rem 0;
    font-size: x-large;
  }

  .statistics {
    display: flex;
    width: 80%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 991px) {
    .statistics {
      width: 100%;
    }
  }
`

const Statistics = () => {
  const [summary, setSummary] = useState(null)
  const hasMounted = useHasMounted()

  const fetchSummary = async () => {
    const response = await fetch("https://covid19.mathdro.id/api")

    if (response.ok) {
      let data = await response.json()
      setSummary(data)
    } else {
      console.log("something went wrong")
    }
  }

  useEffect(() => {
    fetchSummary()
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <Styled>
      <div className="statustis-title">Global COVID-19 Statistics</div>
      <div className="statistics">
        <Badge
          titleColor="#FAFF08"
          title="Active Cases"
          numbersColor="#CCD00D"
          numbers={summary?.confirmed?.value?.toLocaleString("en")}
        />
        <Badge
          titleColor="#08FF3F"
          title="Recovered Cases"
          numbersColor="#1CD00D"
          numbers={summary?.recovered?.value?.toLocaleString("en")}
        />
      </div>
    </Styled>
  )
}

export default Statistics

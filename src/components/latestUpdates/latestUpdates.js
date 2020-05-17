import React from "react"
import styles from "./latestUpdates.module.css"
import Card from "../card"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const fakeData = [
  {
    date: new Date().toLocaleDateString(),
    articalLink: "www.facebook.com",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    date: new Date().toLocaleDateString(),
    articalLink: "www.facebook.com",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    date: new Date().toLocaleDateString(),
    articalLink: "www.facebook.com",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    date: new Date().toLocaleDateString(),
    articalLink: "www.facebook.com",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
]

const LatestUpdates = () => {
  const settings = {
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 2,
    initialSlide: 0,
    infinite: false,
    arrows: false,
    dots: true,

    responsive: [
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          swipeToSlide: true,
          infinite: false,
          dots: false,
        },
      },
    ],
  }

  return (
    <div>
      <div className={styles.title}>Latest updates on the cure</div>
      <div className={styles.updates}>
        <Slider {...settings} className={styles.slider}>
          {fakeData.map(({ date, content, articalLink }, key) => (
            <div style={{ padding: 100 }} key={key}>
              <Card date={date} content={content} articalLink={articalLink} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default LatestUpdates

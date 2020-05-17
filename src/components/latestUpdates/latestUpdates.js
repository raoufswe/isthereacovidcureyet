import React from "react"
import styles from "./latestUpdates.module.css"
import Card from "../card"
import Carousel from "react-elastic-carousel"
import Media from "react-media"
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
]

const LatestUpdates = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    infinite: false,
    arrows: false,
  }
  return (
    <div>
      <div className={styles.title}>Latest updates on the cure</div>
      <div className={styles.updates}>
        <Media queries={{ small: { maxWidth: 991 } }}>
          {matches =>
            matches.small ? (
              <Slider {...settings} className={styles.slider}>
                {fakeData.map(({ date, content, articalLink }, key) => (
                  <div style={{ padding: 100 }} key={key}>
                    <Card
                      date={date}
                      content={content}
                      articalLink={articalLink}
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <Carousel
                pagination={false}
                itemPadding={[0, 0]}
                itemsToScroll={3}
                itemsToShow={3}
              >
                {fakeData.map(({ date, content, articalLink }, key) => (
                  <Card
                    date={date}
                    content={content}
                    articalLink={articalLink}
                  />
                ))}
              </Carousel>
            )
          }
        </Media>
      </div>
    </div>
  )
}

export default LatestUpdates

import React from "react";
import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import Concerts from "../../../assets/concert.png";
import Sports from "../../../assets/sports.jpeg";
import Theatre from "../../../assets/theatre.jpeg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Categories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "50px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const views = [
    <Category image={Concerts} caption="concerts" />,
    <Category image={Sports} caption="sports" />,
    <Category image={Theatre} caption="theatre" />,
    <Category image={Concerts} caption="concerts" />,
    <Category image={Sports} caption="sports" />,
    <Category image={Theatre} caption="theatre" />,
    <Category image={Concerts} caption="concerts" />,
    <Category image={Sports} caption="sports" />,
    <Category image={Theatre} caption="theatre" />,
    <Category image={Concerts} caption="concerts" />,
    <Category image={Sports} caption="sports" />,
    <Category image={Theatre} caption="theatre" />,
  ];
  return (
    <section id="categories">
      <h3>browser by categories</h3>
      <ImageSlider
        settings={settings}
        views={views}
        className="categories-slider"
      />
    </section>
  );
};

export default Categories;

const Category = ({ image, caption }) => {
  return (
    <Card className="categories-card">
      <CardActionArea>
        <CardMedia component="img" image={image} alt={caption} />
        <h4>{caption}</h4>
      </CardActionArea>
    </Card>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon fontSize="large" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon fontSize="large" />
    </div>
  );
}

import Slider from "react-slick";

const ImageSlider = ({ views, settings }) => {
  return (
    <Slider {...settings}>
      {views.map((View, index) => (
        <div key={index}>{View}</div>
      ))}
    </Slider>
  );
};

export default ImageSlider;

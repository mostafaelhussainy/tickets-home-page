import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import DuaLipa from "../../../assets/Dua_Lipa_01.webp";
import { Card, CardActionArea, CardMedia } from "@mui/material";

const FigureCard = () => {
  return (
    <Card className="figure-card">
      <CardActionArea>
        <CardMedia component="img" image={DuaLipa} />
        <div className="figure-card__overlay">
          <h3>
            Dua Lipa<span>concerts</span>
          </h3>
        </div>
      </CardActionArea>
    </Card>
  );
};

const SlideView = () => {
  return (
    <figure className="figure-slide">
      <FigureCard key={1} />
      <FigureCard key={2} />
    </figure>
  );
};
const BulletSlider = () => {
  const views = [
    <SlideView />,
    <SlideView />,
    <SlideView />,
    <SlideView />,
    <SlideView />,
    <SlideView />,
    <SlideView />,
    <SlideView />,
    <SlideView />,
    <SlideView />,
    <SlideView />,
    <SlideView />,
    <SlideView />,
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
  };

  return (
    <section id="bullet-slider">
      <ImageSlider views={views} settings={settings} />
    </section>
  );
};

export default BulletSlider;

import { Button } from "@mui/material";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import BulletSlider from "./Sections/BulletSlider";
import Categories from "./Sections/Categories";
import Experiences from "./Sections/Experiences";
import Footer from "./Sections/Footer";
import "./home.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Home = () => {
  return (
    <>
      <div className="fulldvh">
        <Header />
        <Hero />
      </div>
      <BulletSlider />
      <Button id="find-tickets-button">
        find tickets <ChevronRightIcon />
      </Button>
      <div className="bottom-bg">
        <Categories />
        <Experiences />
        <Footer />
      </div>
    </>
  );
};

export default Home;

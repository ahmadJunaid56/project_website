import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Trending from "./components/Trending";
import TopCategories from "./components/Categories";
import Designstudio from "./components/Designstudio";
import Card from "./components/Card";
import Fact from "./components/Facts";
import FooterComponent from "./components/Footer";
// import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trending />
      <TopCategories />
      <Designstudio />
      <Card />
      <About />
      <Fact />
      {/* <Carousel /> */}
      <FooterComponent />
    </>
  );
}

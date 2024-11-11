import Navbar from "./components/Navbar"
import FooterComponent from "./components/Footer";
import AboutUs from "../about/components/Aboutus";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutUs/>
      <FooterComponent />
    </>
  );
}

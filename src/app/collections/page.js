import Navbar from "./components/Navbar"
import FooterComponent from "./components/Footer";
import Collection from "./components/Collection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Collection/>
      <FooterComponent />
    </>
  );
}

import "./App.css";
import Hero from "./components/sections/Hero";
import Banner from "./components/sections/Banner";
import Steps from "./components/sections/Steps";
import Destination from "./components/sections/Destination";
import Packages from "./components/sections/Packages";
import Footer from "./components/sections/Footer";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";

function App() {
  return (
    <>
      <main>
        <Hero />
        <Banner />
        <Steps />
        <Destination />
        <Packages />
        <Footer />
      </main>
      <ScrollToTopButton />
    </>
  );
}

export default App;

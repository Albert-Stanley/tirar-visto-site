import "./App.css";
import Hero from "./components/sections/Hero";
import Banner from "./components/sections/Banner";
import Steps from "./components/sections/Steps";
import Destination from "./components/sections/Destination";
import Packages from "./components/sections/Packages";

function App() {
  return (
    <>
      <main>
        <Hero />
        <Banner />
        <Steps />
        <Destination />
        <Packages />
      </main>
    </>
  );
}

export default App;

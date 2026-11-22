import { useState } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSlider from "./components/MenuSlider";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <Intro onDone={() => setIntroDone(true)} />
      <Navbar visible={introDone} />
      <main>
        <Hero play={introDone} />
        <MenuSlider />
        <Gallery />
        <About />
        <Visit />
      </main>
      <Footer />
    </>
  );
}

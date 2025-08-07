import About from "@/sections/About";
import Client from "@/sections/Client";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Client />
      <Contact />
    </main>
  );
};

export default Home;

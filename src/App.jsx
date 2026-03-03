import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import profile from "./assets/profile.jpg";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="bg-blue-950 min-h-screen flex justify-center items-center">
        <Hero profileImage={profile} />
      </section>
      <section className="min-h-screen bg-white">
        <About />
      </section>
      <section className="min-h-screen bg-white">
        <Experience />
      </section>
      <section className="min-h-screen bg-white">
        <Contact/>
      </section>
    </>
  );
};

export default App;

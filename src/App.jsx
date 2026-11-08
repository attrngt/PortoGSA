import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import profile from "./assets/profile.jpeg";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen text-[#1F1F1F]">
      <Navbar />
      <Hero profileImage={profile} />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Expertise from "@/src/components/Expertise";
import Experience from "@/src/components/Experience";
import Research from "@/src/components/Research";
import Projects from "@/src/components/Projects";
import Education from "@/src/components/Education";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Experience />
        <Research />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

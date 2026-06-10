import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GitHubActivity from "@/components/GitHubActivity";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GitHubActivity />
        <Certifications />
        <Resume />
        <InteractiveTerminal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

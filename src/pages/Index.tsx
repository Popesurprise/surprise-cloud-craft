import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

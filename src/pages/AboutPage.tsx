import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const AboutPage = () => (
  <div className="min-h-screen bg-background text-foreground antialiased flex flex-col">
    <Header />
    <main className="flex-1">
      <PageHeader title="About Me" subtitle="My background, focus areas, and the technologies I work with." />
      <About withHeader={false} />
      <Skills />
    </main>
    <Footer />
  </div>
);

export default AboutPage;

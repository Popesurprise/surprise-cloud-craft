import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const ProjectsPage = () => (
  <div className="min-h-screen bg-background text-foreground antialiased flex flex-col">
    <Header />
    <main className="flex-1">
      <PageHeader
        title="Featured Projects"
        subtitle="DevOps and cloud engineering work spanning Kubernetes, CI/CD, automation, and reliability engineering."
      />
      <Projects withHeader={false} />
    </main>
    <Footer />
  </div>
);

export default ProjectsPage;

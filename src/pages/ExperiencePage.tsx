import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const ExperiencePage = () => (
  <div className="min-h-screen bg-background text-foreground antialiased flex flex-col">
    <Header />
    <main className="flex-1">
      <PageHeader title="Experience" subtitle="A summary of roles, responsibilities, and impact across my career." />
      <Experience withHeader={false} />
    </main>
    <Footer />
  </div>
);

export default ExperiencePage;

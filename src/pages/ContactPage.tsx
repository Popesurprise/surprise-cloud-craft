import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const ContactPage = () => (
  <div className="min-h-screen bg-background text-foreground antialiased flex flex-col">
    <Header />
    <main className="flex-1">
      <PageHeader title="Contact" subtitle="Let's discuss roles, collaborations, or cloud infrastructure projects." />
      <Contact withHeader={false} />
    </main>
    <Footer />
  </div>
);

export default ContactPage;

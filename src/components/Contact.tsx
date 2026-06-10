import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  company: z.string().trim().max(120).optional(),
  subject: z.string().trim().min(1, "Subject required").max(200),
  message: z.string().trim().min(5, "Message too short").max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid form");
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", { body: parsed.data });
      if (error || (data && (data as any).error)) throw new Error(error?.message || (data as any).error);
      toast.success("Thank you for reaching out. I will get back to you shortly.");
      setForm({ name: "", email: "", company: "", subject: "", message: "" });
    } catch (err: any) {
      toast.error(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-mono text-primary text-sm mb-3">// contact.sh</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Let's <span className="gradient-text">Build</span> Together
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Open to senior DevOps / Cloud / Platform / SRE roles and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-3">
            <ContactItem icon={Mail} label="Email" value="popesurprise@gmail.com" href="mailto:popesurprise@gmail.com" />
            <ContactItem icon={Phone} label="Phone (NG)" value="+234 903 883 4820" href="tel:+2349038834820" />
            <ContactItem icon={Phone} label="Phone (US)" value="+1 484 919 9407" href="tel:+14849199407" />
            <ContactItem icon={Github} label="GitHub" value="github.com/Popesurprise" href="https://github.com/Popesurprise" />
            <ContactItem icon={Linkedin} label="LinkedIn" value="linkedin.com/in/surprisepopoola" href="https://www.linkedin.com/in/surprisepopoola" />
            <ContactItem icon={MapPin} label="Location" value="Lagos, Nigeria · Remote" />
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-xl border border-border bg-card p-6 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" id="name" value={form.name} onChange={onChange("name")} required />
              <Field label="Email" id="email" type="email" value={form.email} onChange={onChange("email")} required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Company" id="company" value={form.company} onChange={onChange("company")} />
              <Field label="Subject" id="subject" value={form.subject} onChange={onChange("subject")} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={6} value={form.message} onChange={onChange("message")} required maxLength={2000} />
            </div>
            <Button type="submit" size="lg" disabled={loading} className="w-full font-mono">
              {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</> : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, id, type = "text", value, onChange, required, }: any) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}{required && <span className="text-primary"> *</span>}</Label>
    <Input id={id} type={type} value={value} onChange={onChange} required={required} />
  </div>
);

const ContactItem = ({ icon: Icon, label, value, href }: any) => {
  const body = (
    <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover-lift">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="font-mono text-sm truncate">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{body}</a> : body;
};

export default Contact;

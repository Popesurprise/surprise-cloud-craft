import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Engineering Manager",
      company: "TechFlow Inc.",
      content: "Surprise's expertise in DevOps and cloud architecture transformed our deployment process. His implementation of ArgoCD and Tekton reduced our deployment time by 70% while significantly improving reliability.",
      initials: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "CloudScale Solutions",
      content: "Working with Surprise on our AWS migration was exceptional. His deep understanding of serverless architectures and security best practices helped us achieve a 40% cost reduction while enhancing our system's scalability.",
      initials: "MR"
    },
    {
      name: "Aisha Okonkwo",
      role: "DevOps Lead",
      company: "InnovateTech",
      content: "Surprise's mentorship and technical guidance have been invaluable to our team. His ability to simplify complex cloud concepts and implement robust CI/CD pipelines has elevated our entire engineering practice.",
      initials: "AO"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Colleagues Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from team members and clients I've worked with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-2">
                  <Quote className="h-8 w-8 text-primary opacity-50 flex-shrink-0" />
                  <p className="text-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
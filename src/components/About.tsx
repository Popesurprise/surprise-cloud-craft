import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Tech. in Urban and Regional Planning",
      institution: "Ladoke Akintola University of Technology",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "National Open University of Nigeria",
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  const certifications = [
    "AWS Solutions Architect (In Progress)",
    "Python Programming (Coursera)",
    "ThinkCloudly AWS Bootcamp"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about automation, scalability, and secure systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              As a seasoned DevOps Engineer and Cloud Architect, I bring extensive expertise in designing and managing robust, scalable infrastructures across multiple cloud platforms including AWS, Azure, and Google Cloud. My skills encompass advanced CI/CD pipeline development, container orchestration with Kubernetes and Docker, and infrastructure-as-code using tools like Terraform and CloudFormation. I excel in automating deployment processes, enhancing system reliability, and enforcing security best practices in complex environments.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              I am proficient in leveraging cloud-native services such as AWS Lambda, Azure Functions, Google Cloud Run, alongside API gateways, managed databases, and secret management systems to build high-availability, secure, and cost-optimized solutions. My strong focus on automation, monitoring, and compliance ensures efficient software delivery and operational excellence.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Beyond technical roles, I actively contribute to tech communities by mentoring developers and promoting cloud and DevOps knowledge sharing, fostering innovation and collaboration.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-tech-blue mt-1">{edu.icon}</div>
                      <div>
                        <div className="font-medium text-foreground">{edu.degree}</div>
                        <div className="text-sm text-muted-foreground">{edu.institution}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Certifications</h3>
                </div>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Community</h3>
                </div>
                <p className="text-foreground">
                  Active member of Herald Ministries Tech Community, providing mentorship and sharing DevOps best practices with emerging developers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

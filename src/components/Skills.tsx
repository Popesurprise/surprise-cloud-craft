import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Container, 
  Settings, 
  Database, 
  Shield, 
  GitBranch,
  Monitor,
  Users
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS API Gateway", "AWS Lambda", "AWS S3", "AWS DynamoDB", "AWS EC2", "AWS Route 53", "AWS Cognito", "CloudWatch"],
      color: "tech-blue"
    },
    {
      title: "Containerization & Orchestration",
      icon: <Container className="h-6 w-6" />,
      skills: ["Docker", "Kubernetes", "Container Registry", "Helm", "StatefulSets", "Ingress Controllers"],
      color: "tech-navy"
    },
    {
      title: "CI/CD & DevOps",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["ArgoCD", "Tekton", "Jenkins", "GitOps", "Infrastructure as Code", "Terraform"],
      color: "success"
    },
    {
      title: "Databases & Storage",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "DynamoDB", "S3", "Redis", "Database Migration", "Backup Strategies"],
      color: "tech-blue"
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-6 w-6" />,
      skills: ["AWS Secrets Manager", "AWS KMS", "RBAC", "IAM", "Security Scanning", "SASE Compliance"],
      color: "destructive"
    },
    {
      title: "Monitoring & Observability",
      icon: <Monitor className="h-6 w-6" />,
      skills: ["Prometheus", "Grafana", "CloudWatch", "Alerting", "Log Aggregation", "Performance Tuning"],
      color: "tech-navy"
    },
    {
      title: "Programming & Scripting",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Bash", "Python", "Ruby on Rails", "YAML", "JSON", "Git"],
      color: "success"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Problem Solving", "Technical Mentorship", "Collaboration", "Project Management", "Documentation", "Communication"],
      color: "tech-blue"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skills in cloud architecture, DevOps, and modern infrastructure management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className={`text-${category.color}`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "AWS Certified Solutions Architect (In Progress)",
              "Kubernetes Administration",
              "Infrastructure as Code (IaC)",
              "Microservices Architecture",
              "Site Reliability Engineering (SRE)",
              "Cloud Cost Optimization",
              "Security Best Practices",
              "Performance Optimization"
            ].map((competency, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-sm py-2 px-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {competency}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
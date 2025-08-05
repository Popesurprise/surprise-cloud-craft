import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import cloudArchitecture from "@/assets/cloud-architecture.jpg";
import devopsPipeline from "@/assets/devops-pipeline.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Cloud-Native DevOps Pipeline",
      year: "2025",
      description: "Containerized Ruby on Rails application with PostgreSQL using Docker, deployed via Kubernetes with StatefulSets for persistent storage. Implemented GitOps with ArgoCD and Tekton pipelines for automated CI/CD.",
      image: devopsPipeline,
      technologies: ["Docker", "Kubernetes", "ArgoCD", "Tekton", "Ruby on Rails", "PostgreSQL"],
      achievements: ["End-to-end automation", "Zero-downtime deployments", "Secure container orchestration"],
      type: "real"
    },
    {
      title: "Serverless E-Commerce Platform",
      year: "2024",
      description: "Built a fully serverless platform with DynamoDB, API Gateway, Lambda, and Cognito for secure authentication and transactions, optimizing costs with AWS's pay-as-you-go model.",
      image: cloudArchitecture,
      technologies: ["AWS Lambda", "DynamoDB", "API Gateway", "Cognito", "S3"],
      achievements: ["40% cost reduction", "99.9% uptime", "Scalable architecture"],
      type: "real"
    },
    {
      title: "Secure File-Sharing Platform",
      year: "2024",
      description: "Developed a system using S3, Lambda, and API Gateway with robust RBAC and encryption, improving file retrieval times by 40%.",
      image: cloudArchitecture,
      technologies: ["AWS S3", "Lambda", "API Gateway", "KMS", "IAM"],
      achievements: ["40% faster retrieval", "Military-grade encryption", "RBAC implementation"],
      type: "real"
    },
    {
      title: "Monitoring & Alerting System",
      year: "2024",
      description: "Comprehensive monitoring solution using Prometheus, Grafana, and CloudWatch to monitor Kubernetes clusters with automated alerts for performance issues.",
      image: devopsPipeline,
      technologies: ["Prometheus", "Grafana", "CloudWatch", "Kubernetes", "Alertmanager"],
      achievements: ["30% reduced downtime", "Real-time monitoring", "Automated incident response"],
      type: "creative"
    },
    {
      title: "Multi-Cloud Disaster Recovery",
      year: "2024",
      description: "Implemented disaster recovery solution across AWS and Azure with automated failover and backup strategies using Terraform for infrastructure-as-code.",
      image: cloudArchitecture,
      technologies: ["Terraform", "AWS", "Azure", "Ansible", "Bash"],
      achievements: ["99.99% availability", "15-minute RTO", "Cross-cloud redundancy"],
      type: "creative"
    },
    {
      title: "Automated AWS Backup System",
      year: "2023",
      description: "Created Bash scripts for secure, scheduled backups to S3, enhancing data safety and operational efficiency with lifecycle policies.",
      image: cloudArchitecture,
      technologies: ["Bash", "AWS S3", "CloudWatch", "IAM", "Lambda"],
      achievements: ["Automated scheduling", "Cost optimization", "Data integrity"],
      type: "real"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise in DevOps, cloud architecture, and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={project.type === "real" ? "default" : "secondary"}>
                    {project.year}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-xs text-muted-foreground flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2 text-success" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
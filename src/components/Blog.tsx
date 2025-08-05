import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Build a CI/CD Pipeline with Tekton and ArgoCD",
      excerpt: "Learn how to create a robust GitOps workflow using Tekton for CI and ArgoCD for CD, enabling automated deployments with Kubernetes.",
      date: "2024-12-15",
      readTime: "8 min read",
      tags: ["Tekton", "ArgoCD", "GitOps", "Kubernetes"],
      featured: true
    },
    {
      title: "Optimizing AWS Costs with Serverless Architectures",
      excerpt: "Discover practical strategies for reducing AWS costs using serverless technologies like Lambda, DynamoDB, and S3 while maintaining performance.",
      date: "2024-11-28",
      readTime: "6 min read",
      tags: ["AWS", "Serverless", "Cost Optimization", "Lambda"],
      featured: true
    },
    {
      title: "Implementing Zero-Downtime Deployments with Kubernetes",
      excerpt: "Step-by-step guide to achieving zero-downtime deployments using Kubernetes rolling updates, readiness probes, and blue-green strategies.",
      date: "2024-11-10",
      readTime: "10 min read",
      tags: ["Kubernetes", "DevOps", "Deployment", "SRE"],
      featured: false
    },
    {
      title: "Security Best Practices for Cloud Infrastructure",
      excerpt: "Essential security practices for cloud environments, covering IAM, encryption, network security, and compliance frameworks.",
      date: "2024-10-22",
      readTime: "12 min read",
      tags: ["Security", "Cloud", "AWS", "Best Practices"],
      featured: false
    }
  ];

  return (
    <section id="blog" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights and best practices in DevOps, cloud architecture, and modern infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className={`hover-lift ${post.featured ? 'ring-2 ring-primary/20' : ''}`}>
              {post.featured && (
                <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 text-center">
                  Featured Post
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="gradient-tech">
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frameworks & Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Spring Boot", "NestJS", "Java", "Golang", "TypeScript", "Python"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "CouchDB"]
    },
    {
      title: "Deployment & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Docker", "Helm", "ECS", "Lambda", "Cloudfront", "EKS", "ECR", "S3"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build amazing software
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient border-border/50 hover:glow-effect transition-all duration-300 animate-fade-up">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-secondary/50 text-secondary-foreground hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
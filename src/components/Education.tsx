import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Masters of Computer Applications",
      institution: "MNNIT Allahabad",
      period: "Jul 2016 - Jun 2019"
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "University of Lucknow",
      period: "Jul 2013 - Jun 2016"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in computer science and applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="card-gradient border-border/50 hover:glow-effect transition-all duration-300 animate-fade-up">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                </div>
                <p className="text-lg text-primary font-semibold">{edu.institution}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <Badge variant="outline">{edu.period}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
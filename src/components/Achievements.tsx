import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Operational Excellence Award",
      description: "Recognized for maintaining BAU during market volatility",
      date: "Mar 2024"
    },
    {
      title: "Engineering Director's Most Trusted Member",
      description: "Recognized during yearly recognition program",
      date: "Jan 2022 - Dec 2022"
    },
    {
      title: "Best Performer Award",
      description: "Awarded best performer a couple of times in Townhall in Publicis Sapient",
      date: "Mar 2020 - Sep 2020"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence and outstanding performance
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-gradient border-border/50 hover:glow-effect transition-all duration-300 animate-fade-up">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <Trophy className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{achievement.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <Badge variant="outline" className="text-accent border-accent/30">
                    {achievement.date}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "CoinSwitch",
      role: "Senior Software Engineer / Platform",
      period: "May 2023 - Present",
      achievements: [
        "Implemented deposit and withdrawal parking mechanisms to handle vendor downtimes gracefully. Enabled users to initiate deposits during outages, ensuring 24×7 availability and contributing to an 8% increase in successful deposit volumes during off-peak hours.",
        "Redesigned the core Payment Service by introducing a vendor abstraction layer, enabling structured post-processing workflows. Integrated with ODIN (Front Office) and Techexcel (Back Office), improving vendor-specific issue identification and reducing debugging time.",
        "Led initial engineering efforts on Lemonn's KYC zero-to-one journey. Delivered key features like Deposit Before Trade Ready and automatic backfill KYC using historical AOFs, improving signup to first trade conversion to 10%, surpassing the industry benchmark of 6%.",
        "Designed and delivered the Affiliate Partner Services platform, driving 40% of Lemonn's trade volume and boosting revenue and partner onboarding.",
        "Architected and launched a high-performance Config Service using Golang, achieving ultra-low latency (2.5ms at p99.99, 1.7ms at p99.9) and high throughput (avg: 650K rpm, peak: 1.9M rpm).",
        "Led the migration of all microservices and monoliths from ECS to EKS (Kubernetes) in Coinswitch. Established canary deployment pipelines with analysis templates, enabling early detection of production issues before full rollout."
      ]
    },
    {
      company: "MyGate",
      role: "Senior Software Engineer / GuardApp",
      period: "Dec 2020 - May 2023",
      achievements: [
        "Led and mentored a team of 6 developers during the entire tenure at MyGate as well as drove company-wide cost optimization objectives, resulting in a 35% reduction in monthly infrastructure costs.",
        "Led cross-functional coordination as SPOC for for MyGate's revenue-generating Express Entry feature. Integrated with partners such as Zomato, Zepto, BlinkIt, and Amazon, resulting in handling 1.5L+ requests per day and saving approximately 90 seconds per delivery.",
        "Engineered the Feed Reader Service, a user-facing module on the MyGate App homepage, using Spring Reactive Framework. Mentored a team and rolled out the service from scratch.",
        "Architected a partner integration service for subscription-based models, collaborating with Zuper for task management features. This integration played a pivotal role in securing funding from Urban Company. The average MoM growth for the service stood at 12%.",
        "Built a Task Management system using the open-source Agenda scheduler, optimizing task allocation and scheduling—boosting team productivity by 40% and reducing project delays by 25%.",
        "Engineered robust microservices for seamless integration with the MyGate ecosystem, enabling integration with external hardware partners (ANPR, BLE, FR). Resulted in a 40% reduction in integration time."
      ]
    },
    {
      company: "Publicis Sapient",
      role: "Associate Software Engineer / SWISH - ATG to Spring Reactive Migration",
      period: "Jul 2019 - Dec 2020",
      achievements: [
        "Migrated Verizon's existing suite of ATG Applications into Spring Reactive Microservices from scratch which in turn improved application performance and response time by 25%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and leading engineering teams
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient border-border/50 animate-fade-up">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-5 h-5 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                    </div>
                    <p className="text-xl text-primary font-semibold">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <Badge variant="outline" className="text-sm">
                      {exp.period}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
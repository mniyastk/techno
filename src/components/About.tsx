import { Card, CardContent } from "./ui/card";
import { Users, Award, Target, Lightbulb } from "lucide-react";

export function About() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Award, label: "Projects Completed", value: "100+" },
    { icon: Target, label: "Success Rate", value: "98%" },
    { icon: Lightbulb, label: "Years Experience", value: "5+" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About TechnoBazics
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                TechnoBazics is a forward-thinking technology company specializing in 
                artificial intelligence and Internet of Things (IoT) solutions. We believe 
                in the power of technology to transform businesses and improve lives.
              </p>
              <p>
                Our team of experienced engineers and AI specialists work closely with 
                clients to understand their unique challenges and develop custom solutions 
                that deliver measurable results. From intelligent chatbots to complex 
                automation systems, we bring cutting-edge technology to businesses of all sizes.
              </p>
              <p>
                We're committed to staying at the forefront of technological innovation, 
                continuously learning and adapting to provide our clients with the most 
                effective and efficient solutions available.
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Why Choose TechnoBazics?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Tailored Solutions
              </h4>
              <p className="text-muted-foreground">
                Every solution is custom-built to meet your specific business requirements 
                and objectives.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Proven Expertise
              </h4>
              <p className="text-muted-foreground">
                Our team brings years of experience in AI, machine learning, and IoT 
                technologies to every project.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Ongoing Support
              </h4>
              <p className="text-muted-foreground">
                We provide continuous support and maintenance to ensure your solutions 
                perform optimally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
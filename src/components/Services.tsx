import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Bot, Cpu, Zap, Network, Brain, Settings } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "Intelligent agents tailored to your specific business processes and requirements.",
      features: ["Natural Language Processing", "Machine Learning Integration", "Automated Decision Making", "24/7 Availability"],
      image: "https://images.unsplash.com/photo-1564707944519-7a116ef3841c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODc4MTM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Network,
      title: "IoT Solutions",
      description: "Connected device ecosystems that provide real-time monitoring and control.",
      features: ["Device Integration", "Real-time Monitoring", "Data Analytics", "Remote Control"],
      image: "https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBpbnRlcm5ldCUyMG9mJTIwdGhpbmdzJTIwZGV2aWNlc3xlbnwxfHx8fDE3NTg3ODk3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const additionalServices = [
    {
      icon: Brain,
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI solutions in your business."
    },
    {
      icon: Cpu,
      title: "System Integration",
      description: "Seamlessly integrate new technologies with your existing systems."
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Streamline your processes with intelligent automation solutions."
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing support and optimization for all your technology solutions."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive technology solutions that drive innovation and efficiency in your business
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <service.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">
                  Learn More About {service.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Button } from "./ui/button";
import { ArrowRight, Zap, Bot } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-5xl xl:text-6xl">
              Building Tomorrow's{" "}
              <span className="text-primary">AI Solutions</span>{" "}
              Today
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              TechnoBazics specializes in creating custom AI agents and IoT solutions 
              tailored to your business needs. Transform your operations with cutting-edge 
              technology that delivers real results.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <Button size="lg" className="text-lg px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Learn More
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Bot className="h-6 w-6 text-primary" />
                <span className="text-sm text-muted-foreground">Custom AI Agents</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-sm text-muted-foreground">IoT Solutions</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-10 max-w-2xl lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-2xl bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1604783125462-37d81c7385e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDF8fHx8MTc1ODc3MDQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern technology workspace"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
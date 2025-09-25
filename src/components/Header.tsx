import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo size="sm" />
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors">
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors">
                Contact
              </a>
            </div>
          </nav>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <ThemeToggle />
            <Button>Get Started</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#home" className="text-foreground hover:text-primary block px-3 py-2 rounded-md transition-colors">
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-primary block px-3 py-2 rounded-md transition-colors">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-primary block px-3 py-2 rounded-md transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary block px-3 py-2 rounded-md transition-colors">
                Contact
              </a>
              <div className="pt-2 space-y-2">
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="h-6 w-6 text-primary fill-primary" />
              <span className="text-xl font-bold text-foreground">media</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/tools" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Tools
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              to="/documentation" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Documentation
            </Link>
            <Link 
              to="/signin" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sign In
            </Link>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              asChild
              className="btn-primary hidden sm:inline-flex"
            >
              <a 
                href="https://trymedia.ai" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Open Media AI
              </a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
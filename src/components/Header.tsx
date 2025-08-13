import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/e30b4157-d7ea-4910-acef-04e28b2e90f8.png" 
              alt="Media AI" 
              className="h-6"
            />
          </Link>

          {/* Navigation & Auth */}
          <div className="flex items-center space-x-8">
            <Link 
              to="/pricing" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Pricing
            </Link>
            
            <div className="flex items-center space-x-3">
              <Button 
                asChild
                variant="ghost"
                className="text-foreground hover:text-primary font-medium px-4 py-2"
              >
                <a 
                  href="https://trymedia.ai/auth?type=login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Login
                </a>
              </Button>
              <Button 
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary-hover font-medium px-4 py-2 rounded-lg"
              >
                <a 
                  href="https://trymedia.ai/auth?type=signup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Sign Up
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
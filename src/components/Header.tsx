import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
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
          <div className="flex items-center space-x-6">
            <Link 
              to="/pricing" 
              className="hover:text-gray-900 transition-colors text-sm font-medium"
              style={{ color: '#1675e2' }}
            >
              Pricing
            </Link>
            
            <div className="flex items-center space-x-2">
              <Button 
                asChild
                variant="ghost"
                className="text-gray-700 hover:text-gray-900 hover:bg-transparent font-medium text-sm px-4 py-2 h-auto"
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
                className="font-medium text-sm h-auto border border-solid rounded-lg"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#22252a',
                  borderColor: '#e3e4e5',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  minHeight: '48px',
                  fontWeight: '500',
                  fontSize: '14px'
                }}
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
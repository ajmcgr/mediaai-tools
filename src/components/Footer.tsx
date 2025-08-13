import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/e30b4157-d7ea-4910-acef-04e28b2e90f8.png" 
              alt="Media AI" 
              className="h-7"
            />
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Company</h4>
              <div className="space-y-3">
                <Link 
                  to="/about" 
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
                <a 
                  href="https://blog.trymedia.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
                <a 
                  href="https://discord.gg/zrFtSbzQ2W" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Community
                </a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Support</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:support@trymedia.ai"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </a>
                <a 
                  href="https://trymedia.ai/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="https://trymedia.ai/terms-of-service" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>

            {/* Free Tools */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Free Tools</h4>
              <div className="space-y-3">
                <Link 
                  to="/tools/beat-outlet-matcher" 
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Beat & Outlet Matcher
                </Link>
                <Link 
                  to="/tools/pitch-personalization-helper" 
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pitch Personalization Helper
                </Link>
                <Link 
                  to="/tools/subject-line-split-tester" 
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Subject Line Split-Tester
                </Link>
                <Link 
                  to="/tools" 
                  className="block text-primary hover:text-primary-hover transition-colors font-medium"
                >
                  View All Tools →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">

            {/* Company */}
            <div>
              <h4 className="font-inter font-semibold text-base mb-4" style={{ color: '#222529' }}>Company</h4>
              <div className="space-y-3">
                <Link 
                  to="/about" 
                  className="block text-sm font-light transition-colors"
                  style={{ color: '#222529' }}
                >
                  About
                </Link>
                <a 
                  href="https://blog.trymedia.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm font-light transition-colors"
                  style={{ color: '#222529' }}
                >
                  Blog
                </a>
                <a 
                  href="https://discord.gg/zrFtSbzQ2W" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm font-light transition-colors"
                  style={{ color: '#222529' }}
                >
                  Community
                </a>
              </div>
            </div>
            {/* Support */}
            <div>
              <h4 className="font-inter font-semibold text-base mb-4" style={{ color: '#222529' }}>Support</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:support@trymedia.ai"
                  className="block text-sm font-light transition-colors"
                  style={{ color: '#222529' }}
                >
                  Support
                </a>
                <a 
                  href="https://trymedia.ai/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm font-light transition-colors"
                  style={{ color: '#222529' }}
                >
                  Privacy Policy
                </a>
                <a 
                  href="https://trymedia.ai/terms-of-service" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm font-light transition-colors"
                  style={{ color: '#222529' }}
                >
                  Terms of Service
                </a>
              </div>
            </div>

            {/* Free Tools */}
            <div>
              <h4 className="font-inter font-semibold text-base mb-4" style={{ color: '#222529' }}>Free Tools</h4>
              <div className="space-y-3">
                <Link 
                  to="/tools/beat-outlet-matcher" 
                  className="block text-sm font-light transition-colors"
                  style={{ color: '#222529' }}
                >
                  Beat & Outlet Matcher
                </Link>
                <Link 
                  to="/tools/pitch-personalization-helper" 
                  className="block text-sm font-light transition-colors"
                  style={{ color: '#222529' }}
                >
                  Pitch Personalization Helper
                </Link>
                <Link 
                  to="/tools/subject-line-split-tester" 
                  className="block text-sm font-light transition-colors"
                  style={{ color: '#222529' }}
                >
                  Subject Line Split-Tester
                </Link>
                <Link 
                  to="/tools" 
                  className="block text-sm font-light transition-colors"
                  style={{ color: '#222529' }}
                >
                  View All Tools →
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-inter font-semibold text-base mb-4" style={{ color: '#222529' }}>Connect</h4>
              <div className="space-y-3">
                <a 
                  href="https://twitter.com/trymediaai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm font-light transition-colors"
                  style={{ color: '#222529' }}
                >
                  Twitter
                </a>
                <a 
                  href="https://linkedin.com/company/trymediaai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm font-light transition-colors"
                  style={{ color: '#222529' }}
                >
                  LinkedIn
                </a>
                <a 
                  href="mailto:hello@trymedia.ai"
                  className="block text-sm font-light transition-colors"
                  style={{ color: '#222529' }}
                >
                  Email
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-12 pt-8">
            <div className="text-center">
              <p className="text-sm font-light" style={{ color: '#222529' }}>
                Copyright © 2025 Works App, Inc. Built with ♥️ by{' '}
                <a 
                  href="https://works.xyz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: '#222529' }}
                >
                  Works
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
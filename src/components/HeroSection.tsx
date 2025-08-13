import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Users, Zap, ArrowRight } from "lucide-react";
import heroToolsImage from "@/assets/hero-tools.jpg";

const HeroSection = () => {
  return (
    <section className="bg-hero-gradient py-20 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroToolsImage} 
          alt="PR and Social Media Tools" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="space-y-8 mb-12">
            <h1 className="text-hero">
              24 Free Tools for
              <br />
              <span className="text-white/95">PR & Social Media Pros</span>
            </h1>
            
            <p className="text-subhero max-w-2xl mx-auto">
              Beat matcher, pitch personalization, subject line testing, and more. 
              Built for professionals who use Media AI to connect with journalists and influencers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="btn-hero">
                <Link to="/tools">
                  Explore All Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="ghost" 
                className="text-white hover:bg-white/10 border border-white/20"
              >
                <a 
                  href="https://trymedia.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Open Media AI
                </a>
              </Button>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 text-white" />
                  </div>
                ))}
              </div>
              <span className="text-sm">2,847 users this month</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-300">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm">PR & Social Media pros love us</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">Always free • No signup required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
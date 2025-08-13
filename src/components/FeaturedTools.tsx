import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  MessageSquare, 
  TestTube, 
  Calculator,
  Users,
  Hash,
  ArrowRight,
  Sparkles
} from "lucide-react";

const FeaturedTools = () => {
  const featuredTools = [
    {
      title: "Beat & Outlet Matcher",
      description: "Get ranked lists of beats and outlet types to target for your story",
      icon: Target,
      slug: "beat-outlet-matcher",
      category: "Pitching",
      badge: "Popular"
    },
    {
      title: "Pitch Personalization Helper",
      description: "Generate tailored opening lines referencing recent journalist coverage",
      icon: MessageSquare,
      slug: "pitch-personalization-helper",
      category: "Pitching",
      badge: "New"
    },
    {
      title: "Subject Line Split-Tester",
      description: "Score and optimize subject lines for maximum open rates",
      icon: TestTube,
      slug: "subject-line-split-tester",
      category: "Pitching",
      badge: null
    },
    {
      title: "Pitch Fit Score Calculator",
      description: "Get a 0-100 fit score with suggestions to improve your pitch",
      icon: Calculator,
      slug: "pitch-fit-score-calculator",
      category: "Pitching",
      badge: null
    },
    {
      title: "Influencer Brief Builder",
      description: "Generate clear briefs with deliverables, messaging, and deadlines",
      icon: Users,
      slug: "influencer-brief-builder",
      category: "Influencer",
      badge: null
    },
    {
      title: "Hashtag & Angle Finder",
      description: "Discover trending hashtags and content angles by platform",
      icon: Hash,
      slug: "hashtag-angle-finder",
      category: "Influencer",
      badge: "Trending"
    }
  ];

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case "Popular":
        return "bg-primary text-primary-foreground";
      case "New":
        return "bg-green-500 text-white";
      case "Trending":
        return "bg-orange-500 text-white";
      default:
        return "";
    }
  };

  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Most Popular Tools
          </h2>
          <p className="text-lg text-muted-foreground">
            Hand-picked tools that PR and Social Media managers use daily to streamline their workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredTools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <Card key={tool.slug} className="card-tool group cursor-pointer">
                <Link to={`/${tool.slug}`} className="block">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    {tool.badge && (
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${getBadgeColor(tool.badge)}`}>
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {tool.category}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
                
                {/* CTA Section */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">
                    Ready for the full experience?
                  </p>
                  <Button asChild size="sm" variant="outline" className="w-full text-xs">
                    <a 
                      href="https://trymedia.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Try Media AI Platform
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild className="btn-primary">
            <Link to="/tools">
              <Sparkles className="mr-2 h-4 w-4" />
              View All 24 Tools
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
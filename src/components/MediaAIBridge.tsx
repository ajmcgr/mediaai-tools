import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Database, Filter, List, Star } from "lucide-react";

const MediaAIBridge = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powered by Media AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All tools are designed to work seamlessly with Media AI's database of journalists and creators. 
              Use our tools to prepare, then execute in Media AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Process */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Use Our Free Tools
                  </h3>
                  <p className="text-muted-foreground">
                    Perfect your pitch, find the right outlets, test subject lines, and build your strategy
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Export to Media AI
                  </h3>
                  <p className="text-muted-foreground">
                    Transfer filters, lists, and search queries directly to your Media AI workspace
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Execute Your Campaign
                  </h3>
                  <p className="text-muted-foreground">
                    Find journalists and creators, send personalized outreach, and track coverage
                  </p>
                </div>
              </div>

              <Button asChild className="btn-primary">
                <a 
                  href="https://trymedia.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Right side - Features */}
            <div className="space-y-6">
              <Card className="card-elevated">
                <div className="flex items-start space-x-4">
                  <Database className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      50,000+ Verified Contacts
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Access journalists, editors, and creators across all major outlets and platforms
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="card-elevated">
                <div className="flex items-start space-x-4">
                  <Filter className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Smart Search & Filters
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Find the perfect contacts using advanced filters for beat, location, outlet type, and more
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="card-elevated">
                <div className="flex items-start space-x-4">
                  <List className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      List Management
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Build, segment, and manage your media lists with powerful organization tools
                    </p>
                  </div>
                </div>
              </Card>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">5.0 rating</span>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Media AI transformed how we connect with journalists. The database is incredible 
                  and these free tools make prep work so much faster."
                </p>
                <p className="text-sm font-medium text-foreground mt-2">
                  - Sarah Chen, PR Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaAIBridge;
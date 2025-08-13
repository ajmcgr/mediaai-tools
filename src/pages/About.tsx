import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Users, Zap, Shield, Target } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-4">
              About Our Free Tools
            </h1>
            <p className="text-xl text-white/90">
              Built by PR professionals, for PR professionals. Powered by Media AI's 
              comprehensive database of journalists and creators.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Mission */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe great PR starts with great preparation. Our free tools help you 
              research, plan, and perfect your outreach before you connect with journalists 
              and creators through Media AI.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-elevated text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Always Free</h3>
                <p className="text-muted-foreground">
                  No hidden costs, no premium tiers. All 24 tools are completely free to use.
                </p>
              </div>
            </Card>

            <Card className="card-elevated text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Privacy First</h3>
                <p className="text-muted-foreground">
                  Your data stays secure. We only collect what's necessary to provide results.
                </p>
              </div>
            </Card>

            <Card className="card-elevated text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Media AI Ready</h3>
                <p className="text-muted-foreground">
                  Every tool is designed to work seamlessly with Media AI's platform.
                </p>
              </div>
            </Card>
          </div>

          {/* Story */}
          <Card className="card-elevated">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Built by PR Pros</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These tools were created by the team at Media AI based on real feedback from 
                  PR and Social Media professionals who use our platform daily.
                </p>
                <p>
                  We noticed that our users often spent time on repetitive tasks—researching beats, 
                  crafting personalized pitches, testing subject lines, building media lists. 
                  So we built these free tools to handle the prep work.
                </p>
                <p>
                  The result? You can focus on what matters most: building relationships and 
                  telling great stories.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to streamline your workflow?
            </h2>
            <p className="text-muted-foreground mb-8">
              Try our free tools, then take your campaigns to the next level with Media AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary">
                <a href="/tools">Explore Free Tools</a>
              </Button>
              <Button asChild variant="secondary" className="btn-secondary">
                <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer">
                  Try Media AI Free
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
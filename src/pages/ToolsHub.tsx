import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Search, 
  Filter,
  Target, 
  MessageSquare, 
  TestTube, 
  Calculator,
  Clock,
  Users,
  List,
  FileText,
  BarChart3,
  Settings,
  Hash,
  Shield,
  Globe,
  Zap,
  ArrowRight,
  Star
} from "lucide-react";

const ToolsHub = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Pitching", "Lists", "Influencer", "Compliance", "Analytics", "Workflow"];

  const allTools = [
    // Pitching Tools
    { 
      title: "Beat & Outlet Matcher", 
      description: "Paste your story; get a ranked list of beats/outlet types to target", 
      icon: Target, 
      slug: "beat-outlet-matcher", 
      category: "Pitching",
      badge: "Popular" 
    },
    { 
      title: "Pitch Personalization Helper", 
      description: "Enter journalist name + beat; get 3 tailored opening lines", 
      icon: MessageSquare, 
      slug: "pitch-personalization-helper", 
      category: "Pitching",
      badge: "New" 
    },
    { 
      title: "Subject Line Split-Tester", 
      description: "Generate/score 10 subject lines; pick 2–3 with highest open-rate likelihood", 
      icon: TestTube, 
      slug: "subject-line-split-tester", 
      category: "Pitching",
      badge: null 
    },
    { 
      title: "Pitch Fit Score Calculator", 
      description: "Input your news + audience; receive a 0–100 'fit score' with suggestions", 
      icon: Calculator, 
      slug: "pitch-fit-score-calculator", 
      category: "Pitching",
      badge: null 
    },
    { 
      title: "Embargo & Timing Planner", 
      description: "Enter launch date/timezones; get optimal outreach windows", 
      icon: Clock, 
      slug: "embargo-timing-planner", 
      category: "Compliance",
      badge: null 
    },
    { 
      title: "Follow-Up Cadence Builder", 
      description: "Create a 2–3 step follow-up plan with timing and copy prompts", 
      icon: Clock, 
      slug: "follow-up-cadence-builder", 
      category: "Compliance",
      badge: null 
    },

    // Lists Tools
    { 
      title: "List Segmenter (Lite)", 
      description: "Paste a rough list; get smart segments by region, beat, seniority", 
      icon: List, 
      slug: "list-segmenter-lite", 
      category: "Lists",
      badge: null 
    },
    { 
      title: "Contact Dedupe & Clean (Lite)", 
      description: "Paste CSV text; highlight likely duplicates/format errors", 
      icon: List, 
      slug: "contact-dedupe-clean", 
      category: "Lists",
      badge: null 
    },
    { 
      title: "Outreach Sequence Generator", 
      description: "Build a 3-email cadence tailored to story type and beat", 
      icon: MessageSquare, 
      slug: "outreach-sequence-generator", 
      category: "Lists",
      badge: null 
    },
    { 
      title: "Media AI Query Builder", 
      description: "Wizard that outputs a 'saved search' recipe for Media AI", 
      icon: Settings, 
      slug: "media-ai-query-builder", 
      category: "Lists",
      badge: null 
    },

    // Influencer Tools
    { 
      title: "Compliance & Disclosure Helper", 
      description: "Quick checklist for ASA/FTC disclosures; suggested captions", 
      icon: Shield, 
      slug: "compliance-disclosure-helper", 
      category: "Influencer",
      badge: null 
    },
    { 
      title: "Influencer Brief Builder", 
      description: "Generate a clear brief with deliverables, messaging, usage rights", 
      icon: Users, 
      slug: "influencer-brief-builder", 
      category: "Influencer",
      badge: null 
    },
    { 
      title: "Rate Card Estimator (Influencer Lite)", 
      description: "Estimate ranges based on follower bands and platform benchmarks", 
      icon: Calculator, 
      slug: "rate-card-estimator", 
      category: "Influencer",
      badge: null 
    },
    { 
      title: "Hashtag & Angle Finder (Campaign)", 
      description: "Enter topic; get angle ideas + relevant hashtags by platform", 
      icon: Hash, 
      slug: "hashtag-angle-finder", 
      category: "Influencer",
      badge: "Trending" 
    },

    // Workflow Tools
    { 
      title: "Press Release Structure Builder", 
      description: "Choose type; get a press release scaffold with fielded sections", 
      icon: FileText, 
      slug: "press-release-builder", 
      category: "Workflow",
      badge: null 
    },
    { 
      title: "Quote Polisher for PR", 
      description: "Paste quotes; get stronger, media-friendly versions", 
      icon: MessageSquare, 
      slug: "quote-polisher", 
      category: "Workflow",
      badge: null 
    },
    { 
      title: "Media Kit Builder (Lite)", 
      description: "Assemble a lightweight press kit page", 
      icon: FileText, 
      slug: "media-kit-builder", 
      category: "Workflow",
      badge: null 
    },
    { 
      title: "Boilerplate Refinery", 
      description: "Paste company boilerplate; get a press-ready version", 
      icon: FileText, 
      slug: "boilerplate-refinery", 
      category: "Workflow",
      badge: null 
    },

    // Analytics Tools
    { 
      title: "Coverage Tracker (Public Page Template)", 
      description: "Create a shareable coverage board template", 
      icon: BarChart3, 
      slug: "coverage-tracker", 
      category: "Analytics",
      badge: null 
    },
    { 
      title: "UTM Builder for PR Links", 
      description: "Generate consistent UTM parameters for press links", 
      icon: Globe, 
      slug: "utm-builder-pr", 
      category: "Analytics",
      badge: null 
    },
    { 
      title: "Link Health & No-Follow Checker", 
      description: "Paste coverage URLs; check status, no-follow, and canonical presence", 
      icon: Globe, 
      slug: "link-health-checker", 
      category: "Analytics",
      badge: null 
    },
    { 
      title: "PR ROI Snapshot Calculator", 
      description: "Input coverage metrics/traffic; estimate impact", 
      icon: BarChart3, 
      slug: "pr-roi-calculator", 
      category: "Analytics",
      badge: null 
    },

    // Compliance Tools
    { 
      title: "Journalist Availability Timezone Converter", 
      description: "Enter city list; get a friendly window to email", 
      icon: Globe, 
      slug: "journalist-timezone-converter", 
      category: "Compliance",
      badge: null 
    },
    { 
      title: "Crisis Holding Statement Generator", 
      description: "Draft a short, neutral, timely statement with approval placeholders", 
      icon: Shield, 
      slug: "crisis-holding-statement", 
      category: "Compliance",
      badge: null 
    }
  ];

  const filteredTools = allTools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Free PR & Social Media Tools
            </h1>
            <p className="text-xl text-white/90 mb-8">
              24 powerful tools to streamline your workflow. Find beats, craft pitches, 
              manage lists, and track coverage.
            </p>
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <Star className="h-5 w-5 text-yellow-300 fill-current" />
              <span>Always free • No signup required • Export to Media AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 input-field"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "secondary"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? "btn-primary" : "btn-secondary"}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <Card key={tool.slug} className="card-tool group cursor-pointer">
                  <Link to={`/tools/${tool.slug}`} className="block">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        {tool.badge && (
                          <Badge className={getBadgeColor(tool.badge)}>
                            {tool.badge}
                          </Badge>
                        )}
                        <Badge variant="secondary" className="text-xs">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {tool.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {tool.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-primary">
                        Try for free
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

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No tools found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                variant="secondary"
                className="mt-4"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to supercharge your PR workflow?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Use these free tools to prepare your campaigns, then execute with Media AI's 
              database of 50,000+ journalists and creators.
            </p>
            <Button asChild className="btn-primary">
              <a 
                href="https://trymedia.ai" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Zap className="mr-2 h-4 w-4" />
                Start Free Trial
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToolsHub;
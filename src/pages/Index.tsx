import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Target, 
  MessageSquare, 
  TestTube, 
  Calculator,
  Users,
  Hash,
  ArrowRight,
  Clock,
  GitBranch,
  BarChart3,
  FileText,
  Quote,
  Eye,
  ExternalLink,
  Shield,
  Megaphone,
  Zap,
  Search,
  TrendingUp,
  AlertTriangle,
  Type,
  Filter,
  DollarSign
} from "lucide-react";

const Index = () => {
  const allTools = [
    {
      title: "Beat & Outlet Matcher",
      description: "Get ranked lists of beats and outlet types to target for your story",
      icon: Target,
      slug: "beat-outlet-matcher",
      category: "Pitching"
    },
    {
      title: "Pitch Personalization Generator",
      description: "Generate tailored opening lines referencing recent journalist coverage",
      icon: MessageSquare,
      slug: "pitch-personalization-helper",
      category: "Pitching"
    },
    {
      title: "Subject Line Split-Tester",
      description: "Score and optimize subject lines for maximum open rates",
      icon: TestTube,
      slug: "subject-line-split-tester",
      category: "Pitching"
    },
    {
      title: "Pitch Fit Score Calculator",
      description: "Get a 0-100 fit score with suggestions to improve your pitch",
      icon: Calculator,
      slug: "pitch-fit-score-calculator",
      category: "Pitching"
    },
    {
      title: "Embargo & Timing Planner",
      description: "Enter launch date/timezones; get optimal outreach windows and embargo schedule",
      icon: Clock,
      slug: "embargo-timing-planner",
      category: "Pitching"
    },
    {
      title: "Follow-Up Cadence Generator",
      description: "Create a 2–3 step follow-up plan with timing, copy prompts, and calendar reminders",
      icon: GitBranch,
      slug: "follow-up-cadence-builder",
      category: "Pitching"
    },
    {
      title: "List Segmenter (Lite)",
      description: "Paste a rough list; get smart segments (region, beat, seniority) + suggested Media AI filters",
      icon: Filter,
      slug: "list-segmenter-lite",
      category: "Lists"
    },
    {
      title: "Contact Dedupe & Clean (Lite)",
      description: "Paste CSV text; highlight likely duplicates/format errors before import to Media AI",
      icon: Search,
      slug: "contact-dedupe-clean-lite",
      category: "Lists"
    },
    {
      title: "Outreach Sequence Generator",
      description: "Build a 3-email cadence (intro, value, follow-up) tailored to story type and beat",
      icon: BarChart3,
      slug: "outreach-sequence-generator",
      category: "Pitching"
    },
    {
      title: "Press Release Structure Generator",
      description: "Choose type (funding, product, partnership); get a press release scaffold with fielded sections",
      icon: FileText,
      slug: "press-release-structure-builder",
      category: "Workflow"
    },
    {
      title: "Quote Polisher for PR",
      description: "Paste quotes; get stronger, media-friendly versions with authority + clarity",
      icon: Quote,
      slug: "quote-polisher-pr",
      category: "Workflow"
    },
    {
      title: "Coverage Tracker (Public Page Template)",
      description: "Create a shareable coverage board template (headline, outlet, link, date)",
      icon: Eye,
      slug: "coverage-tracker-template",
      category: "Analytics"
    },
    {
      title: "UTM Generator for PR Links",
      description: "Generate consistent UTM parameters for press links and influencer links",
      icon: ExternalLink,
      slug: "utm-builder-pr-links",
      category: "Analytics"
    },
    {
      title: "Link Health & No-Follow Checker",
      description: "Paste coverage URLs; check status, no-follow, and canonical presence",
      icon: Shield,
      slug: "link-health-checker",
      category: "Analytics"
    },
    {
      title: "Media Kit Generator (Lite)",
      description: "Assemble a lightweight press kit page: logo, product shots, boilerplate, founder bios",
      icon: Megaphone,
      slug: "media-kit-builder-lite",
      category: "Workflow"
    },
    {
      title: "Journalist Availability Timezone Converter",
      description: "Enter city list; get a friendly window to email without being intrusive",
      icon: Clock,
      slug: "journalist-timezone-converter",
      category: "Pitching"
    },
    {
      title: "Compliance & Disclosure Helper (Influencers)",
      description: "Quick checklist for ASA/FTC disclosures; suggested captions with tags",
      icon: Shield,
      slug: "compliance-disclosure-helper",
      category: "Compliance"
    },
    {
      title: "Influencer Brief Generator",
      description: "Generate a clear brief (deliverables, messaging, usage rights, deadlines, do/don't)",
      icon: Users,
      slug: "influencer-brief-builder",
      category: "Influencer"
    },
    {
      title: "Rate Card Estimator (Influencer Lite)",
      description: "Estimate ranges based on follower bands and platform benchmarks",
      icon: DollarSign,
      slug: "rate-card-estimator-lite",
      category: "Influencer"
    },
    {
      title: "Hashtag & Angle Finder (Campaign)",
      description: "Enter topic; get angle ideas + relevant hashtags by platform",
      icon: Hash,
      slug: "hashtag-angle-finder",
      category: "Influencer"
    },
    {
      title: "Crisis Holding Statement Generator",
      description: "Draft a short, neutral, timely statement with approval placeholders",
      icon: AlertTriangle,
      slug: "crisis-holding-statement-generator",
      category: "Workflow"
    },
    {
      title: "Boilerplate Refinery",
      description: "Paste company boilerplate; get a press-ready, concise, keyword-aware version",
      icon: Type,
      slug: "boilerplate-refinery",
      category: "Workflow"
    },
    {
      title: "Media AI Query Builder",
      description: "Wizard that outputs a 'saved search' recipe (filters/tags) to reproduce inside Media AI",
      icon: Zap,
      slug: "media-ai-query-builder",
      category: "Workflow"
    },
    {
      title: "PR ROI Snapshot Calculator",
      description: "Input coverage metrics/traffic; estimate impact (reach, clicks, earned value proxy)",
      icon: TrendingUp,
      slug: "pr-roi-snapshot-calculator",
      category: "Analytics"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-8 text-center">
            Free PR & Social Media Tools
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allTools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Card key={tool.slug} className="p-6 hover:shadow-lg transition-all duration-300 group">
                  <Link to={`/${tool.slug}`} className="block">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-normal text-foreground mb-2 group-hover:text-primary transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {tool.description}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {tool.category}
                          </span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

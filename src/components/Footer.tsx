import { Link } from "react-router-dom";
import { Star, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const toolCategories = {
    "Pitching": [
      { name: "Beat & Outlet Matcher", slug: "beat-outlet-matcher" },
      { name: "Pitch Personalization Helper", slug: "pitch-personalization-helper" },
      { name: "Subject Line Split-Tester", slug: "subject-line-split-tester" },
      { name: "Pitch Fit Score Calculator", slug: "pitch-fit-score-calculator" },
    ],
    "Lists": [
      { name: "List Segmenter (Lite)", slug: "list-segmenter-lite" },
      { name: "Contact Dedupe & Clean", slug: "contact-dedupe-clean" },
      { name: "Media AI Query Builder", slug: "media-ai-query-builder" },
      { name: "Outreach Sequence Generator", slug: "outreach-sequence-generator" },
    ],
    "Influencer": [
      { name: "Influencer Brief Builder", slug: "influencer-brief-builder" },
      { name: "Rate Card Estimator", slug: "rate-card-estimator" },
      { name: "Hashtag & Angle Finder", slug: "hashtag-angle-finder" },
      { name: "Compliance & Disclosure Helper", slug: "compliance-disclosure-helper" },
    ],
    "Compliance": [
      { name: "Embargo & Timing Planner", slug: "embargo-timing-planner" },
      { name: "Follow-Up Cadence Builder", slug: "follow-up-cadence-builder" },
      { name: "Crisis Holding Statement Generator", slug: "crisis-holding-statement" },
      { name: "Journalist Availability Timezone", slug: "journalist-timezone-converter" },
    ],
    "Analytics": [
      { name: "Coverage Tracker", slug: "coverage-tracker" },
      { name: "UTM Builder for PR Links", slug: "utm-builder-pr" },
      { name: "Link Health & No-Follow Checker", slug: "link-health-checker" },
      { name: "PR ROI Snapshot Calculator", slug: "pr-roi-calculator" },
    ],
    "Workflow": [
      { name: "Press Release Structure Builder", slug: "press-release-builder" },
      { name: "Quote Polisher for PR", slug: "quote-polisher" },
      { name: "Media Kit Builder (Lite)", slug: "media-kit-builder" },
      { name: "Boilerplate Refinery", slug: "boilerplate-refinery" },
    ]
  };

  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-primary fill-primary" />
              <span className="text-xl font-bold text-foreground">media</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Free tools for PR & Social Media Managers. Powered by Media AI's database of journalists and creators.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Free Tools - Split into 3 columns */}
          {Object.entries(toolCategories).slice(0, 3).map(([category, tools]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category} Tools</h4>
              <ul className="space-y-2">
                {tools.map(tool => (
                  <li key={tool.slug}>
                    <Link 
                      to={`/tools/${tool.slug}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* More Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {Object.entries(toolCategories).slice(3, 6).map(([category, tools]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category} Tools</h4>
              <ul className="space-y-2">
                {tools.map(tool => (
                  <li key={tool.slug}>
                    <Link 
                      to={`/tools/${tool.slug}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <Link to="/tools" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                All Tools
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About
              </Link>
              <Link to="/documentation" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Documentation
              </Link>
              <a 
                href="https://trymedia.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover transition-colors text-sm font-medium"
              >
                Media AI
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 Media AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
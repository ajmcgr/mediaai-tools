import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { updatePageSEO, addStructuredData } from "@/utils/seo";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  Copy, 
  Download, 
  Share2, 
  Star,
  CheckCircle,
  HelpCircle,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ToolData {
  title: string;
  description: string;
  category: string;
  inputLabel: string;
  inputPlaceholder: string;
  outputTitle: string;
  sampleOutput: string[];
  howToUse: string[];
  faqs: { question: string; answer: string; }[];
  relatedTools: { title: string; slug: string; }[];
}

const ToolTemplate = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  // Tool configurations
  const toolsData: Record<string, ToolData> = {
    "beat-outlet-matcher": {
      title: "Beat & Outlet Matcher",
      description: "Paste your story and get a ranked list of beats and outlet types to target, plus suggested filters to use inside Media AI.",
      category: "Pitching",
      inputLabel: "Your Story",
      inputPlaceholder: "Paste your press release, story summary, or key talking points here...",
      outputTitle: "Recommended Beats & Outlets",
      sampleOutput: [
        "🎯 Technology & Startups (95% match)",
        "💼 Business & Finance (87% match)", 
        "🚀 Innovation & AI (82% match)",
        "📱 Mobile & Apps (76% match)",
        "💡 Entrepreneurship (71% match)"
      ],
      howToUse: [
        "Copy your recommended beats and outlet types",
        "Open Media AI and go to the advanced search filters",
        "Select the recommended categories in the 'Beat' filter to find relevant journalists"
      ],
      faqs: [
        {
          question: "How accurate are the beat matches?",
          answer: "Our AI analyzes your content against thousands of articles to provide 70-95% accuracy in beat matching."
        },
        {
          question: "Can I use this for different story types?",
          answer: "Yes! This works for press releases, feature stories, product launches, funding announcements, and more."
        }
      ],
      relatedTools: [
        { title: "Pitch Personalization Helper", slug: "pitch-personalization-helper" },
        { title: "Media AI Query Builder", slug: "media-ai-query-builder" },
        { title: "Subject Line Split-Tester", slug: "subject-line-split-tester" }
      ]
    },
    "pitch-personalization-helper": {
      title: "Pitch Personalization Helper",
      description: "Enter a journalist's name and beat to get 3 tailored opening lines that reference their recent coverage.",
      category: "Pitching",
      inputLabel: "Journalist Details",
      inputPlaceholder: "Enter journalist name and beat (e.g., 'Sarah Chen, Tech Reporter at TechCrunch')...",
      outputTitle: "Personalized Opening Lines",
      sampleOutput: [
        "Hi Sarah, I loved your recent piece on AI startups disrupting healthcare...",
        "Sarah, your analysis of the recent funding trends in AI was spot-on...",
        "Following your coverage of emerging tech companies, I thought you'd be interested..."
      ],
      howToUse: [
        "Copy your preferred opening line",
        "Use it as the first sentence in your pitch email",
        "Follow up with your story angle and why it's relevant to their beat"
      ],
      faqs: [
        {
          question: "How do you find recent coverage?",
          answer: "We analyze recent articles and social media activity to craft relevant, timely references."
        },
        {
          question: "Should I always use these exactly as written?",
          answer: "These are starting points. Feel free to customize them to match your voice and specific story."
        }
      ],
      relatedTools: [
        { title: "Beat & Outlet Matcher", slug: "beat-outlet-matcher" },
        { title: "Subject Line Split-Tester", slug: "subject-line-split-tester" },
        { title: "Follow-Up Cadence Builder", slug: "follow-up-cadence-builder" }
      ]
    }
    // Add more tool configurations here...
  };

  const currentTool = toolsData[slug || ""] || {
    title: "Tool Not Found",
    description: "This tool is coming soon!",
    category: "General",
    inputLabel: "Input",
    inputPlaceholder: "Enter your content...",
    outputTitle: "Results",
    sampleOutput: ["Coming soon..."],
    howToUse: ["This tool is under development"],
    faqs: [],
    relatedTools: []
  };

  // SEO & Schema setup
  useEffect(() => {
    const title = `${currentTool.title} - Free PR Tool | Media AI`;
    const description = currentTool.description.length > 155 
      ? currentTool.description.substring(0, 152) + "..."
      : currentTool.description;
    
    updatePageSEO(title, description, `PR tools, ${currentTool.category.toLowerCase()}, journalism, media outreach`);

    // Add FAQ Schema if FAQs exist
    if (currentTool.faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": currentTool.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
      addStructuredData(faqSchema);
    }

    // Add WebApplication Schema
    const appSchema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": currentTool.title,
      "description": currentTool.description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };
    addStructuredData(appSchema);
  }, [currentTool]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setShowLeadCapture(true);
  };

  const handleLeadCapture = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    
    setShowResults(true);
    setShowLeadCapture(false);
    toast({
      title: "Results Generated!",
      description: "Your personalized results are ready below.",
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {currentTool.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentTool.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {currentTool.description}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Tool Interface */}
          <Card className="card-elevated">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">
                {currentTool.inputLabel}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                  placeholder={currentTool.inputPlaceholder}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="input-field min-h-[120px]"
                  required
                />
                
                <Button type="submit" className="btn-primary w-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Results
                </Button>
              </form>
            </div>
          </Card>

          {/* Lead Capture Modal */}
          {showLeadCapture && (
            <Card className="card-elevated border-primary">
              <div className="space-y-6">
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Almost there! 
                  </h3>
                  <p className="text-muted-foreground">
                    Get your personalized results by providing your details below.
                  </p>
                </div>
                
                <form onSubmit={handleLeadCapture} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-field"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full">
                    Get My Results
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    We'll email you a copy of your results and occasional updates about new tools.
                  </p>
                </form>
              </div>
            </Card>
          )}

          {/* Results */}
          {showResults && (
            <Card className="card-elevated">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {currentTool.outputTitle}
                </h2>
                
                <div className="space-y-3">
                  {currentTool.sampleOutput.map((result, index) => (
                    <div 
                      key={index} 
                      className="p-4 bg-secondary rounded-xl border border-border"
                    >
                      <p className="text-foreground">{result}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(result)}
                        className="mt-2"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" className="btn-secondary">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy All
                  </Button>
                  <Button variant="secondary" className="btn-secondary">
                    <Download className="mr-2 h-4 w-4" />
                    Download CSV
                  </Button>
                  <Button variant="secondary" className="btn-secondary">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Export to Media AI List
                  </Button>
                  <Button variant="secondary" className="btn-secondary">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* How to use with Media AI */}
          <Card className="card-elevated bg-primary/5 border-primary/20">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center">
                <Star className="mr-2 h-5 w-5 text-primary" />
                How to use with Media AI
              </h3>
              <ol className="space-y-2">
                {currentTool.howToUse.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ol>
              <Button asChild className="btn-primary">
                <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer">
                  Open Media AI
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Card>

          {/* FAQ */}
          {currentTool.faqs.length > 0 && (
            <Card className="card-elevated">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <HelpCircle className="mr-2 h-5 w-5" />
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible>
                {currentTool.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          )}

          {/* Related Tools */}
          {currentTool.relatedTools.length > 0 && (
            <Card className="card-elevated">
              <h3 className="text-xl font-bold text-foreground mb-6">
                You might also like
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentTool.relatedTools.map((tool, index) => (
                  <Link
                    key={index}
                    to={`/tools/${tool.slug}`}
                    className="p-4 bg-secondary hover:bg-secondary/80 rounded-xl border border-border transition-colors group"
                  >
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {tool.title}
                    </h4>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-2" />
                  </Link>
                ))}
              </div>
            </Card>
          )}

          {/* Social Proof */}
          <Card className="card-elevated text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">Powered by Media AI</span>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Used by PR professionals at leading companies to streamline their workflow 
                and connect with the right journalists and creators.
              </p>
              <Button asChild className="btn-primary">
                <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ToolTemplate;
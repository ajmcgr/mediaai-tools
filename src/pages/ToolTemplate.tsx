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
    },
    "subject-line-split-tester": {
      title: "Subject Line Split-Tester",
      description: "Score and optimize subject lines for maximum open rates",
      category: "Pitching",
      inputLabel: "Subject Lines to Test",
      inputPlaceholder: "Enter 2-5 subject lines, one per line...",
      outputTitle: "Subject Line Scores & Optimization",
      sampleOutput: [
        "📧 'Exclusive: New AI breakthrough' - Score: 87/100",
        "📧 'Quick question about coverage' - Score: 45/100",
        "📧 'Industry first: Revolutionary tech launch' - Score: 92/100"
      ],
      howToUse: [
        "Copy the highest-scoring subject line",
        "Use the optimization suggestions to improve lower-scoring lines",
        "Test variations in your email campaigns"
      ],
      faqs: [
        {
          question: "What factors affect the score?",
          answer: "We analyze length, urgency, personalization, spam triggers, and industry best practices."
        }
      ],
      relatedTools: [
        { title: "Pitch Personalization Helper", slug: "pitch-personalization-helper" },
        { title: "Follow-Up Cadence Builder", slug: "follow-up-cadence-builder" }
      ]
    },
    "pitch-fit-score-calculator": {
      title: "Pitch Fit Score Calculator",
      description: "Get a 0-100 fit score with suggestions to improve your pitch",
      category: "Pitching",
      inputLabel: "Your Pitch",
      inputPlaceholder: "Paste your full pitch email here...",
      outputTitle: "Pitch Analysis & Score",
      sampleOutput: [
        "🎯 Overall Fit Score: 78/100",
        "✅ Strong: Clear value proposition, relevant timing",
        "⚠️ Improve: Add more personalization, shorten intro"
      ],
      howToUse: [
        "Review your fit score and improvement suggestions",
        "Apply the recommended changes to strengthen your pitch",
        "Re-test after improvements to track your progress"
      ],
      faqs: [
        {
          question: "How is the score calculated?",
          answer: "We evaluate relevance, timing, personalization, clarity, and call-to-action strength."
        }
      ],
      relatedTools: [
        { title: "Pitch Personalization Helper", slug: "pitch-personalization-helper" },
        { title: "Subject Line Split-Tester", slug: "subject-line-split-tester" }
      ]
    },
    "embargo-timing-planner": {
      title: "Embargo & Timing Planner",
      description: "Enter launch date/timezones; get optimal outreach windows and embargo schedule",
      category: "Pitching",
      inputLabel: "Launch Details",
      inputPlaceholder: "Enter launch date, time zones, and key markets...",
      outputTitle: "Optimal Timing Schedule",
      sampleOutput: [
        "📅 Embargo lift: March 15, 6:00 AM EST",
        "🌍 EU outreach window: March 10-12",
        "🇺🇸 US outreach window: March 11-13"
      ],
      howToUse: [
        "Follow the recommended outreach timeline",
        "Set calendar reminders for each phase",
        "Coordinate with your team using the schedule"
      ],
      faqs: [
        {
          question: "How far in advance should I pitch?",
          answer: "Typically 5-7 days for daily news, 2-3 weeks for features and long-lead publications."
        }
      ],
      relatedTools: [
        { title: "Journalist Timezone Converter", slug: "journalist-timezone-converter" },
        { title: "Follow-Up Cadence Builder", slug: "follow-up-cadence-builder" }
      ]
    },
    "follow-up-cadence-builder": {
      title: "Follow-Up Cadence Builder",
      description: "Create a 2–3 step follow-up plan with timing, copy prompts, and calendar reminders",
      category: "Pitching",
      inputLabel: "Original Pitch Details",
      inputPlaceholder: "Describe your story and original pitch timing...",
      outputTitle: "Follow-Up Strategy",
      sampleOutput: [
        "📬 Follow-up #1: 3 days - 'Quick follow-up on [story]'",
        "📬 Follow-up #2: 7 days - 'Additional angle: [new development]'",
        "📬 Follow-up #3: 14 days - 'Final check: still relevant for coverage?'"
      ],
      howToUse: [
        "Schedule follow-ups in your calendar",
        "Customize the suggested copy for your story",
        "Track responses and adjust timing as needed"
      ],
      faqs: [
        {
          question: "How many follow-ups is too many?",
          answer: "Generally 2-3 follow-ups maximum, spaced 3-7 days apart for news, longer for features."
        }
      ],
      relatedTools: [
        { title: "Embargo & Timing Planner", slug: "embargo-timing-planner" },
        { title: "Pitch Personalization Helper", slug: "pitch-personalization-helper" }
      ]
    },
    "list-segmenter-lite": {
      title: "List Segmenter (Lite)",
      description: "Paste a rough list; get smart segments (region, beat, seniority) + suggested Media AI filters",
      category: "Lists",
      inputLabel: "Contact List",
      inputPlaceholder: "Paste your journalist list (names, outlets, beats)...",
      outputTitle: "Segmented Lists & Filters",
      sampleOutput: [
        "🎯 Tech Reporters (US): 23 contacts",
        "🌍 Business Journalists (EU): 15 contacts",
        "📺 Broadcast Media (Global): 8 contacts"
      ],
      howToUse: [
        "Copy the suggested segments",
        "Use the Media AI filters to refine your targeting",
        "Create separate campaigns for each segment"
      ],
      faqs: [
        {
          question: "What format should my list be in?",
          answer: "Any format works - CSV, plain text, or even copy-pasted from spreadsheets."
        }
      ],
      relatedTools: [
        { title: "Contact Dedupe & Clean", slug: "contact-dedupe-clean-lite" },
        { title: "Media AI Query Builder", slug: "media-ai-query-builder" }
      ]
    },
    "contact-dedupe-clean-lite": {
      title: "Contact Dedupe & Clean (Lite)",
      description: "Paste CSV text; highlight likely duplicates/format errors before import to Media AI",
      category: "Lists",
      inputLabel: "Contact Data",
      inputPlaceholder: "Paste your CSV data or contact list...",
      outputTitle: "Clean Contact List",
      sampleOutput: [
        "✅ Clean contacts: 87",
        "⚠️ Duplicates found: 5",
        "❌ Format errors: 3"
      ],
      howToUse: [
        "Review flagged duplicates and errors",
        "Download the cleaned list",
        "Import the clean data into Media AI"
      ],
      faqs: [
        {
          question: "What errors does it detect?",
          answer: "Invalid emails, formatting issues, obvious duplicates, and incomplete records."
        }
      ],
      relatedTools: [
        { title: "List Segmenter (Lite)", slug: "list-segmenter-lite" },
        { title: "Media AI Query Builder", slug: "media-ai-query-builder" }
      ]
    },
    "outreach-sequence-generator": {
      title: "Outreach Sequence Generator",
      description: "Build a 3-email cadence (intro, value, follow-up) tailored to story type and beat",
      category: "Pitching",
      inputLabel: "Campaign Details",
      inputPlaceholder: "Describe your story, target beat, and key messages...",
      outputTitle: "Email Sequence",
      sampleOutput: [
        "📧 Email 1: Introduction & Hook",
        "📧 Email 2: Value-Add Content",
        "📧 Email 3: Final Follow-Up"
      ],
      howToUse: [
        "Customize each email template for your story",
        "Schedule the sequence in your email tool",
        "Track open rates and responses"
      ],
      faqs: [
        {
          question: "How should I space the emails?",
          answer: "Day 1, Day 4, Day 8 works well for most campaigns. Adjust based on your story urgency."
        }
      ],
      relatedTools: [
        { title: "Follow-Up Cadence Builder", slug: "follow-up-cadence-builder" },
        { title: "Subject Line Split-Tester", slug: "subject-line-split-tester" }
      ]
    },
    "press-release-structure-builder": {
      title: "Press Release Structure Builder",
      description: "Choose type (funding, product, partnership); get a press release scaffold with fielded sections",
      category: "Workflow",
      inputLabel: "Press Release Type & Details",
      inputPlaceholder: "Select type and enter key details about your announcement...",
      outputTitle: "Press Release Structure",
      sampleOutput: [
        "📰 Headline: [Company] Raises $X Series A",
        "📍 Dateline: [City, Date]",
        "📝 Lead paragraph template",
        "💬 Executive quote placeholder",
        "📊 Company background section"
      ],
      howToUse: [
        "Fill in the templated sections with your specific details",
        "Follow the structure for professional formatting",
        "Review and polish before distribution"
      ],
      faqs: [
        {
          question: "What press release types are supported?",
          answer: "Funding, product launches, partnerships, acquisitions, executive appointments, and more."
        }
      ],
      relatedTools: [
        { title: "Quote Polisher for PR", slug: "quote-polisher-pr" },
        { title: "Boilerplate Refinery", slug: "boilerplate-refinery" }
      ]
    },
    "quote-polisher-pr": {
      title: "Quote Polisher for PR",
      description: "Paste quotes; get stronger, media-friendly versions with authority + clarity",
      category: "Workflow",
      inputLabel: "Original Quotes",
      inputPlaceholder: "Paste the quotes you want to improve...",
      outputTitle: "Polished Quotes",
      sampleOutput: [
        "💬 Original: 'We're excited about this.'",
        "✨ Polished: 'This breakthrough represents a fundamental shift in how businesses approach customer engagement.'",
        "📈 Impact: More authoritative, specific, and quotable"
      ],
      howToUse: [
        "Replace original quotes with polished versions",
        "Ensure executives approve the refined language",
        "Use in press releases and media materials"
      ],
      faqs: [
        {
          question: "Will these still sound authentic?",
          answer: "Yes, we maintain the speaker's intent while improving clarity and media appeal."
        }
      ],
      relatedTools: [
        { title: "Press Release Structure Builder", slug: "press-release-structure-builder" },
        { title: "Boilerplate Refinery", slug: "boilerplate-refinery" }
      ]
    },
    "coverage-tracker-template": {
      title: "Coverage Tracker (Public Page Template)",
      description: "Create a shareable coverage board template (headline, outlet, link, date)",
      category: "Analytics",
      inputLabel: "Coverage Details",
      inputPlaceholder: "Enter your recent coverage (outlet, headline, date, link)...",
      outputTitle: "Coverage Board",
      sampleOutput: [
        "📰 TechCrunch: 'Startup Raises $5M Series A' - March 15",
        "📺 CNBC: 'Innovation in AI Space' - March 16",
        "📱 The Verge: 'Product Launch Review' - March 17"
      ],
      howToUse: [
        "Create a public page on your website",
        "Update regularly with new coverage",
        "Share with investors and stakeholders"
      ],
      faqs: [
        {
          question: "Should I include all coverage?",
          answer: "Focus on tier-1 outlets and significant features. Quality over quantity works best."
        }
      ],
      relatedTools: [
        { title: "UTM Builder for PR Links", slug: "utm-builder-pr-links" },
        { title: "PR ROI Snapshot Calculator", slug: "pr-roi-snapshot-calculator" }
      ]
    },
    "utm-builder-pr-links": {
      title: "UTM Builder for PR Links",
      description: "Generate consistent UTM parameters for press links and influencer links",
      category: "Analytics",
      inputLabel: "Campaign Details",
      inputPlaceholder: "Enter campaign name, source outlet, and content type...",
      outputTitle: "UTM-Tagged Links",
      sampleOutput: [
        "🔗 TechCrunch link: ?utm_source=techcrunch&utm_medium=pr&utm_campaign=series_a",
        "🔗 CNBC link: ?utm_source=cnbc&utm_medium=interview&utm_campaign=series_a",
        "📊 Tracking spreadsheet template included"
      ],
      howToUse: [
        "Use these UTM parameters in your media pitches",
        "Track performance in Google Analytics",
        "Measure PR campaign effectiveness"
      ],
      faqs: [
        {
          question: "What's the best UTM structure for PR?",
          answer: "Source=outlet, Medium=pr/interview/feature, Campaign=your_campaign_name works well."
        }
      ],
      relatedTools: [
        { title: "Coverage Tracker Template", slug: "coverage-tracker-template" },
        { title: "PR ROI Snapshot Calculator", slug: "pr-roi-snapshot-calculator" }
      ]
    },
    "link-health-checker": {
      title: "Link Health & No-Follow Checker",
      description: "Paste coverage URLs; check status, no-follow, and canonical presence",
      category: "Analytics",
      inputLabel: "Coverage URLs",
      inputPlaceholder: "Paste URLs of your coverage (one per line)...",
      outputTitle: "Link Health Report",
      sampleOutput: [
        "✅ techcrunch.com/article - Live, Follow, Canonical OK",
        "⚠️ example.com/news - Live, No-Follow detected",
        "❌ oldsite.com/story - 404 Error"
      ],
      howToUse: [
        "Monitor your coverage links monthly",
        "Follow up with outlets on broken links",
        "Track SEO value of your coverage"
      ],
      faqs: [
        {
          question: "Why do some links have no-follow?",
          answer: "Some outlets use no-follow for all external links as a general policy, not necessarily due to paid content."
        }
      ],
      relatedTools: [
        { title: "Coverage Tracker Template", slug: "coverage-tracker-template" },
        { title: "UTM Builder for PR Links", slug: "utm-builder-pr-links" }
      ]
    },
    "media-kit-builder-lite": {
      title: "Media Kit Builder (Lite)",
      description: "Assemble a lightweight press kit page: logo, product shots, boilerplate, founder bios",
      category: "Workflow",
      inputLabel: "Company Information",
      inputPlaceholder: "Enter company details, founder info, and key assets...",
      outputTitle: "Media Kit Template",
      sampleOutput: [
        "🏢 Company overview section",
        "👤 Founder bio templates",
        "📸 Asset download links",
        "📄 Boilerplate text",
        "📞 Media contact information"
      ],
      howToUse: [
        "Host the media kit on your website",
        "Include the link in all press outreach",
        "Update quarterly with new assets and information"
      ],
      faqs: [
        {
          question: "What assets should I include?",
          answer: "High-res logos, product shots, founder headshots, company timeline, and key facts."
        }
      ],
      relatedTools: [
        { title: "Boilerplate Refinery", slug: "boilerplate-refinery" },
        { title: "Press Release Structure Builder", slug: "press-release-structure-builder" }
      ]
    },
    "journalist-timezone-converter": {
      title: "Journalist Availability Timezone Converter",
      description: "Enter city list; get a friendly window to email without being intrusive",
      category: "Pitching",
      inputLabel: "Target Cities/Timezones",
      inputPlaceholder: "Enter journalist locations or target cities...",
      outputTitle: "Optimal Send Times",
      sampleOutput: [
        "🌅 NYC journalists: 9-11 AM EST (best response)",
        "🌍 London journalists: 10 AM - 12 PM GMT",
        "🌏 SF journalists: 8-10 AM PST"
      ],
      howToUse: [
        "Schedule your outreach during optimal windows",
        "Avoid early morning or late evening sends",
        "Consider deadline schedules for different beats"
      ],
      faqs: [
        {
          question: "When should I avoid sending emails?",
          answer: "Avoid weekends, holidays, and outside 8 AM - 6 PM in the journalist's timezone."
        }
      ],
      relatedTools: [
        { title: "Embargo & Timing Planner", slug: "embargo-timing-planner" },
        { title: "Follow-Up Cadence Builder", slug: "follow-up-cadence-builder" }
      ]
    },
    "compliance-disclosure-helper": {
      title: "Compliance & Disclosure Helper (Influencers)",
      description: "Quick checklist for ASA/FTC disclosures; suggested captions with tags",
      category: "Compliance",
      inputLabel: "Campaign Details",
      inputPlaceholder: "Describe your influencer campaign and partnership type...",
      outputTitle: "Compliance Guidelines",
      sampleOutput: [
        "✅ Required disclosure: #ad or #sponsored",
        "📝 Caption suggestion: 'Excited to partner with [Brand] #ad'",
        "⚖️ FTC compliance checklist included"
      ],
      howToUse: [
        "Review disclosure requirements with influencers",
        "Include compliance terms in contracts",
        "Monitor posts for proper disclosure"
      ],
      faqs: [
        {
          question: "What's the difference between #ad and #sponsored?",
          answer: "Both are acceptable. #ad is shorter and more commonly used, especially on Instagram."
        }
      ],
      relatedTools: [
        { title: "Influencer Brief Builder", slug: "influencer-brief-builder" },
        { title: "Rate Card Estimator", slug: "rate-card-estimator-lite" }
      ]
    },
    "influencer-brief-builder": {
      title: "Influencer Brief Builder",
      description: "Generate a clear brief (deliverables, messaging, usage rights, deadlines, do/don't)",
      category: "Influencer",
      inputLabel: "Campaign Requirements",
      inputPlaceholder: "Describe your campaign goals, deliverables, and key messages...",
      outputTitle: "Influencer Brief",
      sampleOutput: [
        "🎯 Campaign objectives and key messages",
        "📋 Deliverables: 2 Instagram posts, 3 stories",
        "📅 Timeline and deadlines",
        "✅ Do's and Don'ts list",
        "📄 Usage rights and licensing terms"
      ],
      howToUse: [
        "Send the brief before any agreement",
        "Use it as a reference during content review",
        "Include key points in your contract"
      ],
      faqs: [
        {
          question: "Should I include specific hashtags?",
          answer: "Suggest hashtags but allow flexibility for the influencer's authentic voice."
        }
      ],
      relatedTools: [
        { title: "Compliance & Disclosure Helper", slug: "compliance-disclosure-helper" },
        { title: "Hashtag & Angle Finder", slug: "hashtag-angle-finder" }
      ]
    },
    "rate-card-estimator-lite": {
      title: "Rate Card Estimator (Influencer Lite)",
      description: "Estimate ranges based on follower bands and platform benchmarks",
      category: "Influencer",
      inputLabel: "Influencer Details",
      inputPlaceholder: "Enter follower count, engagement rate, and platform...",
      outputTitle: "Rate Estimates",
      sampleOutput: [
        "📊 Instagram Post: $500-800 (10K followers)",
        "📹 Instagram Story: $200-300",
        "🎥 TikTok Video: $300-500",
        "📈 Engagement premium: +20%"
      ],
      howToUse: [
        "Use as starting point for negotiations",
        "Factor in industry and engagement quality",
        "Compare with your budget constraints"
      ],
      faqs: [
        {
          question: "What affects influencer rates?",
          answer: "Follower count, engagement rate, industry niche, content quality, and exclusivity requirements."
        }
      ],
      relatedTools: [
        { title: "Influencer Brief Builder", slug: "influencer-brief-builder" },
        { title: "Compliance & Disclosure Helper", slug: "compliance-disclosure-helper" }
      ]
    },
    "hashtag-angle-finder": {
      title: "Hashtag & Angle Finder (Campaign)",
      description: "Enter topic; get angle ideas + relevant hashtags by platform",
      category: "Influencer",
      inputLabel: "Campaign Topic",
      inputPlaceholder: "Enter your product, service, or campaign theme...",
      outputTitle: "Content Angles & Hashtags",
      sampleOutput: [
        "📱 Instagram: #TechLife #Innovation #Startup",
        "🎵 TikTok: #TechTok #StartupLife #Innovation",
        "💡 Angle ideas: Behind-the-scenes, Problem-solving, Day-in-the-life"
      ],
      howToUse: [
        "Share suggested hashtags with influencers",
        "Adapt angles for different creator styles",
        "Track hashtag performance across campaigns"
      ],
      faqs: [
        {
          question: "How many hashtags should influencers use?",
          answer: "Instagram: 5-10 strategic hashtags. TikTok: 3-5 trending hashtags. Quality over quantity."
        }
      ],
      relatedTools: [
        { title: "Influencer Brief Builder", slug: "influencer-brief-builder" },
        { title: "Rate Card Estimator", slug: "rate-card-estimator-lite" }
      ]
    },
    "crisis-holding-statement-generator": {
      title: "Crisis Holding Statement Generator",
      description: "Draft a short, neutral, timely statement with approval placeholders",
      category: "Workflow",
      inputLabel: "Crisis Details",
      inputPlaceholder: "Briefly describe the situation requiring a statement...",
      outputTitle: "Holding Statement Draft",
      sampleOutput: [
        "📄 'We are aware of the situation and are investigating thoroughly.'",
        "⏰ 'We will provide updates as more information becomes available.'",
        "🤝 'Our priority remains the safety and trust of our customers.'"
      ],
      howToUse: [
        "Customize the template for your specific situation",
        "Get legal and executive approval before publishing",
        "Prepare follow-up communications as facts emerge"
      ],
      faqs: [
        {
          question: "How quickly should I respond?",
          answer: "Aim for within 2-4 hours for major issues. A holding statement buys time for a fuller response."
        }
      ],
      relatedTools: [
        { title: "Quote Polisher for PR", slug: "quote-polisher-pr" },
        { title: "Boilerplate Refinery", slug: "boilerplate-refinery" }
      ]
    },
    "boilerplate-refinery": {
      title: "Boilerplate Refinery",
      description: "Paste company boilerplate; get a press-ready, concise, keyword-aware version",
      category: "Workflow",
      inputLabel: "Current Boilerplate",
      inputPlaceholder: "Paste your existing company description or boilerplate...",
      outputTitle: "Refined Boilerplate",
      sampleOutput: [
        "📝 Optimized length: 45 words (ideal for press releases)",
        "🎯 Key terms positioned strategically",
        "📈 SEO-friendly while remaining natural",
        "💼 Professional tone maintained"
      ],
      howToUse: [
        "Replace your current boilerplate in templates",
        "Use consistently across all press materials",
        "Update quarterly as your company evolves"
      ],
      faqs: [
        {
          question: "How long should a boilerplate be?",
          answer: "40-60 words is ideal for press releases. Have shorter (25 words) and longer (100 words) versions ready."
        }
      ],
      relatedTools: [
        { title: "Press Release Structure Builder", slug: "press-release-structure-builder" },
        { title: "Quote Polisher for PR", slug: "quote-polisher-pr" }
      ]
    },
    "media-ai-query-builder": {
      title: "Media AI Query Builder",
      description: "Wizard that outputs a 'saved search' recipe (filters/tags) to reproduce inside Media AI",
      category: "Workflow",
      inputLabel: "Search Requirements",
      inputPlaceholder: "Describe the type of journalists/outlets you want to find...",
      outputTitle: "Media AI Search Recipe",
      sampleOutput: [
        "🔍 Filters: Beat='Technology', Region='US', Outlet Type='Online'",
        "🏷️ Tags: #StartupCoverage #AIReporting #VentureCapital",
        "📊 Expected results: ~150 contacts"
      ],
      howToUse: [
        "Copy the filter settings",
        "Apply them in Media AI advanced search",
        "Save as a custom list for future campaigns"
      ],
      faqs: [
        {
          question: "Can I modify the search after applying?",
          answer: "Yes, use this as a starting point and refine based on your specific needs."
        }
      ],
      relatedTools: [
        { title: "List Segmenter (Lite)", slug: "list-segmenter-lite" },
        { title: "Beat & Outlet Matcher", slug: "beat-outlet-matcher" }
      ]
    },
    "pr-roi-snapshot-calculator": {
      title: "PR ROI Snapshot Calculator",
      description: "Input coverage metrics/traffic; estimate impact (reach, clicks, earned value proxy)",
      category: "Analytics",
      inputLabel: "Coverage Metrics",
      inputPlaceholder: "Enter your coverage details (outlets, estimated reach, traffic)...",
      outputTitle: "PR ROI Analysis",
      sampleOutput: [
        "📊 Total estimated reach: 2.3M impressions",
        "🔗 Website traffic driven: 1,250 visits",
        "💰 Earned media value: $15,400",
        "📈 Estimated conversion impact: 23 leads"
      ],
      howToUse: [
        "Track metrics for each major campaign",
        "Include in quarterly PR reports",
        "Use to justify PR budget and strategy"
      ],
      faqs: [
        {
          question: "How accurate is earned media value?",
          answer: "It's a directional metric based on ad rate equivalencies. Focus on traffic and lead quality for true ROI."
        }
      ],
      relatedTools: [
        { title: "Coverage Tracker Template", slug: "coverage-tracker-template" },
        { title: "UTM Builder for PR Links", slug: "utm-builder-pr-links" }
      ]
    }
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-4">
              {currentTool.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                    to={`/${tool.slug}`}
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
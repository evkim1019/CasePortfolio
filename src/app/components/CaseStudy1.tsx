import { ArrowLeft, Calendar, Users, Target, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";

export function CaseStudy1() {
  const navigate = useNavigate();

  // --- START CUSTOM CONTENT FOR CASE STUDY 1 ---

  // NOTE: You need to replace the generic image source with one that reflects enterprise AI management, whiteboarding, or flow charts.
  const heroImageSrc = "https://images.unsplash.com/photo-1555776269-e747c32b5b37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzAzMTEwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const caseStudy1Content = {
    // --- Project Details Grid (Placeholder updates) ---
    timeline: "1 year (Ongoing)", 
    team: "8 members (Core)",
    teamDetails: "2 Designers, 1 Researcher, 2 AI Scientists, 3 Engineers",
    role: "Lead UX Designer",
    roleDetails: "UX & Research Lead",
    impactMetric: "75%+ Onboarding Time Reduction",
    impactDetails: "Eliminated 3rd-party dependency",

    // --- Overview ---
    overviewParagraph1: "The core challenge was to transform a high-volume operational bottleneck into an efficient, self-service system. Healthcare providers were suffering massive operational strain: staff spent 4-5 hours daily on reactive appointment management, leading to patient hold times that peaked at 4.5 hours. While our team developed a powerful telephony AI Agent to automate over 80% of this volume, its adoption was critically slow.",
    overviewParagraph2: "The initial implementation required complex, code-like configuration by a 3rd party, resulting in 1-month implementation times and preventing customers from self-managing urgent errors. Our mission was to design a system that moved ownership from external IT experts to non-technical business managers, ensuring immediate deployment and continuous self-optimization.",
    overviewParagraph3: "This project required balancing the sophistication of AI logic with the simplicity needed for non-technical users, ensuring high data integrity, and solving a critical organizational dependency problem.",
    
    // --- Challenge ---
    challengeQuestion: `"How might we design the customization and lifecycle management of a complex AI Agent to be intuitive and reliable for non-technical office administrators, reducing time-to-value and eliminating dependence on costly third-party IT support?"`,
    issue1Title: "Knowledge Barrier",
    issue1Detail: `Configuration required technical scripting knowledge, inaccessible to the target persona. <span class="text-destructive">Resulted zero self-service customization attempts post-launch</span>.`,
    issue2Title: "Slow Time-to-Value",
    issue2Detail: `Reliance on third-party IT support created massive delays, <span class="text-destructive">implementation time averaged approx 1 month</span>.`,
    issue3Title: "Dependency & Risk",
    issue3Detail: `Customers could not monitor or troubleshoot AI Agent performance errors, requiring <span class="text-destructive">100% reliance on support team intervention and third-party coordination</span> for critical system updates.`,
    issue4Title: "Lack of Feedback Loop",
    issue4Detail: `No integrated tool to track the AI Agents' performance against business goals, <span class="text-destructive">administrators had no visibility into which customization rules were most effective</span>.`,

    // --- Research Insights (The content here is already perfect) ---

    // --- Design Process ---
    iaRedesignParagraph: "Based on organizational structure analysis and user needs, we restructured the system around a **Lifecycle Management** model, placing configuration within a broader loop of monitoring and optimization.",
    
    // IA Structure is now custom to the AI project:
    iaOldStructure: [
      "Technical Configuration Files (Code-Based)", 
      "Manual Deployment via 3rd Party", 
      "External Monitoring", 
      "No Formal Update Loop"
    ],
    iaNewStructure: [
      "Rules-Based Customization (Non-Technical)", 
      "Guided Onboarding & Deployment", 
      "Performance Dashboard (Outcome Metrics)", 
      "Optimization Recommendations"
    ],

    // --- Visual Design (General principles still apply, but focus is on Clarity, not contrast for test results) ---
    // Keep the Typography/Color/Interactive sections but adjust the prose.

    // --- Iterative Testing (Keep the structure, but ensure the flows are AI-focused) ---
    testingRound1: "Paper prototypes and low-fidelity wireframes to validate **Information Architecture for Lifecycle Management** and basic flows.",
    testingRound2: "Interactive prototypes testing **Rules-Based Engine Logic** and **Guided Onboarding** flows.",
    testingRound3: "High-fidelity prototypes with full visual design, including **Performance Dashboard** usability and feedback loop.",

    // --- Key Features (Must be replaced with AI-specific features) ---
    feature1Title: "Rules-Based Customization Engine",
    feature1Detail: "We transformed the technical interface into a visual UI control panel that uses **Rules-Based Logic** (e.g., IF [Condition] THEN [Action]) accessible via toggles and sliders, entirely eliminating the need for scripting knowledge.",
    feature1DetailsList: [
      "Simplified IF/THEN logic builder for non-technical users",
      "Visual Guardrails to prevent rule conflicts",
      "Customizable communication scripts and tone",
      "Real-time configuration preview"
    ],
    
    feature2Title: "Guided Onboarding & Deployment",
    feature2Detail: "Redesigned the implementation flow from a multi-week process to a **fast, self-service journey**. We leveraged **Smart Defaults** to allow immediate deployment, followed by guided, incremental customization.",
    feature2DetailsList: [
      "One-step start with smart default settings",
      "Clear status indicators for deployment health",
      "Checklist for regulatory and compliance steps",
      "Automated comparison of new vs. old configuration"
    ],

    feature3Title: "Proactive Management Dashboard",
    feature3Detail: "Designed a dashboard that provides a **closed-loop feedback system**. It tracks essential success criteria and, crucially, provides **Actionable Recommendations** that link directly back to the customization engine.",
    feature3DetailsList: [
      "Agent Performance Score (Success vs. Failure Rate)",
      "Suggested rule adjustments based on call data",
      "Historical trend charts for efficiency metrics",
      "Health checks for system errors and alerts"
    ],

    feature4Title: "Organizational Permissioning",
    feature4Detail: "Created a granular user management system that reflects fragmented ownership across customer organizations, ensuring different departments could manage only their respective AI instances safely.",
    feature4DetailsList: [
      "Threaded conversations by topic", // Replaced with:
      "Role-based access controls for specific rule sets",
      "Audit logs for all customization changes",
      "Delegation tools for temporary administrative access"
    ],
    
    // --- Results (Must be replaced with Case Study 1 data) ---
    resultMetric1: "75%+",
    resultMetric1Desc: "Reduction in Implementation Time",
    resultMetric1Detail: "(4 weeks → <1 week)",
    resultMetric2: "100%",
    resultMetric2Desc: "Customer Satisfaction Rate",
    resultMetric2Detail: "(Validated Configuration Experience)",
    resultMetric3: "2x",
    resultMetric3Desc: "Increase in Self-Service Customization",
    resultMetric3Detail: "(0 → 2 times/month)",
    
    // Operational Impact
    opImpact1: "Eliminated 3rd-party dependency for implementation and troubleshooting.",
    opImpact2: "Achieved the customer's target self-service customization frequency.",
    opImpact3: "Accelerated Time-to-Value, enabling faster ROI on AI investment.",
    opImpact4: "Reduced reliance on internal support for routine configuration changes.",

    // UX Metrics
    uxMetric1: "Task Success Rate: 35% → 95%", // Custom Metric
    uxMetric2: "Knowledge Barrier: Scripting $\to$ Logic Builder", // Custom Metric
    uxMetric3: "Error Rate: Reduced by 71% (prototype error rate on setup)",
    uxMetric4: "System Confidence Score: Increased from 5 to 9 (Likert Scale)", // Example new metric

    // --- Learnings (Must be replaced with Case Study 1 learnings) ---
    learning1Title: "Organizational UX is Product UX",
    learning1Detail: "The core problem was organizational (dependency and ownership), not aesthetic. The solution required designing the **information architecture to reflect the customer's organization**, not the internal technical structure.",
    learning2Title: "Simplicity Drives Enterprise Adoption",
    learning2Detail: "In enterprise AI, the fastest path to adoption is not power, but simplicity. Ruthless simplification of the configuration UI directly translates to reduced implementation cost and risk for the client.",
    learning3Title: "Measurable Design via the Data Loop",
    learning3Detail: "Framing the dashboard around **Actionable Recommendations** ensures the product drives measurable business outcomes (e.g., predicted no-show reduction) and provides administrators with the data they need to optimize their own results.",
    learning4Title: "Stakeholder Alignment Through Evidence",
    learning4Detail: "Shared findings from prototype testing video clips was powerful in quickly aligning Engineering and Data Science on the need for the Rules-Based Engine, saving months of development on the wrong solution.",
  };

  // --- END CUSTOM CONTENT FOR CASE STUDY 1 ---


  return (
    <div className="min-h-screen glass-page ">
      <Header />
      

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="mt-16 mb-6">
          <div className="inline-block mb-4 px-4 py-2 glass-chip rounded-full">
            UX Research & Design
          </div>
          <h1 className=" text-4xl md:text-5xl font-semibold mb-6">Agentic AI Customization and Lifecycle Optimization</h1>
          {/* <h4 className="text-foreground mb-2">Project Overview</h4> */}
          <p className="leading-relaxed mb-2">
            Healthcare providers were suffering massive operational strain. While majority of patient interaction is over the call, specially appointment management related calls are 80% of total call volume. Front staffs spend 4-5 hours daily on reactive appointment management, and this tasks are highly repetitive tasks to both staffs and patients. This call engagement becomes a bottle neck, it leads to the hold times to maximum 4.5 hours in peak holiday season.</p><p className="leading-relaxed">
            Our team developed a telephony AI Agent to automate over 80% of this volume. AI Agent will verify patient identity, understand the patient call intent and request, verify insurance eligibility, check appointment history to match rightful provider, and schedule or reschedule appointments. And furthermore, AI Agent can proactively reach out to patients regarding pre-requisite appointment instructions, appointment reminders, and follow-up surveys.
          </p>
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="text-muted-foreground" size={20} />
              <h4 className="text-foreground">Timeline</h4>
            </div>
            <p className="text-muted-foreground">1 year (Ongoing)</p>
            <p className="text-muted-foreground mt-2">Jan 2025 - Present</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <Users className="text-muted-foreground" size={20} />
              <h4 className="text-foreground">Team</h4>
            </div>
            <p className="text-muted-foreground">8 core members</p>
            <p className="text-muted-foreground mt-2">2 Designers, 2 Scientists, 2 Engineers, 1 Project Manager</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <Target className="text-muted-foreground" size={20} />
              <h4 className="text-foreground">My Role</h4>
            </div>
            <p className="text-muted-foreground">UX research</p>
            <p className="text-muted-foreground mt-2">AI Agent configuration experience design</p>
            <p className="text-muted-foreground mt-2">Application lifecycle design</p>
            <p className="text-muted-foreground mt-2">Data strategy and analysis</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <Award className="text-muted-foreground" size={20} />
              <h4 className="text-foreground">Impact</h4>
            </div>
            <p className="text-muted-foreground">85%+ implementation time reduction</p>
            <p className="text-muted-foreground mt-2">Eliminated 3rd-party dependency</p>
            <p className="text-muted-foreground mt-2">66% improved task completion rate</p>
            <p className="text-muted-foreground mt-2">3x user retention rate</p>
          </div>
        </div>

        {/* Hero Image */}
        
        <div className="grid md:grid-cols-2 gap-2 mb-16">
          
          <div className="bg-card border border-border overflow-hidden rounded-xl self-start">
            <img
            src="/src/imgs/caseStudy1/AI_Agent_config-master.png" 
            alt="AI Management Dashboard Interface"
            className="w-full block" 
          />
          </div>
          <div>
            <div className="bg-card border border-border overflow-hidden rounded-xl self-start">
              <img
              src="/src/imgs/caseStudy1/AI_Agent_implementation-master.png"
              alt="Auto generated AI Agent one-click implementation experience"
              className="w-full block"
            />
            </div>
            <div className="bg-card border border-border overflow-hidden rounded-xl self-start">
              <img
              src="/src/imgs/caseStudy1/AI_Agent_escalationPP.png"
              alt="Auto generated AI Agent one-click implementation experience"
              className="w-full block"
            />
            </div>
          </div>
          
      
        </div>
        

        
        

        {/* Content Sections */}
        <div className="space-y-20">
          {/* Overview
          <section>
            <h2 className="text-foreground mb-4">Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                {caseStudy1Content.overviewParagraph1}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {caseStudy1Content.overviewParagraph2}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy1Content.overviewParagraph3}
              </p>
            </div>
          </section> */}

          {/* Challenge */}
          <section>
            <h2 className="text-foreground mb-4">The Challenge</h2>
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-xl mb-6">
              <p className="leading-relaxed">
                "We actually don't know how to do any of them ourselves. We always have our vendor do it for us."
              </p>
            </div>

            
          </section>

          {/* Research Process */}
          <section>
            <h2 className="text-foreground mb-6">Research & Discovery</h2>
            
            <h3 className="text-foreground"> Methodology</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Mixed methods integrates quantitative data from prototype testing (task completion rates) with qualitative data from semi-structured interviews to gain a holistic understanding of user needs and pain points.
            </p>
            <div className="grid md:grid-cols-2 gap-2 mb-4">
              <div className="bg-card border border-border overflow-hidden rounded-xl self-start">
                <img
                  src="/src/imgs/caseStudy1/AI_Agent_implementation-journey-before+after.png"
                alt="User onboarding workflow before and after redesign"
                className="w-full block"
              />
              </div>
              <div className="bg-card border border-border overflow-hidden rounded-xl self-start">
                <img
                src="/src/imgs/caseStudy1/userjourney-painpoints.png"
                alt="User journey identifying pain points"
                className="w-full block"
              />
              </div>
            </div>

            <h3 className="text-foreground mb-2">Key Research Insights</h3>
            
            <div className="bg-primary/10 border border-primary/30 p-8 rounded-xl space-y-6">
              <div>
                <h4 className="text-foreground">1. Knowledge Barrier</h4>
                <p className="text-muted-foreground">
                  onfiguration required technical scripting knowledge, inaccessible to the target persona. Resulted<span className="text-destructive"> zero self-service customization attempts</span> post-launch.
                </p>
              </div>
              <div>
                <h4 className="text-foreground">2. Slow Time-to-Value</h4>
                <p className="text-muted-foreground">
                  Reliance on third-party IT support created massive delays, <span className="text-destructive"> implementation time averaged approx 1 month</span>.
                </p>
              </div>
              <div>
                <h4 className="text-foreground">3. Dependency & Risk</h4>
                <p className="text-muted-foreground">
                  Customers could not monitor or troubleshoot AI Agent performance errors, requiring <span className="text-destructive"> 100% reliance on support team intervention and third-party coordination</span> for critical system updates.
                </p>
              </div>
              <div>
                <h4 className="text-foreground">4. Lack of Feedback Loop</h4>
                <p className="text-muted-foreground">
                  No integrated tool to track the AI Agents' performance against business goals, <span className="text-destructive"> administrators had no visibility into which customization rules were most effective</span>.
                </p>
              </div>
            </div>
            <div className="mt-8">
              
            </div>
          </section>

          {/* Design Process */}
          <section>
            <h2 className="text-foreground mb-3">Design Process</h2>
            <div className="grid md:grid-cols-3 gap-2 mb-6">
              <div className="bg-card border-1 border-border p-6 rounded-xl">
                <h4 className="text-foreground">Logic Abstraction</h4>
                <p className="text-muted-foreground">
                  Replaced technical parameter fields with visual toggles and sliders, turning AI tuning into a direct, predictable action rather than a coded input.
                </p>
              </div>
              <div className="bg-card border-1 border-border p-6 rounded-xl">
                <h4 className="text-foreground">Error Guardrails</h4>
                <p className="text-muted-foreground">
                  Implemented immediate visual feedback and boundary conditions to prevent users from creating configuration states that would fail the AI Agent.
                </p>
              </div>
              <div className="bg-card border-1 border-border p-6 rounded-xl">
                <h4 className="text-foreground">Guided management</h4>
                <p className="text-muted-foreground">
                  Simplify steps by using default values to reduce cognitive load and provide clear next steps to guide users through complex processes and management.
                </p>
              </div>
            </div>
              
            <div className="grid md:grid-cols-4 gap-2 mb-2">
              <div className="bg-card border border-border overflow-hidden rounded-xl h-auto self-start">
                <img
                src="/src/imgs/caseStudy1/Agent-as-service%20whiteboard.png"
                alt="Whiteboarding session capturing guardrails for AI Agent customization"
                className="w-full block"
              />
              </div>
              <div className="bg-card border border-border overflow-hidden rounded-xl h-auto self-start">
                <img
                src="/src/imgs/caseStudy1/AI_Agent_architecture%20(1).png"
                alt="AI Agent build structure and customization schema"
                className="w-full block"
              />
              </div>
              <div className="bg-card border border-border overflow-hidden rounded-xl h-auto self-start">
                <img
                src="/src/imgs/caseStudy1/Whiteboard_onboarding.png"
                alt="Whiteboarding session capturing the self-service configuration flow"
                className="w-full block"
              />
              </div>
              <div className="bg-card border border-border overflow-hidden rounded-xl h-auto self-start">
                <img
                src="/src/imgs/caseStudy1/AI_Agent_evaluation.png"
                alt="AI Agent evaluation metrics and feedback loop diagram"
                className="w-full block"
              />
              </div>
            </div>
            
            
            <div className="bg-card border border-border p-8 rounded-xl mb-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-foreground mb-2">Before</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li key="oldStructure-item-1">• Self exploratory for the service onboarding</li>
                    <li key="oldStructure-item-2">• Code and script based technical configuration</li>
                    <li key="oldStructure-item-3">• 3rd party communication for configuration and deployment</li>
                    <li key="oldStructure-item-4">• External support for monitoring updates and analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-foreground mb-2">After</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li key="newStructure-item-1">• Flexible guided onboarding</li>
                    <li key="newStructure-item-2">• Non-technical rule-based customization</li>
                    <li key="newStructure-item-3">• Automatic configuration and implementation</li>
                    <li key="newStructure-item-4">• Performance dashboard and one-click optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-foreground mt-6">Before & After AI Agent Customization</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Transitioned from a complex, code-like prompt focused technical configuration interface to an intuitive, rules-based customization with default value provided experience that empowers non-technical users to manage and optimize their AI Agents independently.
            </p>
            <div className="grid md:grid-cols-3 gap-2 mb-2">
              <div className="bg-card border border-border overflow-hidden rounded-xl h-auto self-start">
                <img
                src="/src/imgs/caseStudy1/AI_Agent_manual_config.png"
                alt="Before: AI Agent configuration interface showing detailed technical parameter fields"
                className="w-full block"
                />  
                <div className="px-4 py-1 flex"><p className="">Before: AI Agent configuration with detailed technical parameter fields</p></div>
              </div>
              <div className="bg-card border border-border overflow-hidden rounded-xl h-auto self-start">
                <img
                src="/src/imgs/caseStudy1/AI_Agent_config-before.png"
                alt="Intermediate: Testing AI agent configuration simplified prompt generate experience in low fidelity"
                className="w-full block"
                />  
                <div className="px-4 py-1 flex"><p className="">Testing AI agent configuration simplified prompt generate experience in low fidelity</p></div>
              </div>
              <div className="bg-card border border-border overflow-hidden rounded-xl h-auto self-start">
                <img
                src="/src/imgs/caseStudy1/AI_Agent_customization-section.png"
                alt="Intermediate: Testing AI agent configuration simplified prompt generate experience"
                className="w-full block"
                />  
                <div className="px-4 py-1 flex"><p className="">After: Non-technical AI agent customization experience</p></div>
              </div>
            </div>

            <h3 className="text-foreground mt-6 mb-2">Before & After AI Agent Implementation Workflow</h3>
            
            <div className="mb-2">
              <div className="bg-card border border-border overflow-hidden rounded-xl h-auto self-start">
                <img
                src="/src/imgs/caseStudy1/AI_Agent_implementation-journey-before+after.png"
                alt="Top flow chart of AI Agent implementation journey before redesign, bottom after redesign"
                className="w-full block"
                />  
                <div className="px-4 py-1 flex"><p className="">Top flow chart of AI Agent implementation journey that leads redirecting to a different service application for manual analysis and test, which takes minimum 12 weeks. Bottom flow chart of AI Agemt implementation journey that automatically analyzing the Flow algorithm and generate updated one to review and deploy with one click without leaving the application.</p></div>
              </div>
              
            </div>
          </section>

          {/* Key Features (Replaced with AI-Specific Features) */}
          <section>
            <h2 className="text-foreground mb-3">Key Features Delivered</h2>

            <div className="space-y-2">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20">
                <h3 className="text-foreground">Rules-Based Customization Engine</h3>
                <p className="text-muted-foreground mb-4">
                  Transformed the technical interface into a visual UI control panel that uses rules-based logic (e.g., IF [Condition] THEN [Action]) accessible via toggles and clicks, entirely eliminating the need for scripting prompts.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                  <div key="keyFeaturesDelivered-item1-1">• Simplified UI interaction for complicated customization</div>
                  <div key="keyFeaturesDelivered-item1-2">• Visual Guardrails to prevent rule conflicts</div>
                  <div key="keyFeaturesDelivered-item1-3">• Real-time configuration preview with different scenarios</div>
                </div>
              </div>
              

              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-8 rounded-xl border border-green-500/20">
                <h3 className="text-foreground">Guided Onboarding & Deployment</h3>
                <p className="text-muted-foreground mb-4">
                  Redesigned the configuration and implementation flow from a minimum 12 weeks process to 1 or 2 weeks of fast, self-service journey. Also, leveraged default values to allow immediate deployment, followed by guided, incremental customization.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                  <div key="keyFeaturesDelivered-item2-1">• One-step start with smart default settings</div>
                  <div key="keyFeaturesDelivered-item2-2">• Clear status indicators for deployment health</div>
                  <div key="keyFeaturesDelivered-item2-3">• Automated comparison of new vs. old configuration</div>
                </div>
              </div>
              

              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-8 rounded-xl border border-purple-500/20">
                <h3 className="text-foreground">Automatic analysis and optiomization</h3>
                <p className="text-muted-foreground mb-4">
                  Designed a dashboard that provides a closed-loop performance feedback system with easy to digest analysis report. It also provides actionable recommendations that link directly back to the AI Agent customization.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                  <div key="keyFeaturesDelivered-item3-1">• Easy to digest analysis dashboard and report</div>
                  <div key="keyFeaturesDelivered-item3-2">• AI Agent performance monitoring and feedback system</div>
                  <div key="keyFeaturesDelivered-item3-3">• Automatically appliable customization recommendations</div>
                </div>
              </div>
              

              <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-8 rounded-xl border border-amber-500/20">
                <h3 className="text-foreground">Organizational Collaboration</h3>
                <p className="text-muted-foreground mb-4">
                  Created a granular task forwarding system to handle fragmented ownership across customer organizations, ensuring to unblock their tasks to complete while the required information is safely obtained for the accurate performance.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                  <div key="keyFeaturesDelivered-item4-1">• Granular task forwarding system</div>
                  <div key="keyFeaturesDelivered-item4-2">• Reflects fragmented ownership across organizations</div>
                  <div key="keyFeaturesDelivered-item4-3">• Unblock task to complete for individual user</div>
                </div>
              </div>
            </div>
          </section>

          {/* Results (Replaced with Case Study 1 data) */}
          <section>
            <h2 className="text-foreground mb-3">Results & Impact</h2>

            <div className="bg-gradient-to-br from-primary to-primary/60 text-primary-foreground p-10 rounded-2xl mb-4">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl mb-2 font-bold">85%+</div>
                  <div className="text-primary-foreground/90 mb-1">Faster Time-to-Value for Implementations</div>
                  <div className="text-primary-foreground/80">12+ weeks {'→'} under 2 weeks</div>
                </div>
                <div>
                  <div className="text-5xl mb-2 font-bold">3x/mo</div>
                  <div className="text-primary-foreground/90 mb-1">Increase in Self-Service AI Configuration</div>
                  <div className="text-primary-foreground/80">Eliminated 3rd-party dependency</div>
                </div>
                <div>
                  <div className="text-5xl mb-2 font-bold">Zero</div>
                  <div className="text-primary-foreground/90 mb-1">Onboarding process abandonment rate</div>
                  <div className="text-primary-foreground/80">60%+ dropo-ff {'→'} zero</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded-r-xl">
                <h4 className="text-foreground mb-3">Operational Impact</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Eliminated 3rd-party dependency for implementation and maintenance.</li>
                  <li>• Accelerated Time-to-Value, enabling faster ROI on AI Agent configuration.</li>
                  <li>• Created natural lifecycle routine for AI Agent analysis and optimization.</li>
                </ul>
              </div>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                <h4 className="text-foreground mb-3">User Experience Metrics</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Task completion rate: 40% {'→'} 100%</li>
                  <li>• Onboarding friction: 60% drop-off {'→'} Zero</li>
                  <li>• Feature engagement: 0 {'→'} 3x monthly per user</li>
                </ul>
              </div>
            </div>

          </section>

        </div>

        {/* Back Button */}
        <div className="mt-20 pt-12 max-w-5xl mx-auto py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 hover:text-foreground transition-colors glass-button px-4 py-2 rounded-full text-primary-foreground"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
}
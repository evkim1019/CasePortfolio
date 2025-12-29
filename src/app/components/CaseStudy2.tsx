import { ArrowLeft, Calendar, Users, Target, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";

export function CaseStudy2() { 
  const navigate = useNavigate();

  // --- START CUSTOM CONTENT FOR CASE STUDY 2 ---

  const heroImageSrc = "https://images.unsplash.com/photo-1542838183-f3684a0c8681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCaW9waGFybWElMjBEaXNjb3ZlcnklMjBEYXNoYm9hcmQlMjBEZXNpZ258ZW58MHx8fHwxNzAzMTEwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const caseStudy2Content = {
    // --- Project Details Grid ---
    timeline: "9 months (Discovery to Component Handoff)", 
    team: "12 members",
    teamDetails: "2 Designers, 1 Research Lead, 2 Data Scientists, 7 Engineers",
    role: "Lead UX Researcher and Product Designer",
    roleDetails: "Data Visualization Specialist, Design Systems Lead",
    impactMetric: "50% Faster Navigation",
    impactDetails: "Validated via prototype testing to key data points",

    // --- Overview ---
    overviewParagraph1: "The core challenge in Biopharma R&D was workflow fragmentation. Molecular candidate review required computational scientists and bench scientists to move between four different, siloed platforms. This multi-platform workflow wasted critical time and introduced high risk of data error, directly stalling the high-stakes, multi-million dollar process of molecular candidate review.",
    overviewParagraph2: "My role was to lead the design of a unified, 'One-Stop' platform for molecular candidate review. The primary goal was to resolve the data integrity and accessibility gaps between two distinct user groups whose workflow and data needs were fundamentally different.",
    overviewParagraph3: "The design needed to reduce the average review cycle time by $20\%$ and ensure shared data integrity/accuracy between specialized teams, requiring a systematic approach to Information Architecture and modular data visualization.",
    
    // --- Challenge ---
    challengeQuestion: `"How might we design a single platform that unites highly dense, customizable computational data with actionable, visual summaries, reducing cognitive load and ensuring data integrity across two fundamentally different scientific user personas?"`,
    issue1Title: "Platform Fragmentation",
    issue1Detail: `The molecular review process required moving between 4 different tools, causing frequent data transcription errors and time loss. <span class="text-destructive">Average review cycle was $20\%$ longer than target.</span>`,
    issue2Title: "Divergent Data Needs",
    issue2Detail: `Computational Scientists (Computational Scientists) needed **high-density, filterable tables**, while Bench Scientists (Bench Scientists) required **high-level visual summaries** to drive immediate physical experimentation. One-size-fits-all was rejected.`,
    issue3Title: "Data Integrity & Trust",
    issue3Detail: `Lack of a single source of truth created distrust in the data. Bench Scientists teams often had to cross-validate results, <span class="text-destructive">leading to parallel manual data checks.</span>`,
    issue4Title: "Design Systems Complexity",
    issue4Detail: `The platform required a modular, scalable system of **Data Widgets** to handle diverse data types and ensure component reuse across the entire R&D portfolio.`,

    // --- Research Insights ---
    insight1Title: "Dual View is Essential for Utility",
    insight1Detail: "Generative research conclusively proved that a single view compromised utility for both personas. The solution required a **Dual View Design** where users could switch between data-dense grids and visual-summary dashboards, maintaining the same underlying data set.",
    insight2Title: "Density vs. Actionability",
    insight2Detail: "Bench Scientists prioritize **Actionability**—is the molecule safe to test next week? Comp Scientists prioritize **Density**—can I filter on 15 parameters simultaneously? This required distinct primary layouts.",
    insight3Title: "Semantic Color Coding is Critical",
    insight3Detail: "In data visualization, color is not aesthetic; it's semantic. Strict adherence to WCAG AA for color contrast and a consistent, learned color code (e.g., green for 'High Confidence') was essential for rapid, high-stakes decision-making.",
    insight4Title: "Collaboration is a Data Barrier",
    insight4Detail: "The inability to quickly annotate and share specific data states (e.g., 'Filter X applied, see row 4') was the main collaborative barrier. The platform needed state management for sharing. ",

    // --- Design Process ---
    iaRedesignParagraph: "The Information Architecture was designed around a **Systematic Review Funnel**, moving users logically from high-level molecular status down to granular, comparative data. The key was creating a master component library of Data Widgets.",
    
    // IA Structure is now custom to the AI project:
    iaOldStructure: [
      "Fragmented, tool-specific IA", 
      "Siloed Data Views (Table vs. Chart)", 
      "Manual Data Handoffs", 
      "No Centralized Review State"
    ],
    iaNewStructure: [
      "Unified Review Funnel IA", 
      "**Dual View Design** (Density vs. Visual)", 
      "Modular Data Widget System", 
      "Shared Review State Management"
    ],

    // --- Key Features (Focus on Dual-View and Modularity) ---
    feature1Title: "Dual View Design: Data Density vs. Actionability",
    feature1Detail: "Implemented a seamless toggle between two dedicated views: **Grid View** (for Comp Scientists, prioritizing high-density, filterable tables) and **Dashboard View** (for Bench Scientists, prioritizing visual summaries and high-level KPIs).",
    feature1DetailsList: [
      "Grid View: AG Grid-like tables with 15+ filter parameters",
      "Dashboard View: Visual data summaries (treemaps, scatter plots)",
      "Instant synchronization between views (single source of truth)",
      "Reduced cognitive load by abstracting complexity based on role"
    ],
    
    feature2Title: "Modular Data Widget System",
    feature2Detail: "Designed the platform using a library of reusable, modular data components (Widgets). This strategic choice maximized consistency and ensured the platform could scale to support new data types without requiring full redesigns.",
    feature2DetailsList: [
      "Atomic design methodology for data components",
      "Standardized component APIs for engineering reuse",
      "Semantic color standards applied across all visualizations",
      "Projected $30\%$ reduction in front-end development time"
    ],

    feature3Title: "Data Integrity & Accessibility (WCAG)",
    feature3Detail: "Ensured all visualization components adhered to WCAG AA standards, particularly for semantic color contrast and screen-reader compatibility for complex, interactive tables, vital for high-stakes decision-making and compliance.",
    feature3DetailsList: [
      "WCAG AA compliance for color contrast in data visualizations",
      "Keyboard navigation and screen-reader support for data grids",
      "Clear visual hierarchy to manage information density",
      "Unified error and alert system for data validation issues"
    ],

    feature4Title: "Collaborative Review State",
    feature4Detail: "Implemented a feature allowing users to save and share their current review state (including active filters, applied rules, and annotations). This eliminated the collaborative barrier and ensured shared data integrity during handoffs.",
    feature4DetailsList: [
      "One-click sharing of the current dashboard/grid state",
      "Embedded annotation and commenting tools",
      "Version history for comparative analysis",
      "Real-time co-viewing indication"
    ],
    
    // --- Results (Focus on Research and Validation) ---
    resultMetric1: "100%",
    resultMetric1Desc: "User Satisfaction Score",
    resultMetric1Detail: "(Information Architecture, post-design validation)",
    resultMetric2: "50%",
    resultMetric2Desc: "Faster Navigation Time",
    resultMetric2Detail: "(Validated via prototype testing to key data points)",
    resultMetric3: "100%",
    resultMetric3Desc: "Accuracy of Interpretation",
    resultMetric3Detail: "(Validated for most complex computed results)",
    
    // Operational Impact
    opImpact1: "Projected $20\%$ reduction in average molecular review cycle time.",
    opImpact2: "Achieved internal stakeholder alignment on the necessary Dual View design strategy.",
    opImpact3: "Ensured design system modularity resulted in projected $30\%$ reduction in front-end development time.",
    opImpact4: "Resolved the core data integrity/accuracy conflict between Computational Scientists and Bench Scientists teams.",

    // UX Metrics
    uxMetric1: "Navigation Time: $45s \to 22s$ (to reach key data point)", 
    uxMetric2: "Confidence Score: Increased from 5 to 9 (Likert Scale)", 
    uxMetric3: "Error Rate: Reduced (Prototype Error Rate on Data Lookup)",
    uxMetric4: "Adherence to WCAG AA for all semantic color coding.",

    // --- Learnings ---
    learning1Title: "Advocating for Dual Utility",
    learning1Detail: "This project reinforced that in domains with fundamentally divergent user needs, advocating for a **Dual View Design** is essential. A single, compromise solution would have led to a costly failure for half the user base. Research was the tool of advocacy.",
    learning2Title: "Design Systems Drive R&D Scalability",
    learning2Detail: "Designing for component modularity (Data Widgets) was not just about UI consistency; it was a business strategy. It ensured the platform could rapidly onboard new data types from R&D pipelines, future-proofing the platform's growth.",
    learning3Title: "Validity Testing in High-Stakes Domains",
    learning3Detail: "Early **validity testing** (checking if users *accurately interpreted* complex data visualizations, not just navigated to them) was crucial. In high-stakes R&D, mere usability is insufficient; accuracy is the primary metric.",
    learning4Title: "Research Synthesis as Stakeholder Alignment",
    learning4Detail: "The **Affinity Map** and key insights summary served as the most effective artifact to align the Data Science, Engineering, and Product teams on the Dual View strategy, preventing costly development of the wrong solution.",
  };

  // --- END CUSTOM CONTENT FOR CASE STUDY 2 ---


  return (
    <div className="min-h-screen glass-page ">
      <Header />
      

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="mt-16 mb-6">
          <div className="inline-block mb-4 px-4 py-2 glass-chip rounded-full">
            Data Visualization & R&D Workflow
          </div>
          <h1 className=" text-4xl md:text-5xl font-semibold mb-6">Data Visualization and Analysis for Human-AI Collaboration</h1>
          <p className="leading-relaxed mb-2">
            Biopharma R&D processes are severely fractured. Collaborators (Computational Biologists, Protein Engineers, Project Managers, etc.) relied on 7+ different, incompatible legacy software platforms (e.g., PyMOL, SnapGene, MatLab) to handle molecular candidate data. This fragmentation created massive friction: data verification errors, wasted resources, and non-standardized communication, directly stalling the high-stakes drug discovery process.
          </p><p className="leading-relaxed">
            The team designed and developped a SaaS platform designed to be a one-stop, holistic, and AI-powered workflow hub that resolves data integrity issues and workflow fragmentation between Computational Scientists and Bench Scientists. My role was to lead the UX research and product design of the platform's core data visualization and analysis features, ensuring they met the divergent needs of both user groups while maintaining data accuracy and integrity.
          </p>
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="text-muted-foreground" size={20} />
              <h4 className="text-foreground">Timeline</h4>
            </div>
            <p className="text-muted-foreground">10 months</p>
            <p className="text-muted-foreground mt-1">Mar 2024 - Jan 2025</p>
          </div>
          
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Target className="text-muted-foreground" size={20} />
              <h4 className="text-foreground">My Role</h4>
            </div>
            <p className="text-muted-foreground">Lead generated candidate review UX design</p>
            <p className="text-muted-foreground mt-1">UX research, Data visualization</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Award className="text-muted-foreground" size={20} />
              <h4 className="text-foreground">Impact</h4>
            </div>
            <p className="text-muted-foreground">50% faster top candidate validation</p>
            <p className="text-muted-foreground mt-1">Created virtual wish concept to tangible collection and library feature</p>
          </div>
        </div>

        {/* Hero Image */}
        {/* <div className="relative h-[500px] rounded-2xl overflow-hidden mb-16 glass-card border border-white/10">
          <img
            src={heroImageSrc}
            alt="Saas Platform generated candidate review experience prototype"
            className="w-full h-full object-cover"
          />
        </div> */}
        <div className="grid md:grid-cols-2 gap-2 mb-2 ">
          <div className="bg-card border border-border overflow-hidden rounded-xl self-start">
            <img
            src="/src/imgs/CaseStudy2/Hodgkin-newExperiment-selectRecipe(1_4).png"
            alt=""
            className="w-full block"
          />
          </div>
          <div className="bg-card border border-border overflow-hidden rounded-xl self-start">
            <img
            src="/src/imgs/CaseStudy2/Hodgkin-newExperiment-selectTargetchain(2_4).png"
            alt=""
            className="w-full block"
          />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-2 mb-16">
          <div className="bg-card border border-border overflow-hidden rounded-xl self-start">
            <img
            src="/src/imgs/CaseStudy2/Hodgkin-newExperiment-hotspotselection(3_4).png"
            alt=""
            className="w-full block"
          />
          </div>
          <div className="bg-card border border-border overflow-hidden rounded-xl self-start">
            <img
            src="/src/imgs/CaseStudy2/Hodgkin-newExperiment-CDRlengthoption(4_4).png"
            alt=""
            className="w-full block"
          />
          </div>
        </div>
        

        {/* Content Sections */}
        <div className="space-y-20">

          {/* Challenge */}
          <section>
            <h2 className="text-foreground mb-4">The Challenge</h2>
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-xl mb-6">
              <p className="leading-relaxed">
                How to design a single platform that unites highly dense, customizable computational data with actionable, visual summaries, reducing cognitive load and ensuring data integrity across multiple fundamentally different scientific user personas?
              </p>
            </div>
          </section>

          {/* Research Process */}
          <section>
            <h2 className="text-foreground mb-6">Research & Requirements</h2>
            
            <h3 className="text-foreground">Methodology: Generative Research & Dual Persona Segmentation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I planed and facilitated contextual interviews and data-specific prototype sessions to capture the divergent needs of the two core personas: Computational Scientists and Bench Scientists.
            </p>

            <div className="space-y-8 mb-10">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-foreground mb-3">User Segmentation</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Computational Scientists Persona: Prioritized Data Density, Customization, and Filtering. Needs to interrogate complex, computed results across dozens of variables.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Bench Scientists Persona: Prioritized Actionability, Collaboration, and Visual Summary. Needs quick answers to 'go/no-go' questions for physical lab work requests.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-foreground mb-2">Key Research Insights</h3>
            <div className="bg-primary/10 border border-primary/30 p-8 rounded-xl space-y-6">
              <div>
                <h4 className="text-foreground">1. Dual View Design</h4>
                <p className="text-muted-foreground">
                  The core insight: Computational Scientists required highly filterable, dense tables (AG Grid-like) while Bench Scientists needed immediate visual data summaries. A single, compromise view was rejected by both groups. The solution required a dual View Designallowing seamless toggling between the two, maintaining a single source of truth.
                </p>
              </div>
              <div>
                <h4 className="text-foreground">2. Data Sharing Must Preserve Context</h4>
                <p className="text-muted-foreground">
                  Both scientists confirmed collaboration failed when they share data without context. The platform needed to share the full state (filters, zoom, annotations) of the data view to maintain integrity during the data handoffs.
                </p>
              </div>
              <div>
                <h4 className="text-foreground">3. Flexible project direction is essential</h4>
                <p className="text-muted-foreground">
                  For Bench Scientists, the ability to collect and organize molecular candidates into flexible, user-defined projects was ciritical as they confirmed that interesting sets of data can be bases of new projects or findings and become new areas of exploration. 
                </p>
              </div>
              <div>
                <h4 className="text-foreground">4. Transparent AI logic</h4>
                <p className="text-muted-foreground">
                  Computational Scientists and Bench Scientists expressed the need for transparent AI logic behind candidate recommendations to build trust in the system. The platform needed to clearly communicate how AI-derived insights were generated from raw data.
                </p>
              </div>
            </div>
          </section>

          {/* Design Process */}
          <section>
            <h2 className="text-foreground mb-3">Designing the One-Stop platform with complex data visualization</h2>


            <div className="grid md:grid-cols-2 gap-2 mb-2">
              <div className="bg-card border-1 border-border p-6 rounded-xl">
                <h4 className="text-foreground">Computational Scientists: Grid View (Density)</h4>
                <p className="text-muted-foreground">
                  Highly customizable data tables (like AG Grid) allowing users to filter on 15+ columns, save custom views, and interrogate raw data—prioritizing density and control. </p>
              </div>
              <div className="bg-card border-1 border-border p-6 rounded-xl">
                <h4 className="text-foreground">Bench Scientists: Dashboard View (Actionability)</h4>
                <p className="text-muted-foreground">
                  Visual summaries using scatter plots, sequence heatmap, and simple bar charts that immediately highlight molecular status and next-step actions—prioritizing cognitive ease and speed.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-2 mb-4">
              <div className="bg-card border border-border overflow-hidden rounded-xl self-start">
                <img
                src="src/imgs/CaseStudy2/Hodgkin-result-table+filter(2).png"
                alt="Computational Scientist data grid view with filters"
                className="w-full block"
              />
              </div>
              <div className="bg-card border border-border overflow-hidden rounded-xl self-start">
                <img
                src="src/imgs/CaseStudy2/Hodgkin-result-dataVisual.png"
                alt="Bench Scientist dashboard view with visual summaries"
                className="w-full block"
              />
              </div>

            <div className="bg-card border border-border overflow-hidden rounded-xl self-start">
                <img
                src="src/imgs/CaseStudy2/Hodgkin-result-wetLabCollab(2).png"
                alt="Wet Lab Scientist collaborative review state sharing"
                className="w-full block"
              />
              </div>
          
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-foreground mb-2">Key Features Delivered</h2>

            <div className="space-y-2">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20">
                <h3 className="text-foreground">Dual View Design: Data Density vs. Actionability</h3>
                <p className="text-muted-foreground mb-4">
                  Implemented a seamless toggle between two dedicated views: grid view for Computational Scientists, prioritizing high-density, filterable tables. And result data view for Bench Scientists, prioritizing data visualization and detailed result candidateinsights to review.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                  <div key="keyFeaturesDelivered-item1-1">• Grid View: AG Grid-like tables with 15+ filter parameters</div>
                  <div key="keyFeaturesDelivered-item1-2">• Selected result View: Visual data summaries (sequence heatmap, scatter plots)</div>
                  
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-8 rounded-xl border border-green-500/20">
                <h3 className="text-foreground">Flexible collections and library design</h3>
                <p className="text-muted-foreground mb-4">
                  Designed the collections and library feature to allow bench scientists to create flexible, user-defined projects for organizing molecular candidates, for future or next exploration and discovery.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                  <div key="keyFeaturesDelivered-item2-1">• User-defined collections for molecular candidates</div>
                  <div key="keyFeaturesDelivered-item2-2">• Easy addition/removal of candidates to/from collections</div>
                  <div key="keyFeaturesDelivered-item2-3">• Intuitive library interface for browsing and managing collections</div>
                </div>
              </div>
            </div>
          </section>

          {/* Results (Focus on Research and Validation) */}
          <section>
            <h2 className="text-foreground mb-3">Outcomes & Reflection</h2>

            <div className="bg-gradient-to-br from-primary to-primary/60 text-primary-foreground p-10 rounded-2xl mb-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Metric 1: Adoption */}
                <div>
                  <div className="text-5xl font-bold mb-2">12+</div>
                  <div className="text-primary-foreground/90 font-medium mb-1">Enterprise Adoptions</div>
                  <div className="text-primary-foreground/80 text-sm">Post-private launch ({'<'} 6 months)</div>
                </div>

                {/* Metric 2: Efficiency */}
                <div>
                  <div className="text-5xl font-bold mb-2">90%</div>
                  <div className="text-primary-foreground/90 font-medium mb-1">Time Reduction</div>
                  <div className="text-primary-foreground/80 text-sm">In clinical documentation workflows</div>
                </div>

                {/* Metric 3: Scale */}
                <div>
                  <div className="text-5xl font-bold mb-2">6+</div>
                  <div className="text-primary-foreground/90 font-medium mb-1">Automated "Recipes"</div>
                  <div className="text-primary-foreground/80 text-sm">Accelerating R&D drug discovery</div>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
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
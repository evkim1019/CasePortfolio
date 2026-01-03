import { ArrowLeft, Calendar, Users, Target, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";

export function CaseStudy3() { // Renamed component for clarity
  const navigate = useNavigate();

  // --- START CUSTOM CONTENT FOR CASE STUDY 3 ---

  // NOTE: Image should reflect the mobile interface in a clinical setting, or a side-by-side comparison of the "Modern" vs. "Textbook-Familiar" designs.
  const heroImageSrc = "https://images.unsplash.com/photo-1587355760421-b9de3226a046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB1c2luZyUyMG1vYmlsZSUyMGFwcGxpY2F0aW9uJTIwaW4lMjBjbGluaWN8ZW58MHx8fHwxNzYzODk0NDAw&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const caseStudy3Content = {
    // --- Project Details Grid (Placeholder updates) ---
    timeline: "14 months (Research to Launch)", 
    team: "20 members",
    teamDetails: "3 Designers, 1 Research Lead, 1 Accessibility Specialist, 15 Engineers",
    role: "UX Designer",
    roleDetails: "Primary Design & Accessibility Lead",
    impactMetric: "85% Trust Score",
    impactDetails: "A/B Tested Clinical Utility",

    // --- Overview ---
    overviewParagraph1: "The application, a digital reference tool for mobile physicians, successfully surpassed $100,000$ downloads, but usage data showed a steep drop-off after the first month. The initial design was visually modern but failed to meet the functional need for high-stakes clinical utility.",
    overviewParagraph2: "Physicians reported low trust in the stylized visualizations, leading to parallel use of physical textbooks and, critically, low sustained adoption. Our mission was to conduct a research-driven redesign to achieve **sustained clinical utility** and build immediate trust in the accuracy and authority of the digital content.",
    overviewParagraph3: "The project required balancing a visually modern brand identity with the need to adhere to deeply ingrained professional conventions (the 'Textbook-Familiar' look) and ensuring WCAG AA accessibility standards for use in variable light conditions (e.g., OR, dimmed rooms).",
    
    // --- Challenge ---
    challengeQuestion: `"How might we redesign the mobile application to prioritize clinical utility and build immediate trust by adhering to deeply ingrained professional conventions, while maintaining accessibility and efficiency in a high-stakes clinical workflow?"`,
    issue1Title: "Low Clinical Trust",
    issue1Detail: `The stylized, modern data visualizations and diagrams were perceived as less authoritative, resulting in physicians opting for physical textbooks. <span class="text-destructive">Trust/Confidence rating was $35\%$ on initial testing.</span>`,
    issue2Title: "Drop-Off in Sustained Use",
    issue2Detail: `Usage analytics showed high downloads but a **low Stickiness Ratio (DAU/MAU)**, indicating the app was not becoming a reliable daily reference tool in the physician workflow.`,
    issue3Title: "Accessibility Gaps in Clinical Settings",
    issue3Detail: `The app failed WCAG 2.1 standards, especially in color contrast, making it difficult to use under the variable, often low-light, conditions found in clinical environments like operating rooms.`,
    issue4Title: "Information Density vs. Mobile Screen",
    issue4Detail: `Complex reference diagrams needed to be highly information-dense, yet legible and scannable on smaller mobile screens without overwhelming the user.`,

    // --- Research Insights ---
    insight1Title: "Convention is Authority",
    insight1Detail: "Generative research revealed that physicians' trust is directly tied to visual convention. They rely on the color coding, layout, and visual language they learned from physical textbooks 10-20 years prior. The modern design was rejected.",
    insight2Title: "The Need for Speed and Depth",
    insight2Detail: "The mobile app needed to facilitate both **quick reference (fast searches)** and **deep dive analysis (detailed diagrams and notes)** within the same session. Session depth was a key utility metric.",
    insight3Title: "Aesthetics are Secondary to Accuracy",
    insight3Detail: "Aesthetics (a 'cool' app) were completely secondary to functional accuracy and legibility. Any visual change that compromised immediate information recognition was considered a failure.",
    insight4Title: "Single-Handed Use is Essential",
    insight4Detail: "Contextual inquiry confirmed frequent single-handed use during clinical tasks. Navigation and key actions must be easily accessible to the thumb on large screens.",

    // --- Design Process ---
    iaRedesignParagraph: "The Information Architecture was already strong, but we restructured the visual presentation and interaction patterns to align with clinical workflows. The major design advocacy was the pivot from the **Modern Design** concept to the **Textbook-Familiar Design** concept.",
    
    // IA Structure is now custom to the AI project:
    iaOldStructure: [
      "Modern, stylized visualization", 
      "Low contrast color palette", 
      "Fixed interaction design (desktop first)"
    ],
    iaNewStructure: [
      "Textbook-Familiar Visualization (High Trust)", 
      "WCAG AA Compliant Color System", 
      "Single-Handed Mobile Interaction Patterns"
    ],

    // --- Visual Design (Focus on Accessibility and Authority) ---
    designPrinciple1Title: "A/B Test Advocacy: Textbook vs. Modern",
    designPrinciple1Detail: "Used prototype testing to quantify the design pivot. The **Textbook-Familiar** prototype achieved **$85\%$ clinical trust** rating, validating the decision to reject the initial modern design.",
    designPrinciple2Title: "WCAG AA for Clinical Context",
    designPrinciple2Detail: "Developed a color system and UI elements that met WCAG 2.1 AA standards, specifically focusing on **High-Contrast Mode** and large, legible typography for variable lighting conditions.",
    designPrinciple3Title: "Single-Handed Interaction Zone",
    designPrinciple3Detail: "Redesigned core navigation elements (search, favorites) to be placed within the bottom **Thumb Zone** to facilitate easy, single-handed use while holding a chart or tool.",
    
    // --- Iterative Testing (Ensure flows are mobile/clinical utility focused) ---
    testingRound1: "Low-fidelity wireframes to validate core reference search and information architecture speed.",
    testingRound2: "Interactive prototypes testing **Modern vs. Textbook-Familiar** design concepts to quantify trust scores.",
    testingRound3: "High-fidelity prototypes testing end-to-end task completion and **WCAG compliance** with screen readers and high-contrast modes in a simulated clinical environment.",

    // --- Key Features (Must be replaced with Mobile/Utility features) ---
    feature1Title: "Textbook-Familiar Data Visuals",
    feature1Detail: "Redesigned all internal reference diagrams, charts, and visualizations to mimic the authoritative visual language found in established medical textbooks, dramatically increasing clinical trust.",
    feature1DetailsList: [
      "Restored traditional color coding for anatomical structures",
      "Used traditional labeling and font weights for authority",
      "Annotated callouts for complex diagrams",
      "Integrated side-by-side comparison of different reference standards"
    ],
    
    feature2Title: "High-Contrast Clinical Mode",
    feature2Detail: "Designed and implemented a dedicated **High-Contrast Mode** that inverts the color scheme and maximizes contrast, ensuring legibility in dimmed clinical settings (ORs, night rounds).",
    feature2DetailsList: [
      "One-click toggle for High-Contrast Mode",
      "Maximized contrast ratios (AAA wherever possible)",
      "Tested readability in simulated low-light conditions",
      "Retained semantic color coding integrity across modes"
    ],

    feature3Title: "Optimized Single-Handed Navigation",
    feature3Detail: "Moved primary navigation and search controls to the bottom third of the screen to place them comfortably within the 'Thumb Zone,' facilitating quick access during multi-tasking.",
    feature3DetailsList: [
      "Floating Action Button (FAB) for primary search",
      "Bottom Tab Bar for core navigation (Reference, Favorites, Settings)",
      "Minimized unnecessary scrolling (optimized information density)",
      "Clear visual hierarchy to guide quick scanning"
    ],

    feature4Title: "Sustained Utility & Offline Mode",
    feature4Detail: "The app requires $100\%$ availability. We designed robust data handling for complete offline functionality, validating the app's utility as a reliable reference tool when Wi-Fi is unavailable (e.g., old hospital wings).",
    feature4DetailsList: [
      "Automatic data syncing and background caching",
      "Clear offline status indicator",
      "Minimized app load time (<500ms)",
      "Error handling for data conflicts upon re-connecting"
    ],
    
    // --- Results (Must be replaced with Case Study 3 data) ---
    resultMetric1: "85%",
    resultMetric1Desc: "Clinical Trust Score",
    resultMetric1Detail: "(Vs. 35% on Modern Design)",
    resultMetric2: "25%",
    resultMetric2Desc: "Sustained Stickiness Ratio (DAU/MAU)",
    resultMetric2Detail: "(High Utility Validation)",
    resultMetric3: "<500ms",
    resultMetric3Desc: "Average Screen Load Time",
    resultMetric3Detail: "(Critical for Clinical Workflow)",
    
    // Operational Impact
    opImpact1: "Achieved **99.9% uptime** reliability, meeting high-stakes clinical standards.",
    opImpact2: "Validated success through **A/B testing**, proving the strategic pivot to 'Textbook-Familiar' design.",
    opImpact3: "Average session depth increased to **7-10 screens**, validating navigation efficiency.",
    opImpact4: "Eliminated accessibility violations, meeting WCAG 2.1 AA standards for all core features.",

    // UX Metrics
    uxMetric1: "Task Completion Time: $8.5s \to 4.2s$ (Reference Search)", 
    uxMetric2: "Confidence Score: $35\% \to 85\%$ (Final Design)", 
    uxMetric3: "Usage: High Stickiness (DAU/MAU: 25%)",
    uxMetric4: "Error Rate: Reduced (Prototype Error Rate on Data Lookup)",

    // --- Learnings (Must be replaced with Case Study 3 learnings) ---
    learning1Title: "Advocacy Through Quantified Research",
    learning1Detail: "We learned that strategic design pivots in expert domains require **quantified evidence**. Only the A/B test proving the $85\%$ trust score on the Textbook-Familiar design allowed us to overcome internal resistance to a 'less modern' aesthetic.",
    learning2Title: "Trust Trumps Trends",
    learning2Detail: "In high-stakes industries, users value authority and convention (the familiar color palettes and layouts) over current design trends. The key to utility was respecting the learned visual language of the target persona.",
    learning3Title: "Accessibility is Clinical Utility",
    learning3Detail: "Designing for accessibility (High Contrast Mode, large touch targets) was not a compliance goal; it was a **functional necessity** that ensured the app could be reliably used under real-world clinical conditions, such as during surgery or night shifts.",
    learning4Title: "Focus on Sustained Utility",
    learning4Detail: "Initial download numbers are vanity metrics. Focusing design efforts on the **Stickiness Ratio** and **Average Session Depth** forced us to solve real, daily workflow problems, leading to a much stronger final product.",
  };

  // --- END CUSTOM CONTENT FOR CASE STUDY 3 ---


  return (
    <div className="min-h-screen glass-page ">
      <Header />
      

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="mt-16 mb-6">
          <div className="inline-block mb-4 px-4 py-2 glass-chip rounded-full">
            Product Design Lead
          </div>
          <h1 className=" text-4xl md:text-5xl font-semibold mb-6">Advanced Cardiac Life Support (ACLS) Mobile App for Healthcare Professionals</h1>
          <p className="leading-relaxed">
            During the COVID-19 pandemic, healthcare systems worldwide faced unprecedented challenges in delivering timely and effective emergency care as not all specialties are familiar with Advanced Cardiac Life Support (ACLS) protocols. To address this critical need, I led the design of an intuitive mobile application in collaboration with the American Heart Association (AHA). This app empowers healthcare professionals across various specialties to quickly access and perform ACLS protocols, ensuring they can provide life-saving interventions with confidence and precision. The app's user-centric design, combined with evidence-based guidelines from AHA, has facilitated rapid decision-making in high-pressure situations, ultimately improving patient outcomes during emergencies.
          </p>
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="text-muted-foreground" size={20} />
              <h4 className="text-foreground">Timeline</h4>
            </div>
            <p className="text-muted-foreground">12 months</p>
            <p className="text-muted-foreground mt-1">Jun 2020 - Jun 2021</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-muted-foreground" size={20} />
              <h4 className="text-foreground">Team</h4>
            </div>
            <p className="text-muted-foreground">5 core members</p>
            <p className="text-muted-foreground mt-1">1 Designers, 1 Project Manager, 2 Engineers</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Target className="text-muted-foreground" size={20} />
              <h4 className="text-foreground">My Role</h4>
            </div>
            <p className="text-muted-foreground">UX Design Lead</p>
            <p className="text-muted-foreground mt-1">Coding Algorithm Redesign with Accessibility</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Award className="text-muted-foreground" size={20} />
              <h4 className="text-foreground">Impact</h4>
            </div>
            <p className="text-muted-foreground">90%+ Coversion Rate</p>
            <p className="text-muted-foreground mt-1">3 Million Users</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-16 glass-card border border-white/10">
          <img
            src="/imgs/CaseStudy3/HowToUse---suggestion.jpg"
            alt="Mobile medical reference app in a clinical setting"
            className="w-full h-full object-cover"
          />
        </div>
        

        {/* Content Sections */}
        <div className="space-y-20">

          {/* Challenge */}
          <section>
            <h2 className="text-foreground mb-4">The Challenge</h2>
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-xl mb-6">
              <p className="leading-relaxed">
                How to design the mobile application to have complicated algorithm and multiple utilities in one screen?
              </p>
            </div>
          </section>

          {/* Research Process */}
          <section>
            <h2 className="text-foreground mb-6">Research & Discovery</h2>

            <h3 className="text-foreground">Methodology</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Planned and conducted quantified A/B prototype testing with 7 physicians with different specialties to validate the design direction.
            </p>

            <div className="space-y-8 mb-10">
              <div className="border-l-4 border-primary pl-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      A/B Prototype Testing: Quantified the difference in user trust between the stylized 'Modern' design and the visually conventional 'Textbook-Familiar' design.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Accessibility Testing: Assessed text sizes and touch targets against WCAG AA standards.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Follow Up Interviews: Focused on why specific UI were more trusted and felt reliable.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* <h3 className="text-foreground mb-2">Key Research Insights</h3>
            <div className="bg-primary/10 border border-primary/30 p-8 rounded-xl space-y-6">
              <div>
                <h4 className="text-foreground">1. Convention is Authority</h4>
                <p className="text-muted-foreground">
                  Generative research revealed that physicians' trust is directly tied to visual convention. They rely on the color coding, layout, and visual language they learned from physical textbooks 10-20 years prior. **The modern design was rejected.**
                </p>
              </div>
              <div>
                <h4 className="text-foreground">2. The Need for Speed and Depth</h4>
                <p className="text-muted-foreground">
                  The mobile app needed to facilitate both **quick reference (fast searches)** and **deep dive analysis (detailed diagrams and notes)** within the same session. Session depth was a key utility metric.
                </p>
              </div>
              <div>
                <h4 className="text-foreground">3. Accessibility is Functional Utility</h4>
                <p className="text-muted-foreground">
                  Any design choice (especially low-contrast colors) that failed in variable light conditions was a failure of clinical utility. The design must be robust enough for use in a dimmed OR or bright sunlight.
                </p>
              </div>
              <div>
                <h4 className="text-foreground">4. Single-Handed Use is Essential</h4>
                <p className="text-muted-foreground">
                  Contextual inquiry confirmed frequent single-handed use during clinical tasks. Navigation and key actions must be easily accessible to the thumb on large screens (the **Thumb Zone**).
                </p>
              </div>
            </div> */}
          </section>

          {/* Design Process */}
          <section>
            <h2 className="text-foreground mb-6">Design Process</h2>

            <h3 className="text-foreground">Strategic Pivot: Textbook-Familiar Design</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              The core design process revolved around the research-validated pivot from a visually modern aesthetic to one rooted in professional convention. We restructured the visual presentation and interaction patterns to align with clinical workflows.
            </p>
            
            <div className="bg-card border border-border p-8 rounded-xl mb-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-foreground mb-2">Rejected Design</h5>
                  <ul className="space-y-1 text-muted-foreground">
                    <li key="casestudy3-rejected-item-1">• Modern, spacious, and simple visualization</li>
                    <li key="casestudy3-rejected-item-2">• Neutural color theme with accents</li>
                    <li key="casestudy3-rejected-item-3">• Big text for readability</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-foreground mb-2">Trusted Design </h5>
                  <ul className="space-y-1 text-muted-foreground">
                    <li key="casestudy3-rejected-item-1">• Textbook familiar color theme and visualization </li>
                    <li key="casestudy3-rejected-item-2">• Single screen view and single handed interactions</li>
                    <li key="casestudy3-rejected-item-3">• Easy navigation and access</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-foreground mt-8">Accessibility & Utility Design System</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              While embracing the textbook-familiar aesthetic and single screen interaction requirements, the mobile application is developed with a design system that meets accessibility standards.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card border-1 border-border p-6 rounded-xl">
                <h4 className="text-foreground">{caseStudy3Content.designPrinciple2Title}</h4>
                <p className="text-muted-foreground">
                  Developed a color system and UI elements that met WCAG 2.1 AA standards, crucial for low-light clinical environments.
                </p>
              </div>
              <div className="bg-card border-1 border-border p-6 rounded-xl">
                <h4 className="text-foreground">Information Density</h4>
                <p className="text-muted-foreground">
                  Optimized the display of complex diagrams using progressive disclosure and annotated callouts to maintain density without overwhelming the small mobile screen.
                </p>
              </div>
              <div className="bg-card border-1 border-border p-6 rounded-xl">
                <h4 className="text-foreground">{caseStudy3Content.designPrinciple3Title}</h4>
                <p className="text-muted-foreground">
                  Redesigned core navigation elements (search, favorites) to be placed within the bottom **Thumb Zone** for single-handed access.
                </p>
              </div>
            </div>
            

            <h3 className="text-foreground mt-8">Iterative Testing & Refinement</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Testing focused on speed and clinical confidence rather than general usability, ensuring the app met the functional demands of the target user.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-muted-foreground">
                  Round 1-2: Low-fidelity wireframes to validate core reference search and information architecture speed.
                </p>
              </div>
              <div className="border-l-4 border-green-500/80 pl-6 py-2">
                <p className="text-muted-foreground">
                  Round 3-4: Interactive prototypes A/B testing validate design direction.
                </p>
              </div>
              <div className="border-l-4 border-purple-500/80 pl-6 py-2">
                <p className="text-muted-foreground">
                  Round 5-6: High-fidelity prototypes testing end-to-end task completion and WCAG compliance.
                </p>
              </div>
            </div>
          </section>


          {/* Results (Replaced with Case Study 3 data) */}
          <section>
            <h2 className="text-foreground mb-4">Quantitative Results & Impact</h2>

            <div className="bg-gradient-to-br from-primary to-primary/60 text-primary-foreground p-10 rounded-2xl mb-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl mb-2">3M+</div>
                  <div className="text-primary-foreground/90 mb-1">Mobile App Download</div>
                  <div className="text-primary-foreground/80">iOS and Android</div>
                </div>
                <div>
                  <div className="text-5xl mb-2">90%</div>
                  <div className="text-primary-foreground/90 mb-1">Conversion Rate</div>
                  <div className="text-primary-foreground/80">Trial to Subscription</div>
                </div>
                <div>
                  <div className="text-5xl mb-2">3</div>
                  <div className="text-primary-foreground/90 mb-1">Trusted Institutions Collaboration</div>
                  <div className="text-primary-foreground/80">Harvard, MGH, AHA</div>
                </div>
              </div>
            </div>

            <h3 className="text-foreground mb-2">User Testimonials</h3>
            <div className="space-y-2">
              <div className="bg-card border-1 border-border p-6 rounded-xl">
                <p className="text-muted-foreground italic">
                  "I'm a practicing physician. ... Doctors need tools they can 100% trust, especially when it comes to saving a life – this is it!"
                </p>
              </div>
              <div className="bg-card border-1 border-border px-6 py-3 rounded-xl">
                <p className="text-muted-foreground italic">
                  "... Great app used by residents all over to help with codes. ... Go-to recommendation for any physician covering in-hospital patients."
                </p>
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
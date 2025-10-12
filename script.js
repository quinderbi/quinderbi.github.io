// Custom Cursor
const cursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});

document.querySelectorAll("a, button, .interactive-card").forEach((el) => {
  el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});

// Particles
for (let i = 0; i < 20; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDelay = Math.random() * 8 + "s";
  particle.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.body.appendChild(particle);
}

// Scroll Progress
window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scrollProgress");
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / scrollHeight) * 100;
  scrollProgress.style.width = scrolled + "%";

  // Navbar
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);

  // Reveal on scroll
  document.querySelectorAll(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });

  // Active nav
  const sections = document.querySelectorAll("section");
  let current = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// Navigation
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (
      !this.nextElementSibling ||
      !this.nextElementSibling.classList.contains("dropdown-content")
    ) {
      e.preventDefault();
      document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
      document
        .querySelectorAll(".nav-link")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  });
});

// Mobile menu
function toggleMobileMenu() {
  const burger = document.querySelector(".burger-menu");
  const mobileMenu = document.getElementById("mobileMenu");
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
}

// Dropdown navigation
function goToExperience(tab) {
  event.preventDefault();
  const experienceSection = document.querySelector("#experience");
  experienceSection.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });
    document.querySelectorAll(".tab-button").forEach((btn) => {
      btn.classList.remove("active");
    });
    document.getElementById(tab).classList.add("active");
    document.querySelectorAll(".tab-button").forEach((btn) => {
      if (
        (tab === "professional" && btn.textContent.includes("Professional")) ||
        (tab === "organization" && btn.textContent.includes("Organization"))
      ) {
        btn.classList.add("active");
      }
    });
  }, 600);
}

// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Download CV function
function downloadCV() {
  // Buat link download untuk CV
  const link = document.createElement("a");
  link.href = "CV Aqeela Fathya N_Data Science.pdf"; // Ganti dengan path file CV Anda
  link.download = "CV_Aqeela_Fathya_Najwa_Data_Science.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Tab switching
function switchTab(tab) {
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.getElementById(tab).classList.add("active");
  event.target.classList.add("active");
}

// Modal content
const modalContent = {
  exp1: `<h2>🔥 PT Energi Negeri Meusenia (ENERMA)</h2><p><strong>Data Analyst Intern | Sept 2025 - Present</strong></p><p><strong>Location:</strong> South Jakarta, DKI Jakarta, Indonesia (Remote)</p><p><strong>Industry:</strong> Energy & Gas</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Responsibilities & Achievements:</h3><ul style="line-height: 2;"><li><strong>Data Consolidation:</strong> Collected and consolidated operational data across multiple regions and departments to support strategic analysis</li><li><strong>Automated Dashboards:</strong> Built automated dashboards summarizing commercial, operational, and financial KPIs for executive review</li><li><strong>Performance Analysis:</strong> Conducted performance analysis and presented actionable insights to the Board of Directors, improving reporting efficiency by 15%</li><li><strong>Data Quality Management:</strong> Maintained active communication with regional teams to ensure data accuracy and timely reporting</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Impact:</h3><p>Enhanced executive decision-making through comprehensive data consolidation and automated reporting systems, resulting in 15% improvement in reporting efficiency.</p>`,

  exp2: `<h2>✈️ PT Pelita Air Service</h2><p><strong>Data Analyst Intern | Jul 2024 - Sept 2024</strong></p><p><strong>Location:</strong> Central Jakarta, DKI Jakarta, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Responsibilities & Achievements:</h3><ul style="line-height: 2;"><li><strong>Interactive Dashboards:</strong> Designed and implemented interactive dashboards for finance, sales, and cargo divisions using Excel and Tableau, enabling faster and more informed decision-making</li><li><strong>IT Asset Analysis:</strong> Analyzed 2,000+ IT asset records to assess equipment lifecycle, vendor performance, and distribution efficiency</li><li><strong>Requirements Gathering:</strong> Developed user stories and workflow diagrams to streamline requirements gathering for IT asset system enhancements</li><li><strong>Process Standardization:</strong> Drafted tailored SDLC guideline to standardize internal development processes and improve inter-team coordination</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Technologies Used:</h3><p>Excel, Tableau, SQL, Documentation Tools</p>`,

  exp3: `<h2>💻 Practicum Assistant - Informatics Lab</h2><p><strong>Telkom University | Feb 2024 - Jun 2025</strong></p><p><strong>Location:</strong> Bandung, West Java, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Courses Assisted:</h3><ul style="line-height: 2;"><li><strong>Operating System Practicum (Sistem Operasi)</strong> - Sept 2024 – Jun 2025 (Xinu OS)</li><li><strong>Object-Oriented Programming Practicum (PBO)</strong> - Feb 2024 – Jan 2025 (Java)</li><li><strong>Basic Artificial Intelligence Practicum (DKA)</strong> - Feb 2025 – Jun 2025 (Python)</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Responsibilities & Achievements:</h3><ul style="line-height: 2;"><li>Guided 100+ students in weekly lab sessions, focusing on practical application of Java, Xinu OS, and Python for AI</li><li>Delivered live debugging sessions and hands-on implementation assistance to enhance coding accuracy</li><li>Evaluated student lab submissions and provided structured, constructive feedback to improve comprehension and performance</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Impact:</h3><p>Successfully mentored over 100 students through complex technical concepts with hands-on guidance and real-time problem-solving support.</p>`,

  exp4: `<h2>📚 PT Pelita Air Service (PATC)</h2><p><strong>Data Analyst Intern | Jan 2024 - Feb 2024</strong></p><p><strong>Location:</strong> Central Jakarta, DKI Jakarta, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Responsibilities & Achievements:</h3><ul style="line-height: 2;"><li><strong>Data Cleaning & Analysis:</strong> Cleaned and analyzed 1,500+ operational training records to uncover patterns in batch training, certification completion, and schedule optimization</li><li><strong>Dashboard Development:</strong> Built visual dashboards using Excel and Looker Studio, improving transparency in training metrics and boosting scheduling efficiency by 10%</li><li><strong>Strategic Reporting:</strong> Generated performance trend reports to support strategic decisions in PATC's internal planning</li><li><strong>Data Quality Improvement:</strong> Recommended improvements to the data schema by identifying redundant data points and inconsistencies</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Technologies Used:</h3><p>Excel, Looker Studio, SQL, Data Analysis Tools</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Impact:</h3><p>Achieved 10% improvement in scheduling efficiency through data-driven insights and enhanced data quality for better strategic planning.</p>`,

  exp5: `<h2>👩‍🏫 Lecturer Assistant - Telkom University</h2><p><strong>School of Computing | Sept 2023 - Jan 2025</strong></p><p><strong>Location:</strong> Bandung, West Java, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Courses Assisted (6 Courses):</h3><ul style="line-height: 2;"><li><strong>Mathematical Logic</strong> - Sept 2023 – Jan 2024 & Sept 2024 – Jan 2025</li><li><strong>ICT Global Insight</strong> - Sept 2023 – Jan 2024</li><li><strong>Digital Systems</strong> - Feb 2024 – Jun 2024</li><li><strong>Discrete Mathematics</strong> - Feb 2024 – Jun 2024</li><li><strong>Computer Organization and Architecture</strong> - Sept 2024 – Jan 2025</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Responsibilities & Achievements:</h3><ul style="line-height: 2;"><li>Delivered tutorial sessions and addressed student inquiries on computing and mathematical fundamentals</li><li>Graded quizzes and assignments for 50–90 students per course, maintaining high accuracy and academic integrity</li><li>Supported exam preparation through focused review classes, contributing to an average 10–15% increase in student scores</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Impact:</h3><p>Successfully mentored hundreds of students across 4 semesters, contributing to measurable improvement in academic performance and comprehension of complex technical concepts.</p>`,

  org1: `<h2>🎓 GDSC Telkom University</h2><p><strong>Machine Learning Path Member | Dec 2023 – Jun 2025</strong></p><p><strong>Location:</strong> Bandung, West Java, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">About:</h3><p>A learning community under Google Developer Student Clubs focusing on Machine Learning and Artificial Intelligence.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Activities & Achievements:</h3><ul style="line-height: 2;"><li>Participated in regular workshops and discussions on supervised learning, model evaluation, and deployment</li><li>Strengthened data analysis and modeling skills through collaborative projects across departments</li><li>Engaged with ML community to stay updated on latest technologies and best practices</li></ul>`,

  org2: `<h2>📋 PERMIDSI 2024 - HIMA Data Science</h2><p><strong>Secretary I | Nov 2023 – Feb 2024</strong></p><p><strong>Location:</strong> Bandung, West Java, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">About:</h3><p>Annual election event for the HIMA DS chairman (class of 2022).</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Responsibilities & Achievements:</h3><ul style="line-height: 2;"><li>Prepared all official documentation and scheduling for the election process</li><li>Coordinated cross-division communication to ensure efficient and transparent implementation</li><li><strong>Successfully completed the entire program 100% on time</strong> with active participation from all candidates</li></ul>`,

  org3: `<h2>🔬 Data Warehouse Study Group - Big Data Laboratory</h2><p><strong>Laboratory Member | Aug 2023 – Dec 2024</strong></p><p><strong>Location:</strong> Bandung, West Java, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">About:</h3><p>An internal study group focusing on Data Warehouse concepts and implementation.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Activities & Achievements:</h3><ul style="line-height: 2;"><li>Implemented ETL and data modeling using PostgreSQL and dbt in collaborative team projects</li><li>Developed a fundamental learning module used by new participants in subsequent batches</li><li>Gained hands-on experience in data warehousing best practices</li></ul>`,

  org4: `<h2>🎪 GALAKSI 2023 - HIMA Data Science</h2><p><strong>Student Committee | Sep 2023 – Dec 2023</strong></p><p><strong>Location:</strong> Bandung, West Java, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">About:</h3><p>Student initiation program for new Data Science students (class of 2023).</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Responsibilities & Achievements:</h3><ul style="line-height: 2;"><li>Managed technical operations and participant engagement throughout the event</li><li>Coordinated with other committees to ensure smooth logistics and session execution</li><li><strong>Maintained >90% active participation rate</strong> and received positive event evaluations</li></ul>`,

  org5: `<h2>🤝 PKKMB Data Science 2023</h2><p><strong>Coordinator of Liaison Officers | Aug 2023 – Sep 2023</strong></p><p><strong>Location:</strong> Bandung, West Java, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">About:</h3><p>Orientation program for new Data Science students (class of 2023).</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Responsibilities & Achievements:</h3><ul style="line-height: 2;"><li>Supervised 5 liaison officers assisting over 100 freshmen during the orientation</li><li>Organized duty schedules and communication flow among the LO team</li><li><strong>Improved participant satisfaction to 4.7/5</strong> based on post-event feedback</li></ul>`,

  org6: `<h2>👥 PKKMB Telkom University 2023</h2><p><strong>Liaison Officer | May 2023 – Oct 2023</strong></p><p><strong>Location:</strong> Bandung, West Java, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">About:</h3><p>University-level orientation program for Telkom University freshmen.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Responsibilities & Achievements:</h3><ul style="line-height: 2;"><li>Guided students throughout the orientation program, ensuring smooth communication</li><li>Acted as a bridge between freshmen and the organizing committee to resolve information gaps</li><li>Ensured positive onboarding experience for all new students</li></ul>`,

  org7: `<h2>🎯 PERMIDSI 2023 - HIMA Data Science</h2><p><strong>Person in Charge (PIC) | Jan 2023 – Mar 2023</strong></p><p><strong>Location:</strong> Bandung, West Java, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">About:</h3><p>Digital election event for the HIMA DS chairman (class of 2021).</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Responsibilities & Achievements:</h3><ul style="line-height: 2;"><li>Led the overall election process, from debate sessions to online voting</li><li>Managed voting systems and documentation to ensure fairness and transparency</li><li><strong>Increased voter participation to >80%</strong>, ensuring the election's validity and inclusiveness</li></ul>`,

  org8: `<h2>✏️ Formatur HIMA Data Science</h2><p><strong>Secretary I | Nov 2022 – Feb 2024</strong></p><p><strong>Location:</strong> Bandung, West Java, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">About:</h3><p>Founding committee of the Data Science Student Association (HIMA DS).</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Responsibilities & Achievements:</h3><ul style="line-height: 2;"><li>Designed the organizational structure, proposals, and legal documents for the formation process</li><li>Archived all official documents as the foundation for faculty approval</li><li><strong>Achieved official recognition of HIMA DS</strong> as the first formal student association for Data Science at Telkom University</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Significance:</h3><p>Played pivotal role in establishing the foundation for Data Science student community at Telkom University.</p>`,

  org9: `<h2>📝 FEEDS 2022 - HIMA Data Science</h2><p><strong>General Secretary | Nov 2022 – Dec 2022</strong></p><p><strong>Location:</strong> Bandung, West Java, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">About:</h3><p>Welcoming event for new Data Science students (class of 2022).</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Responsibilities & Achievements:</h3><ul style="line-height: 2;"><li>Managed administrative and logistical needs to ensure all sessions followed the rundown</li><li>Drafted event reports and evaluations for future improvement</li><li><strong>Reached >90% freshman participation</strong> and enhanced engagement in early student activities</li></ul>`,

  org10: `<h2>🎭 PERFECT (Permib Freedom in Creativity) - PERMIB</h2><p><strong>Event Staff | Nov 2021 – Jun 2022</strong></p><p><strong>Location:</strong> Bandung, West Java, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">About:</h3><p>Student organization from Bandung conducting social and educational outreach programs for high school students.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Main Programs:</h3><ul style="line-height: 2;"><li><strong>Webinar Series:</strong> Organized educational webinars on higher education and career preparation</li><li><strong>Roadshow to High Schools:</strong> Promoted Telkom University and introduced academic programs across 15 high schools in Bandung</li><li><strong>UTBK Try-Out:</strong> Coordinated a nationwide UTBK simulation attended by 500+ students</li><li><strong>Edufair:</strong> Assisted in executing an educational fair connecting universities and students</li></ul>`,

  org11: `<h2>📋 PKKMB Data Science 2022</h2><p><strong>General Secretary | Jul 2022 – Sep 2022</strong></p><p><strong>Location:</strong> Bandung, West Java, Indonesia (Onsite)</p><h3 style="margin-top:1.5rem; color:var(--mauve)">About:</h3><p>Orientation program for the first batch of Data Science students.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Responsibilities & Achievements:</h3><ul style="line-height: 2;"><li>Prepared official documents, event schedules, and post-event reports</li><li>Collaborated with faculty representatives to ensure timely execution</li><li><strong>Received a 4.8/5 satisfaction rating</strong> from the department for event organization</li></ul>`,

  pub1: `<h2>📝 IEEE ICICyTA 2024 Publication</h2><p><strong>Enhancing Multiclass Classification of Child Nutritional Status Using KNN and Random Forest with SMOTE</strong></p><p><strong>Conference:</strong> 2024 International Conference on Intelligent Cybernetics Technology & Applications (ICICyTA)</p><p><strong>Conference Date:</strong> December 17, 2024</p><p><strong>Date Added to IEEE Xplore:</strong> March 11, 2025</p><p><strong>Authors:</strong> <span style="color: var(--rose); font-weight: bold;">Aqeela Fathya Najwa (First Author & Presenter)</span>, et al.</p><p><strong>Award:</strong> 🏆 Best Presenter – The 4th ICICyTA 2024</p><p style="margin-top: 1rem;"><a href="https://ieeexplore.ieee.org/document/10912991" target="_blank" rel="noopener" style="color: var(--mauve); text-decoration: underline; font-weight: 600;">🔗 IEEE Xplore Link</a></p><p><a href="https://doi.org/10.1109/ICICYTA64807.2024.10912991" target="_blank" rel="noopener" style="color: var(--chocolate); text-decoration: underline;">📄 DOI: 10.1109/ICICYTA64807.2024.10912991</a></p><h3 style="margin-top:1.5rem; color:var(--mauve)">Description:</h3><p>Published by IEEE, this research investigates the use of the Synthetic Minority Over-sampling Technique (SMOTE) to improve classification accuracy in child nutrition datasets. The study applies K-Nearest Neighbors (KNN) and Random Forest algorithms to evaluate model robustness and class balance performance.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Abstract:</h3><p>The study addresses data imbalance in child nutritional status prediction using BB/U (Weight-for-Age) and BB/TB (Weight-for-Height) indicators. By applying SMOTE, the models achieved balanced recall between major and minor classes, offering a scalable approach for improving health data analytics.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Results:</h3><ul style="line-height: 2;"><li>Achieved <strong>97.59% accuracy</strong> with Random Forest and <strong>96.66%</strong> with KNN</li><li>Significantly improved recall for minority classes</li><li>Provided actionable insights for data-driven nutrition intervention strategies in Indonesia</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">My Contributions:</h3><ul style="line-height: 2;"><li>Served as <strong>First Author and Presenter</strong>, responsible for research design, model implementation, and result validation</li><li>Awarded <strong>Best Presenter</strong> for outstanding paper delivery and contribution to healthcare analytics</li></ul>`,

  pub2: `<h2>📄 JCSE Journal Publication</h2><p><strong>Enhancing Stunting Prediction for Indonesian Children Using Machine Learning with SMOTE Data Balancing</strong></p><p><strong>Journal:</strong> Journal of Computing Science and Engineering (JCSE)</p><p><strong>Index:</strong> Scopus-Indexed Journal</p><p><strong>Volume:</strong> Vol. 18, No. 4, pp. 203–213 (2024)</p><p><strong>Publication Date:</strong> February 4, 2025</p><p><strong>Authors:</strong> <span style="color: var(--rose); font-weight: bold;">Aqeela Fathya Najwa (First Author)</span>, et al.</p><p style="margin-top: 1rem;"><a href="https://doi.org/10.5626/JCSE.2024.18.4.203" target="_blank" rel="noopener" style="color: var(--chocolate); text-decoration: underline; font-weight: 600;">📄 DOI: 10.5626/JCSE.2024.18.4.203</a></p><h3 style="margin-top:1.5rem; color:var(--mauve)">Description:</h3><p>Published in a Scopus-indexed journal, this study compares the effectiveness of Support Vector Machine (SVM) and Decision Tree algorithms in detecting stunting among Indonesian children. The research emphasizes the critical role of SMOTE data balancing in improving machine learning model accuracy for health prediction.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Abstract:</h3><p>The research introduces a predictive model to identify stunting risks using real-world health data from community health centers. With SMOTE balancing, both models demonstrated significant performance improvement, validating the need for data preprocessing in imbalanced health datasets.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Results:</h3><ul style="line-height: 2;"><li>Decision Tree achieved <strong>97% F1-score</strong>, outperforming traditional models</li><li>SVM (RBF kernel) improved to <strong>94% F1-score</strong> after applying SMOTE</li><li>Demonstrated that balanced data significantly enhances early stunting detection accuracy</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">My Contributions:</h3><ul style="line-height: 2;"><li>Acted as <strong>First Author</strong>, responsible for data preprocessing, model training, and evaluation</li><li>Led manuscript drafting and revision for journal submission and peer review process</li></ul>`,

  project1: `<h2>❤️ Heart Disease Classification Model</h2><h3 style="margin-top:1.5rem; color:var(--mauve)">Project Overview:</h3><p>Developed comprehensive heart disease classification using Random Forest optimized with Evolutionary Boosting, achieving 86.67% test accuracy.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Technical Approach:</h3><ul style="line-height: 2;"><li><strong>Algorithm:</strong> Random Forest with Evolutionary Boosting</li><li><strong>Preprocessing:</strong> Data normalization techniques</li><li><strong>Tuning:</strong> Grid Search for optimal parameters</li><li><strong>Evaluation:</strong> Precision-recall metrics</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Technologies:</h3><p>Python, Random Forest, AutoML, Scikit-learn</p>`,

  project2: `<h2>👶 Multiclass Child Nutrition Classification</h2><h3 style="margin-top:1.5rem; color:var(--mauve)">Project Overview:</h3><p>Built multiclass classification for child nutritional status using BB/U and BB/TB indicators with SMOTE balancing.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Results:</h3><ul style="line-height: 2;"><li>Random Forest with SMOTE: <strong>97.59% accuracy</strong></li><li>Addressed class imbalance effectively</li><li>Supports equitable health interventions</li><li>Published in IEEE ICICyTA 2024</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Technologies:</h3><p>Python, KNN, Random Forest, SMOTE</p>`,

  project3: `<h2>⛏️ Operational BI Dashboard - Mining Sector</h2><p><strong>Client:</strong> PT Kamalindo Sompurna</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Project Overview:</h3><p>Created integrated BI dashboard for real-time coal production and fuel monitoring.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Features:</h3><ul style="line-height: 2;"><li>Real-time production monitoring</li><li>Fuel consumption tracking</li><li>Multi-source data integration</li><li>Interactive drill-down visualizations</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Business Impact:</h3><ul style="line-height: 2;"><li>Improved operational efficiency</li><li>Enhanced decision-making</li><li>Better resource allocation</li></ul><p><strong>Technologies:</strong> Power BI, SQL, Real-time Analytics</p>`,

  project4: `<h2>🛒 Marketplace UI/UX Prototype</h2><h3 style="margin-top:1.5rem; color:var(--mauve)">Project Overview:</h3><p>High-fidelity marketplace design for Telkom University students with focus on safe, user-friendly transactions.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Features:</h3><ul style="line-height: 2;"><li>Seamless product search and filtering</li><li>Student-tailored categories</li><li>Product review and rating system</li><li>In-app buyer-seller chat</li><li>Secure transaction mechanisms</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Design Principles:</h3><ul style="line-height: 2;"><li>User-centered approach</li><li>Clean, modern interface</li><li>Mobile-first responsive design</li></ul><p><strong>Tools:</strong> Figma, UI/UX Design, Prototyping</p>`,

  // Certification Modals
  cert1: `<h2>💼 Fundamental of Data Analyst</h2><p><strong>Fresh Graduate Academy - Digital Talent Scholarship 2025</strong></p><p><strong>Provider:</strong> Pusat Pengembangan Talenta Digital</p><p><strong>Period:</strong> 17 Juli – 17 Agustus 2025</p><p><strong>Organizer:</strong> Kementerian Komunikasi dan Informatika Republik Indonesia</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Program Description:</h3><p>Comprehensive training program covering fundamental concepts and practical skills in data analysis, including data collection, cleaning, visualization, and statistical analysis.</p>`,

  cert2: `<h2>📊 Practical Real Business Application for Business Intelligence Analyst</h2><p><strong>Fresh Graduate Academy - Digital Talent Scholarship 2025</strong></p><p><strong>Provider:</strong> Pusat Pengembangan Talenta Digital</p><p><strong>Period:</strong> 1 – 30 September 2025</p><p><strong>Organizer:</strong> Kementerian Komunikasi dan Informatika Republik Indonesia</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Program Description:</h3><p>Advanced training focused on practical business intelligence applications, including dashboard development, KPI tracking, and data-driven business decision making.</p>`,

  cert3: `<h2>🎯 Wawasan Karir dalam Bidang Data Analytics</h2><p><strong>Micro Skill - Digital Talent Scholarship 2025</strong></p><p><strong>Provider:</strong> Pusat Pengembangan Literasi Digital</p><p><strong>Organizer:</strong> Kementerian Komunikasi dan Informatika Republik Indonesia</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Program Description:</h3><p>Career insights program providing comprehensive understanding of career paths, opportunities, and required skills in the data analytics field.</p>`,

  cert4: `<h2>🔬 Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor</h2><p><strong>Micro Skill - Digital Talent Scholarship 2025</strong></p><p><strong>Provider:</strong> Pusat Pengembangan Literasi Digital</p><p><strong>Organizer:</strong> Kementerian Komunikasi dan Informatika Republik Indonesia</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Program Description:</h3><p>Introductory program covering data science fundamentals and its applications across various industry sectors including healthcare, finance, and retail.</p>`,

  dqlab2025: `<h2>📖 DQLab Courses 2025</h2><p><strong>17 Courses Completed</strong></p><p><strong>Platform:</strong> DQLab Academy</p><p><strong>Program:</strong> Digital Talent Scholarship 2025</p><h3 style="margin-top:1.5rem; color:var(--mauve)">July 2025:</h3><ul class="cert-list"><li>Fundamental SQL Using FUNCTION and GROUP BY <a href="https://academy.dqlab.id/Certificate_check/result/DQLABSQLT2VUWCAP" target="_blank" class="cert-link">🔗 View</a></li><li>Fundamental SQL Using INNER JOIN and UNION <a href="https://academy.dqlab.id/Certificate_check/result/DQLABSQLT2KMVADO" target="_blank" class="cert-link">🔗 View</a></li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">August 2025:</h3><ul class="cert-list"><li>Data Visualization with Python Matplotlib - Part 1 <a href="https://academy.dqlab.id/Certificate_check/result/DQLABDTWP1VQETVD" target="_blank" class="cert-link">🔗 View</a></li><li>Data Visualization with Python Matplotlib - Part 2 <a href="https://academy.dqlab.id/Certificate_check/result/DQLABINTP1BSRWAT" target="_blank" class="cert-link">🔗 View</a></li><li>Exploratory Data Analysis with Python for Beginner <a href="https://academy.dqlab.id/Certificate_check/result/DQLABINTP1DHKPLT" target="_blank" class="cert-link">🔗 View</a></li><li>Fundamental Data Visualization with Python <a href="https://academy.dqlab.id/Certificate_check/result/DQLABINTP1SBAJLL" target="_blank" class="cert-link">🔗 View</a></li><li>Master Data and Handling Duplicate Data with LinkR <a href="https://academy.dqlab.id/Certificate_check/result/DQLABLMDHDDBMCEJL" target="_blank" class="cert-link">🔗 View</a></li><li>Pengantar Storytelling dengan Visualisasi menggunakan Python <a href="https://academy.dqlab.id/Certificate_check/result/DQLABSDVP1MCLQTF" target="_blank" class="cert-link">🔗 View</a></li><li>Project Data Analysis for B2B Retail – Customer Analytics Report <a href="https://academy.dqlab.id/Certificate_check/result/DQLABPRJ10PBKTTO" target="_blank" class="cert-link">🔗 View</a></li><li>Project Data Analysis for Retail – Sales Performance Report <a href="https://academy.dqlab.id/Certificate_check/result/DQLABPRJC4HBFLTF" target="_blank" class="cert-link">🔗 View</a></li><li>Python for Data Professional Beginner – Part 2 <a href="https://academy.dqlab.id/Certificate_check/result/DQLABINTP1ICLGMW" target="_blank" class="cert-link">🔗 View</a></li><li>Python for Data Professional Beginner – Part 3 <a href="https://academy.dqlab.id/Certificate_check/result/DQLABINTP1DLVHMQ" target="_blank" class="cert-link">🔗 View</a></li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">September 2025:</h3><ul class="cert-list"><li>Business Insight Visualization <a href="https://academy.dqlab.id/Certificate_check/result/DQLABBIVAJCUBD" target="_blank" class="cert-link">🔗 View</a></li><li>Funnel Conversion Analysis <a href="https://academy.dqlab.id/Certificate_check/result/DQLABSSBCOIVOCJF" target="_blank" class="cert-link">🔗 View</a></li><li>Margin and Stock Risk <a href="https://academy.dqlab.id/Certificate_check/result/DQLABMSRFIRDPQ" target="_blank" class="cert-link">🔗 View</a></li><li>Sales Spike Business Case Overview <a href="https://academy.dqlab.id/Certificate_check/result/DQLABSSBCOWUVTBE" target="_blank" class="cert-link">🔗 View</a></li><li>SKU Outlier Exploration <a href="https://academy.dqlab.id/Certificate_check/result/DQLABSSBCOBPIPEQ" target="_blank" class="cert-link">🔗 View</a></li></ul>`,

  cert2023all: `<h2>📚 Certifications 2023</h2><p><strong>15+ Certifications from Multiple Platforms</strong></p><h3 style="margin-top:1.5rem; color:var(--mauve)">DQLab Certificates (August 2023):</h3><ul class="cert-list"><li>Data Science Fundamentals <a href="https://academy.dqlab.id/Certificate_check/result/DQLABFREECLASS01RHFGMP" target="_blank" class="cert-link">🔗 View</a></li><li>Introduction to Data Science with Python <a href="https://academy.dqlab.id/Certificate_check/result/DQLABINTP1VPNIJN" target="_blank" class="cert-link">🔗 View</a></li><li>Introduction to Data Science with R <a href="https://academy.dqlab.id/Certificate_check/result/DQLABBGINRHPMSKG" target="_blank" class="cert-link">🔗 View</a></li><li>Python Fundamental for Data Science <a href="https://academy.dqlab.id/Certificate_check/result/DQLABINTP1EQFNFJ" target="_blank" class="cert-link">🔗 View</a></li><li>Python for Data Professional Beginner – Part 1 <a href="https://academy.dqlab.id/Certificate_check/result/DQLABINTP1CJBWOQ" target="_blank" class="cert-link">🔗 View</a></li><li>R Fundamental for Data Science <a href="https://academy.dqlab.id/Certificate_check/result/DQLABINTR1EEINUR" target="_blank" class="cert-link">🔗 View</a></li><li>Fundamental SQL Using SELECT Statement <a href="https://academy.dqlab.id/Certificate_check/result/DQLABSQLT1HOOHAN" target="_blank" class="cert-link">🔗 View</a></li><li>Guide to Learn Python with AI <a href="https://academy.dqlab.id/Certificate_check/result/DQLABAI001EBMVKJ" target="_blank" class="cert-link">🔗 View</a></li><li>Guide to Learn R with AI <a href="https://academy.dqlab.id/Certificate_check/result/DQLABAI002FQDGED" target="_blank" class="cert-link">🔗 View</a></li><li>Guide to Learn SQL with AI <a href="https://academy.dqlab.id/Certificate_check/result/DQLABAI003RHPSVC" target="_blank" class="cert-link">🔗 View</a></li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Other Platforms:</h3><ul class="cert-list"><li>Data Science 101 - Cognitive Class (Aug 2023) <a href="https://courses.cognitiveclass.ai/certificates/2936b568052f49c4ab0e9da478d34969" target="_blank" class="cert-link">🔗 View</a></li><li>Data Visualization for Data Analysis – MySkill (Jul 2023) <a href="https://drive.google.com/file/d/1MZw7Mccktqy5Juq7xQGFgsWXe9TKDqjM/view?usp=sharing" target="_blank" class="cert-link">🔗 View</a></li><li>Intro to Data Analytics – RevoU (Jul 2023) <a href="https://click.mlflow.com/link/c/YT0yMjU1NzEzNzQ4NDYxMjk1NzExJmM9ZjZ6NyZlPTAmYj0xMDYzMDg3ODgyJmQ9bDhnOXY5eQ==.tNFj7vaL8xfAEV6uyVS8bRUBx-ITJ54AkcnMmZkgfN4" target="_blank" class="cert-link">🔗 View</a></li></ul>`,

  cert2022all: `<h2>💼 Google Career Certificates 2022</h2><p><strong>IT Support Professional Specialization</strong></p><p><strong>Provider:</strong> Google via Coursera</p><p><strong>Completion Date:</strong> September 2022</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Specialization Certificate:</h3><ul class="cert-list"><li>IT Support Google - Professional Certificate <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/D73MRT9SQ4P3" target="_blank" class="cert-link">🔗 View</a></li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Course Certificates:</h3><ul class="cert-list"><li>Dasar-Dasar Dukungan Teknis <a href="https://www.coursera.org/account/accomplishments/certificate/TR44C54AKRHD" target="_blank" class="cert-link">🔗 View</a></li><li>Seluk Beluk Jaringan Komputer <a href="https://www.coursera.org/account/accomplishments/certificate/2G7TPNS8GE98" target="_blank" class="cert-link">🔗 View</a></li><li>Sistem Operasi dan Anda: Menjadi Pengguna yang Berdaya <a href="https://www.coursera.org/account/accomplishments/certificate/C45JZZWDYUC8" target="_blank" class="cert-link">🔗 View</a></li><li>Keamanan IT: Pertahanan terhadap Kejahatan Digital <a href="https://www.coursera.org/account/accomplishments/certificate/ZTTQWFKNJDAY" target="_blank" class="cert-link">🔗 View</a></li><li>Administrasi Sistem dan Layanan Infrastruktur TI <a href="https://www.coursera.org/account/accomplishments/certificate/3KXB99KUKZ83" target="_blank" class="cert-link">🔗 View</a></li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Skills Covered:</h3><p style="margin-top: 0.5rem;">Technical Support, Networking, Operating Systems, System Administration, IT Security, Infrastructure Services, Troubleshooting, Customer Service</p>`,

  achieve1: `<h2>🏆 Best Presenter Award</h2><p><strong>The 4th International Conference on Intelligent Cybernetics Technology & Applications (ICICyTA) 2024</strong></p><p><strong>Date:</strong> December 17, 2024</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Achievement Details:</h3><p>Awarded Best Presenter for outstanding presentation of research paper titled "Enhancing Multiclass Classification of Child Nutritional Status Using KNN and Random Forest with SMOTE"</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Significance:</h3><ul style="line-height: 2;"><li>Recognized among international presenters for exceptional research communication</li><li>Demonstrated ability to effectively convey complex technical concepts</li><li>Contributed to healthcare analytics discourse at international level</li></ul>`,

  achieve2: `<h2>🥇 1st Place Story Telling Competition</h2><p><strong>PORAK - Pekan Kreativitas Siswa</strong></p><p><strong>Period:</strong> High School (SMA Negeri 12 Bandung)</p><p><strong>Story Performed:</strong> Malin Kundang</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Achievement Details:</h3><p>Won first place in storytelling competition by performing traditional Indonesian folklore "Malin Kundang" with compelling narrative delivery and stage presence.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Skills Demonstrated:</h3><ul style="line-height: 2;"><li>Public speaking and presentation skills</li><li>Creative performance and expression</li><li>Cultural appreciation and storytelling</li></ul>`,

  achieve3: `<h2>🎓 Accreditation Representative</h2><p><strong>Data Science Program - Telkom University</strong></p><p><strong>Year:</strong> 2024</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Role & Responsibilities:</h3><p>Selected to represent the Data Science program during the official accreditation assessment process, serving as a key point of contact between the accreditation team and the academic program.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Significance:</h3><ul style="line-height: 2;"><li>Demonstrated strong academic standing and communication skills</li><li>Trusted by faculty to represent program quality and student perspective</li><li>Contributed to successful program accreditation</li></ul>`,

  achieve4: `<h2>💼 Entrepreneurship - Basreng Business</h2><p><strong>Role:</strong> Treasurer</p><p><strong>Period:</strong> University Period</p><p><strong>Team Size:</strong> 10 Members</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Business Overview:</h3><p>Led financial management for a student-run Basreng (Indonesian snack) business, overseeing budget planning, revenue tracking, and financial reporting.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Achievements:</h3><ul style="line-height: 2;"><li>Successfully managed business finances and cash flow</li><li>Achieved significant revenue targets through strategic pricing</li><li>Maintained accurate financial records and reporting</li><li>Collaborated with team of 10 to ensure business profitability</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Skills Developed:</h3><ul style="line-height: 2;"><li>Financial management and budgeting</li><li>Business operations and planning</li><li>Team coordination and leadership</li><li>Entrepreneurial mindset</li></ul>`,

  achieve5: `<h2>📝 Revision Team Committee</h2><p><strong>International Conferences</strong></p><p><strong>Conferences:</strong></p><ul style="line-height: 2;"><li><strong>ICoDSA 2025</strong> - International Conference on Data Science and Applications</li><li><strong>ICICyTA 2024</strong> - International Conference on Intelligent Cybernetics Technology & Applications</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Role & Responsibilities:</h3><p>Served as a member of the paper revision committee for two international conferences, responsible for reviewing and providing feedback on submitted research papers.</p><h3 style="margin-top:1.5rem; color:var(--mauve)">Key Contributions:</h3><ul style="line-height: 2;"><li>Reviewed multiple research papers for technical accuracy and clarity</li><li>Provided constructive feedback to authors for paper improvement</li><li>Collaborated with academic committee members in evaluation process</li><li>Contributed to maintaining high conference publication standards</li></ul><h3 style="margin-top:1.5rem; color:var(--mauve)">Skills Demonstrated:</h3><ul style="line-height: 2;"><li>Technical writing and review</li><li>Critical analysis and evaluation</li><li>Academic research standards</li><li>Professional communication</li></ul>`,
};

function openModal(type) {
  document.getElementById("modalBody").innerHTML =
    modalContent[type] || "<h2>Content not found</h2>";
  document.getElementById("modal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.body.style.overflow = "auto";
}

window.onclick = function (e) {
  if (e.target == document.getElementById("modal")) closeModal();
};

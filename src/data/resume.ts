export const resumeData = {
  name: 'Faris Mashaleh',
  title: 'Data Engineer / Data Analyst',
  tagline: 'I am the Blacksmith, AI is my Hammer, and the world is my Anvil.',
  bio: `Detail-oriented IT professional and aspiring Data Engineer / Data Analyst with a strong foundation in
    data analysis, reporting, and process improvement. Experienced translating operational data into
    actionable insights — from consolidating P&L and sales reports to tracking KPIs, forecasting demand,
    and building data-driven workflows across retail and technical environments. Proficient in SQL, Python,
    Pandas, Power BI, Excel, and cloud platforms (Azure, AWS). Background in systems thinking,
    project management, and cross-functional collaboration. Open to relocation anywhere in the
    continental United States.`,
  contact: {
    email: 'Farismash28@gmail.com',
    github: 'https://github.com/farismash28',
    linkedin: 'https://linkedin.com/in/farismashaleh',
  },
  experience: [
    {
      role: 'Electronics Technician',
      company: 'Micro Center  •  St. Louis, MO',
      period: 'Mar 2026 – Present',
      description:
        'Diagnose and repair consumer and enterprise electronics including desktops, laptops, smartphones, gaming consoles, and servers. Perform component-level hardware repairs (motherboards, CPUs, RAM, storage, GPU, screens) and resolve software issues including OS corruption, boot failures, malware removal, and data recovery. Configure and deploy servers; troubleshoot network connectivity, RAID arrays, and storage systems for small business clients.',
      tags: ['Hardware Repair', 'Server Config', 'Data Recovery', 'Diagnostics', 'Networking'],
    },
    {
      role: 'Fiber Optics Specialist',
      company: 'AT&T  •  St. Louis, MO',
      period: 'Sep 2025 – Feb 2026',
      description:
        'Spliced, terminated, and tested single-mode fiber for residential and business installations; ensured low-loss, spec-compliant connections. Integrated gateways with existing networks including VLANs and static IP/passthrough configurations. Validated connectivity using optical power measurements; troubleshot RF interference and optimized channel plans.',
      tags: ['Fiber Optics', 'Networking', 'VLANs', 'ONT/Gateway', 'WDM'],
    },
    {
      role: 'Restaurant Manager',
      company: 'King Grill  •  Overland, MO',
      period: 'Sep 2024 – Aug 2025',
      description:
        'Managed day-to-day operations and P&L; analyzed labor, product, and service costs against budget targets to identify optimization opportunities. Forecasted customer demand using historical sales trends and adjusted staffing models to reduce labor overspend. Tracked KPIs across service and operations; developed SOPs based on performance data and managed inventory with data-driven reorder controls.',
      tags: ['P&L Analysis', 'KPI Tracking', 'Forecasting', 'Excel', 'Operations'],
    },
    {
      role: 'Store Operations & IT Management',
      company: 'Paradise Beauty Supplies  •  St. Louis, MO',
      period: 'Jan 2015 – Jun 2025',
      description:
        'Progressed from Cashier to Regional Manager overseeing multi-store operations, staffing, and P&L. Consolidated and analyzed sales, labor, and expense data in Excel; produced monthly/quarterly reports for ownership. Managed multi-department inventory using cycle count data and vendor analytics. Provided IT support and maintained local servers and network infrastructure across store locations.',
      tags: ['Excel', 'Data Analysis', 'Inventory', 'IT Support', 'Operations'],
    },
  ],
  projects: [
    {
      name: 'AMMS — Asset Maintenance Management System',
      description:
        'Led a team to design and deliver a full-stack web application for a lawn care business, replacing manual spreadsheet-based equipment tracking with a digital maintenance workflow. Defined 20+ features across 4 project phases (Waterfall/Agile) including asset registry, PM scheduling, work order lifecycle, and reporting. Deployed on Render.com with Gunicorn/PostgreSQL.',
      tags: ['Python', 'Flask', 'React 19', 'TypeScript', 'PostgreSQL', 'Project Management'],
      github: '',
      live: '',
    },
    {
      name: 'IT Infrastructure & Cost Analytics Dashboard',
      description:
        'Built an end-to-end IT analytics pipeline ingesting simulated help desk, hardware inventory, and software license data into a normalized SQL database. Power BI dashboard tracks KPIs including ticket resolution time, SLA compliance, hardware lifecycle status, and per-department IT cost breakdowns. Hosted on Azure SQL with Power BI DirectQuery connection.',
      tags: ['Power BI', 'SQL', 'Python', 'Azure SQL', 'ETL', 'Data Analytics'],
      github: '',
      live: '',
    },
    {
      name: 'Presentation Evaluation Tool',
      description:
        'Desktop application enabling instructors to score and persist student team presentations against a four-criterion rubric (technicality, usefulness, clarity, overall), with scores mapped to a letter-grade scale. Designed a normalized Apache Derby schema integrated via JDBC; implemented bidirectional DB sync including dynamic dropdowns, live grade-average calculation, and full submit/retrieve lifecycle.',
      tags: ['Java', 'Java Swing', 'JDBC', 'Apache Derby', 'Maven'],
      github: '',
      live: '',
    },
    {
      name: 'Payroll Processing System',
      description:
        'Menu-driven payroll application supporting three employee compensation models (Hourly, Salaried, Commission) with gross pay, tax, and net pay calculations. Modeled an inheritance hierarchy mirroring table-per-type schema design; implemented Java object serialization for cross-session data persistence and input validation with re-prompt loops.',
      tags: ['Java', 'OOP', 'Serialization', 'Data Modeling'],
      github: '',
      live: '',
    },
    {
      name: 'Interplanetary Route Validator',
      description:
        'Graph-based system that validates pilot flight routes across a network of planets and calculates total payload weights from multi-file input data. Built a custom adjacency-list graph from scratch, a multi-file ingest pipeline, and a route-validation engine that traverses the graph to verify connections and flag invalid routes.',
      tags: ['C++', 'Data Structures', 'Graph Algorithms', 'File I/O'],
      github: '',
      live: '',
    },
  ],
  events: [
    {
      name: "Women's Hackathon 2026 – UMSL",
      role: 'Logistics Coordinator & Solutions Owner',
      period: '2026',
      link: 'https://umslwomenshack.web.app/',
      description:
        'Managed a $3,000 event budget and secured an additional $1,500 in supplemental funding ($4,500 total). Oversaw end-to-end procurement and delivery of all event materials. Acted as primary cross-functional liaison between logistics, operations, and marketing teams. Scaled attendance to 60+ participants — the highest turnout in Women\'s Hack at UMSL history — and supported delivery of a full-day hackathon with keynote speakers, mentors, and $1,125 in prize awards.',
      tags: ['Event Management', 'Budget Management', 'Cross-functional Leadership', 'Logistics'],
    },
  ],
  education: {
    degree: 'Bachelor of Science — Information Systems Technology / Management',
    school: 'University of Missouri, St. Louis',
    period: 'May 2026',
    gpa: '3.3',
    honors: "Dean's List",
  },
  certifications: [
    { name: 'Dell Certified Technician', status: 'Active' },
    { name: 'Lenovo Certified Technician', status: 'Active' },
    { name: 'HP Certified Technician', status: 'Active' },
    { name: 'Apple Certified Technician', status: 'Active' },
    { name: 'OSHA Certified', status: 'Active' },
    { name: 'CPR Certified', status: 'Active' },
  ],
  skills: [
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 88 },
    { name: 'Power BI', level: 80 },
    { name: 'Excel / Data Analysis', level: 88 },
    { name: 'Pandas / Data Modeling', level: 80 },
    { name: 'Azure', level: 75 },
    { name: 'AWS', level: 72 },
    { name: 'Windows', level: 95 },
    { name: 'Linux', level: 82 },
    { name: 'Business Analysis', level: 84 },
    { name: 'Java / C++', level: 72 },
    { name: 'Agile / Waterfall', level: 80 },
  ],
};

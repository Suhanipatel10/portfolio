window.portfolioData = {
  name: "Suhani Patel",
  title: "Aspiring Product Manager",
  intro:
    "I approach problems with a product mindset - breaking down messy, real-world challenges into structured solutions. I focus on understanding user needs, analyzing the market, gaining data insights, and designing clear, practical workflows that help teams make better decisions.",
  about:
    "Detail-oriented and analytical, with a strong interest in product thinking, user experience, and problem-solving. I enjoy working at the intersection of data, systems, and decision-making - using tools like SQL, Python, and dashboards to uncover insights and improve, manage, and track processes through tools like Jira and Trello. Through hands-on projects, I've developed experience in defining problems, designing solutions, and documenting them through structured frameworks like PRDs, user flows, and metrics. I'm particularly interested in building products that are intuitive, efficient, and create real value for users.",
  highlights: [
    { label: "Focus", value: "Problem-solving, product thinking, and user-centric solutions" },
    { label: "Style", value: "Structured thinking with clear, low-friction user experiences" },
    { label: "Value", value: "Turning ambiguous problems into actionable product decisions" }
  ],
  skills: {
    delivery: ["Requirement gathering", "Stakeholder communication", "Feature prioritization", "Process improvement", "PRD"],
    tooling: ["Jira", "Figma", "Notion", "Power BI", "Tableau", "Git", "Jupyter", "VS Code", "MySQL", "Docker"],
    build: ["SQL", "Python", "Pandas", "NumPy", "Data Cleaning", "EDA", "Excel", "Statistics"]
  },
  projectGroups: [
    {
      id: "cs",
      title: "Case Studies",
      eyebrow: "Lead",
      description:
        "Planning, reporting, documentation, and stakeholder-friendly outputs. This track is for work that shows structure, ownership, and clarity.",
      ctaLabel: "See All",
      projects: ["case-study-demo"]
    },
    {
      id: "pm",
      title: "Management Projects",
      eyebrow: "Data Insights",
      description:
        "Planning, reporting, documentation, and stakeholder-friendly outputs. This track is for work that shows structure, ownership, and clarity.",
      ctaLabel: "See All",
      projects: ["kpi-analysis", "career-track-analysis", "Walmart Sales Analysis Dashboard"]
    },
    {
      id: "development",
      title: "Developer Projects",
      eyebrow: "Build",
      description:
        "Hands-on analysis, dashboards, automation, and technical problem solving. These are the pieces that show how I work with code and data.",
      ctaLabel: "See All",
      projects: ["gesture-drawing-app", "rainfall-prediction-model", "failure-prediction"]
    }
  ],
  projects: [
    {
      slug: "case-study-demo",
      category: "cs",
      title: "Domino's - Enhanced Customer Support",
      stack: ["Feature Improvement"],
      document: "assests/logo.png",
      logo: "assests/logo.png",
      prd: "assests/PRD_Dominos.pdf",
      caseStudyBlocks: [
        {
          type: "text",
          title: "1. Context & Problem",
          body: "While ordering from Domino’s, I experienced a situation where the delivered order was incorrect. When I tried to resolve it through the app, the process felt slow, unclear, and heavily dependent on chatbot interactions. The system offered compensation (like vouchers) instead of actually solving the problem. This highlighted a broader product issue: in a high-frequency product like Domino’s, even small failures in order accuracy can significantly impact user trust if the resolution experience is not seamless.",

        },
        {
          type: "text",
          title: "2. Understanding the Problem",
          body: "The current support experience requires users to navigate through predefined chatbot flows, often without clarity on what will happen next. Users have limited control over how the issue is resolved, and the process feels reactive rather than guided. From a user’s perspective, the frustration is not just about receiving the wrong item—it’s about the effort required to fix it. Many users may choose not to report issues at all, leading to silent dissatisfaction and reduced trust in the platform.",
        },
        {
          type: "text",
          title: "3. Root Cause & Key Insight",
          body: `After breaking down the experience, the problem was not just incorrect orders, but the way the system handles them.<br>
        • The complaint flow is unstructured and not user-driven<br>
        • There is no item-level issue reporting<br>
        • Resolution options are not clearly presented<br>
        • There is limited visibility into the status of the issue<br><br>
        <strong>Key Insight:</strong><br>
        The real problem is not issue resolution itself, but the absence of a structured, transparent, and user-controlled resolution process.` ,
        },
        {
          type: "text",
          title: "Existing Experience: Unstructured Issue Resolution Flow",
          body: "Users rely on a chatbot-driven system that lacks structure, clarity, and control, leading to inefficient issue resolution.",
        },
        {
          type: "image",
          src: "assests/Original_flow.png"
        },
        {
          type: "text",
          title: "4. Solution Exploration & Decision",
          body: `The solution introduces a guided, step-by-step issue resolution flow integrated within the order details screen.<br>
        Instead of relying on open-ended chat interactions, the system helps users:<br>
        • Clearly identify the issue (wrong item, missing item, delay)<br>
        • Select the specific item affected<br>
        • Upload an image for quick verification<br>
        • Choose how they want the issue resolved (refund or replacement)<br>
        • Track the progress of their request in real-time<br>
        This transforms the experience from reactive support to a structured decision flow.`,
        },
        {
          type: "text",
          title: "5. Final Solution",
          body: `The solution introduces a guided, step-by-step issue resolution flow integrated within the order details screen.<br><br>
        • Clearly identify the issue (wrong item, missing item, delay)<br>
        • Select the specific item affected<br>
        • Upload an image for quick verification<br>
        • Choose how they want the issue resolved (refund or replacement)<br>
        • Track the progress of their request in real-time`
        },
        {
          type: "text",
          title: "Proposed Solution: Structured Issue Resolution Flow",
          body: "A guided, step-by-step resolution flow that simplifies issue reporting, improves clarity, and gives users control over outcomes.",
        },
        {
          type: "image",
          src: "assests/User_flow.png"
        },
        {
          type: "text",
          title: "6. Impact & Metrics",
          body: "To evaluate the effectiveness of the improved issue resolution system, the following metrics focus on speed, user experience, and trust recovery."
        },
        {
          type: "image",
          src: "assests/Metrics_table_1.png"
        },
        {
          type: "image",
          src: "assests/Metrics_table_2.png"
        },
        {
          type: "text",
          title: "7. Summary",
          body: "By shifting from a chatbot-driven approach to a structured resolution flow, the system becomes more predictable, transparent, and user-friendly. This not only reduces friction for users but also creates a scalable framework for handling post-order issues, ultimately strengthening trust and long-term engagement.",
        },
      ],
    },
    {
      slug: "gesture-drawing-app",
      category: "development",
      title: "Gesture-Based Drawing Application",
      description:
        "Built a real-time gesture-controlled drawing system using computer vision, enabling users to create and manipulate digital art without physical input devices.",
      stack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      video: "assests/Perfect_gesture_drawing_guide (1).mp4",
      github: "https://github.com/Suhanipatel10/Gesture_drawing",
      longDescription:
        "This project explores human-computer interaction through a gesture-based interface that replaces traditional input devices like a mouse or stylus. Using MediaPipe for hand landmark detection and OpenCV for real-time rendering, the system enables users to draw, create shapes, adjust colors, and interact with the canvas using intuitive hand gestures. The application supports both freehand and assist modes, ensuring a balance between creative freedom and structured editing. Special focus was given to low-latency processing, gesture accuracy, and UX clarity to create a seamless and responsive user experience.",
      outcomes: [
        "Enabled real-time drawing and shape manipulation using only hand gestures",
        "Designed an intuitive gesture-based UI for tool selection and interaction",
        "Built a low-latency processing pipeline for smooth user experience",
        "Demonstrated practical application of computer vision in interactive systems"
      ]
    },
    {
      slug: "rainfall-prediction-model",
      category: "development",
      title: "Rainfall Prediction using Hybrid ML Model",
      description:
        "Developed a hybrid forecasting model combining SARIMAX and Gradient Boosting to predict rainfall patterns with improved accuracy and realistic seasonality.",
      stack: ["Python", "SARIMAX", "Scikit-learn", "Pandas"],
      images: [
        "assests/Prediction.png",
        "assests/Train_test.png"
      ],
      github: "https://github.com/Suhanipatel10/Rainfall-Prediction-using-Hybrid-ML-model",
      longDescription:
        "This project focuses on improving rainfall forecasting accuracy by combining SARIMAX for capturing long-term trends and seasonality with Gradient Boosting for modeling residual patterns and extreme events. Using over 20 years of historical monthly rainfall data, the model generates realistic 5-year forecasts while maintaining seasonal consistency and handling anomalies like sudden rainfall spikes. Additional enhancements such as feature engineering (lags, rolling statistics), noise injection, and percentile-based spike control were implemented to ensure more stable and interpretable predictions. The model was evaluated using RMSE and R², demonstrating strong predictive performance and robustness for real-world forecasting scenarios.",
      outcomes: [
        "Achieved strong predictive performance (RMSE: 1.18, R²: 0.73)",
        "Improved handling of extreme rainfall events using hybrid modeling",
        "Generated realistic long-term forecasts with seasonal consistency",
        "Demonstrated practical application of combining statistical and ML models"
      ]
    },
    {
      slug: "failure-prediction",
      category: "development",
      title: "Smart Factory Failure Prediction",
      description:
        "Built a predictive maintenance system using machine learning to detect potential machine failures from real-time sensor inputs.",
      stack: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy"],
      images: [
        "assests/Machine_success.png",
        "assests/Machine_failure.png"
      ],
      github: "https://github.com/Suhanipatel10/Smart-Factory-Faliure-Prediction",
      longDescription:
        "This project simulates a smart factory environment where machine failures are predicted in advance using real-time sensor data. A Random Forest model was trained on the AI4I predictive maintenance dataset to identify failure patterns based on inputs such as torque, rotational speed, tool wear, and temperature. The model was deployed as an interactive Streamlit web app, allowing users to input live values and receive predictions along with contextual explanations. The system emphasizes practical application by highlighting key risk factors (e.g., high torque + tool wear) and enabling proactive decision-making. With a strong ROC-AUC score of 0.98, the model demonstrates high reliability for predictive maintenance use cases.",
      outcomes: [
        "Achieved high model performance (ROC-AUC: 0.98) for failure prediction",
        "Enabled real-time prediction through an interactive web interface",
        "Identified key failure drivers such as torque and tool wear",
        "Demonstrated shift from reactive to predictive maintenance, reducing downtime risk"
      ]
    },
    {
      slug: "kpi-analysis",
      category: "pm",
      title: "Factory OEE & Downtime Analysis Dashboard",
      description:
        "Analysed the machinery output and data readings to identify success metrics and maintenance KPIs to identify shifts in demand and performance over time.",
      stack: ["PowerBI", "Excel"],
      images: [
        "assests/Quality Analysis page of Dashboard.png",
        "assests/Performance Analysis page of Dashboard.png",
        "assests/Factors Affecting Analysis page of Dashbaord.png"
      ],
        github: "https://github.com/Suhanipatel10/Smart-Factory-OEE-Downtime-Analysis-Power-BI-Dashboard",
      longDescription:
        "A product-focused analysis project aimed at understanding performance patterns and identifying key metrics that influence system efficiency. The work involved analyzing machinery output and operational data to uncover trends, define meaningful KPIs, and translate findings into structured insights that can support decision-making and process improvements across different use cases.",
      outcomes: [
        "Identified key performance and maintenance metrics to track system efficiency",
        "Translated raw data into structured insights for decision-making",
        "Developed a reusable approach for analyzing performance trends across domains"
      ]
    },
    {
      slug: "career-track-analysis",
      category: "pm",
      title: "Career Track Analysis",
      description:
        "Built a structured dataset using SQL to track student progress across career tracks, including completion status, time to complete, and behavioral patterns over time.",
      stack: ["SQL", "Excel"],
      images: [
        "assests/Career_Dashboard.png",
        "assests/Career_barchart.png",
        "assests/Career_bar+line.png"
      ],
      github: "https://github.com/Suhanipatel10/Career-Track-Analysis",
      longDescription:
        "This project simulates how a Product Manager evaluates user engagement and retention in an ed-tech platform post-launch. Using SQL, I transformed raw enrollment data into actionable metrics such as completion rates, time-to-completion buckets, and monthly trends. Tableau was used to visualize user behavior, helping identify drop-offs, high-performing tracks, and engagement patterns. The goal was to move beyond raw data and extract insights that could inform product decisions like improving onboarding, optimizing course length, and increasing completion rates.",
      outcomes: [
        "Identified that majority of users complete tracks within 30 days, indicating strong early engagement",
        "Segmented users based on completion time to highlight drop-off and long-tail behavior",
        "Tracked monthly enrollment vs completion trends to evaluate product consistency",
        "Highlighted high-performing tracks to guide content and product investment decisions"
      ]
    },
    {
      slug: "Walmart Sales Analysis Dashboard",
      category: "pm",
      title: "Sales Performance Dashboard",
      description:
        "Built an executive-friendly dashboard to track revenue, margin, and category performance across time periods and regions.",
      stack: ["Power BI", "SQL", "Excel"],
      image: "assests/Walmart_dashboard.png",
      github: "https://github.com/Suhanipatel10/Walmart-Sales-Analysis",
      longDescription:
        "This project focused on giving leadership a concise, reliable view of sales performance. The dashboard was designed to surface high-level KPIs first, then allow deeper exploration by region, category, and time period. It was structured to reduce reporting friction and support fast decision-making.",
      outcomes: [
        "Unified key sales metrics into one executive dashboard",
        "Reduced manual analysis time with repeatable views",
        "Improved visibility into category and regional performance"
      ]
    }
  ],
  experience: [
    {
      role: "Research Analyst",
      company: "Indian Space Research Organization",
      period: "2026",
      bullets: [
        "Worked with large-scale IMD weather datasets to address real-world rainfall forecasting challenges, improving data readiness and model usability for downstream analysis.",
        "Enhanced model performance using SE attention blocks and residual learning for better feature extraction.",
        "Designed a gradient loss function to preserve spatial patterns and avoid over-smoothing along with root-mean-standard-deviation (RMSD), bias and correlation coefficient for performance evaluation compared to WRF forecasts"
      ]
    },
    {
      role: "Research Analyst",
      company: "Indian Meteorological Centre",
      period: "2025",
      bullets: [
        "Built an end-to-end hybrid forecasting pipeline combining SARIMAX and Gradient Boosting Machines, improving rainfall spike prediction performance while maintaining the ability to capture seasonal variability.",
        "Engineered spike-aware monsoon features and optimized transformations including log1p and Box-Cox, increasing model stability and forecast sensitivity for extreme rainfall events.",
        "Produced multi-year probabilistic rainfall forecasts and conducted diagnostic analyses using ACF, Q-Q plots, and residual mapping, enabling more reliable interpretation of forecast uncertainty."
      ]
    },
    {
      role: "Business Analyst",
      company: "Forensic Knight",
      period: "2024 - 2025",
      bullets: [
        "Collaborated with cross-functional startup teams to align product goals, user needs, and business priorities, helping streamline feature planning and decision-making.",
        "Gathered and translated stakeholder requirements into clear business and functional documentation, reducing ambiguity in development handoffs and improving execution efficiency.",
        "Prepared BRDs, SRS, and FRDs that supported product delivery and stakeholder communication throughout the project.",
        "Worked closely with cross-functional teams to prioritize features and streamline product execution."
      ]
    }
  ],
  certifications: [
    {
      name: "AI Product Management",
      issuer: "Microsoft"
    },
    {
      name: "Getting Started with Jira",
      issuer: "Coursera"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      school: "Pandit Deendayal Energy University",
      period: "2022 - 2026"
    }
  ],
  contact: {
    email: "suhani.patel1002@gmail.com",
    linkedin: "https://www.linkedin.com/in/suhanipatel1025/",
    github: "https://github.com/Suhanipatel10",
  }
};

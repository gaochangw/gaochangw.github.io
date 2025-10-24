export const siteConfig = {
  name: "Chang Gao",
  title: "Assistant Professor of Neuromorphic Engineering",
  description:
    "Personal website and curriculum vitae of Chang Gao, Assistant Professor in the Department of Microelectronics at Delft University of Technology.",
  accentColor: "#00A6D6",
  location: "Delft, Netherlands",
  contact: [
    // {
    //   label: "Personal Email",
    //   value: "gaochangw@gmail.com",
    //   url: "mailto:gaochangw@gmail.com",
    // },
    {
      label: "Work Email",
      value: "chang.gao@tudelft.nl",
      url: "mailto:chang.gao@tudelft.nl",
    },
    {
      label: "Office",
      value: "HB 19.280, Mekelweg 4, 2628 CD Delft, Netherlands",
    },
    {
      label: "Research Group",
      value: "tudemi.com",
      url: "https://www.tudemi.com",
    },
    {
      label: "Bibliometric",
      value: "Google Scholar",
      url: "https://scholar.google.ch/citations?user=sQ9N7dsAAAAJ&hl=en",
    },
    {
      label: "ORCID",
      value: "0000-0002-3284-4078",
      url: "https://orcid.org/0000-0002-3284-4078",
    },
  ],
  aboutMe:
    "Chang Gao is an Assistant Professor in the Department of Microelectronics at Delft University of Technology. His research bridges neuromorphic hardware-software co-design, edge intelligence, and energy-efficient system architectures for applications spanning wireless communication, extended reality, and healthcare.",
  generalInfo: [
    { label: "Nationality", value: "Chinese" },
    { label: "Date of Birth", value: "22 April 1992" },
    { label: "Location", value: "Delft, Netherlands" },
  ],
  // metrics: [
  //   "Google Scholar: h-index 15 · i10-index 19 (Aug 2025)",
  //   "Co-leads the TU Delft MSc Digital Systems Profile",
  //   "Supervision: 3 PhD, 5 MSc, 10 MSc alumni",
  // ],
  // skills: [
  //   "Neuromorphic HW-SW Co-Design",
  //   "Edge AI & AIoT",
  //   "Energy-Efficient IC Design",
  //   "Digital & Mixed-Signal ASIC",
  //   "FPGA Prototyping",
  //   "Wireless Systems",
  // ],
  projectsTitle: "Research Grants & Strategic Projects",
  projects: [
    {
      name: "NWO Veni — Energy-Efficient Real-Time Edge Intelligence for Wearable Healthcare Devices",
      date: "2024",
      description:
        "Prestigious Dutch Young Scholar grant (€320k) for a 48-month program advancing energy-aware signal processing and inference for wearable healthcare platforms.",
      skills: ["Edge AI", "Healthcare", "Energy Efficiency"],
    },
    {
      name: "Top Consortium for Knowledge and Innovation (TKI) Partnership",
      date: "2024",
      description:
        "Co-funded PhD research (€495k cash · €186k in kind) with NXP Semiconductors on AI-assisted calibration for high-performance data converters.",
      skills: ["Mixed-Signal IC", "AI-Assisted Calibration", "Industrial Partnership"],
    },
    {
      name: "Industry-Funded PhD — Ampleon Netherlands",
      date: "2024",
      description:
        "Joint research program on neural-network-driven digital pre-distortion of wideband RF power amplifiers for next-generation wireless communication.",
      skills: ["Digital Predistortion", "Wideband RF", "Neural Networks"],
    },
    {
      name: "GlobalFoundries GF12LP+ University Partnership",
      date: "2024",
      description:
        "Secured multi-year access to 12 nm FinFET technology and tape-out runs for AI-powered high-speed signal processing integrated circuits.",
      skills: ["Advanced CMOS", "Signal Processing ICs", "Technology Transfer"],
    },
    {
      name: "Marie Curie Postdoctoral Fellowship — AIRHAR",
      date: "2023",
      description:
        "European Commission fellowship (€203k) developing an energy-efficient portable radar system for human activity recognition.",
      skills: ["Radar Sensing", "Embedded AI", "Research Leadership"],
    },
  ],
  experienceTitle: "Academic Appointments",
  experience: [
    {
      company: "Delft University of Technology",
      title: "Assistant Professor, Department of Microelectronics",
      dateRange: "Aug 2022 – Present",
      bullets: [
        "Lead the Neuromorphic Edge Intelligence research thrust with a focus on energy-efficient HW-SW co-design for AIoT.",
        "Co-lead the MSc Digital Systems Profile and coordinate courses including ET4351, EE4C13, EEX05, and EE2C2.",
        "Supervise 3 PhD and 5 MSc candidates; graduated 10 MSc students since 2022.",
        "Secured competitive grants including NWO Veni, TKI Partnership, and GlobalFoundries GF12LP+ program.",
      ],
    },
    {
      company: "Institute of Neuroinformatics, University of Zürich & ETH Zürich",
      title: "Postdoctoral Researcher",
      dateRange: "Jan 2022 – Jul 2022",
      bullets: [
        "Advanced energy-efficient deep-learning hardware in collaboration with Prof. Shih-Chii Liu and Prof. Tobi Delbruck.",
        "Managed a transitional research program while preparing the new research agenda at TU Delft.",
        "Mentored postgraduate researchers on neuromorphic accelerators and embedded AI systems.",
      ],
    },
  ],
  educationTitle: "Education",
  education: [
    {
      school: "Institute of Neuroinformatics, University of Zürich & ETH Zürich",
      degree: "Ph.D. in Neuroinformatics",
      dateRange: "Jan 2017 – Dec 2021",
      achievements: [
        "Dissertation: Energy-Efficient Recurrent Neural Network Accelerator for Real-Time Inference (Distinction).",
        "Funded by Samsung Advanced Institute of Technology and the Swiss National Science Foundation.",
        "200+ hours of teaching assistance across instrumentation, measurement, and digital electronics.",
      ],
    },
    {
      school: "Imperial College London",
      degree: "M.Sc. Analog and Digital Integrated Circuit Design (Distinction, Rank 1)",
      dateRange: "Sep 2015 – Dec 2016",
      achievements: [
        "Thesis: Full-custom design of a mixed-signal physical unclonable function in 350 nm technology.",
        "Awarded the MSc Outstanding Achievement Award for top performance.",
      ],
    },
    {
      school: "University of Liverpool & Xi’an Jiaotong-Liverpool University",
      degree: "B.Eng. in Electronics (First-Class Honours, 2+2 Joint Program)",
      dateRange: "Sep 2011 – Aug 2015",
      achievements: [
        "Thesis: Simulation & Measurement of Zinc Oxide Thin-film Transistors.",
        "Received scholarships for academic excellence, including 50% tuition support.",
      ],
    },
  ],
  honorsTitle: "Honors & Recognition",
  honors: [
    {
      title: "MIT Technology Review Innovators Under 35 Europe",
      organization: "MIT Technology Review",
      year: "2023",
      description:
        "Recognized for innovations enabling wearable and portable devices to deliver 24/7 health monitoring.",
      link: "https://www.innovatorsunder35.com/the-list/chang-gao/",
    },
    {
      title: "Mahowald Early Career Award for Neuromorphic Engineering",
      organization: "Misha Mahowald Prize Committee",
      year: "2022",
      description:
        "Honored for contributions to neuromorphic algorithms and hardware enabling real-time energy-efficient RNN inference.",
      link: "https://www.mahowaldprize.org/prize-awards/prizes-2022",
    },
    {
      title: "Distinction for Doctoral Thesis",
      organization: "Faculty of Science, University of Zürich",
      year: "2022",
      description:
        "Awarded to dissertations representing the top 5% in scientific quality within the faculty.",
    },
    {
      title: "Best Paper Award — IEEE AICAS",
      organization: "IEEE Circuits and Systems Society",
      year: "2020",
      description:
        "Recognized for the EdgeDRNN recurrent neural network accelerator for edge inference.",
    },
    {
      title: "MSc Outstanding Achievement Award",
      organization: "Imperial College London",
      year: "2016",
      description:
        "Acknowledged as the top-performing student in the Analog and Digital Integrated Circuit Design program.",
    },
  ],
  publicationsTitle: "Selected Publications & Patents",
  publications: [
    {
      title:
        "Neural network-based inference method and apparatus (US Patent 12 299 576 B2)",
      authors: "C. Gao, S.-C. Liu, T. Delbruck, X. Chen",
      venue: "Issued May 13, 2025",
    },
    {
      title:
        "DeltaDPD: Exploiting Dynamic Temporal Sparsity in Recurrent Neural Networks for Energy-Efficient Wideband Digital Predistortion",
      authors: "Y. Wu, Y. Zhu, K. Qian, Q. Chen, A. Zhu, J. Gajadharsing, L. de Vreede, C. Gao",
      venue: "IEEE MTT-S International Microwave Symposium (IMS), 2025 — Top 50 Paper",
    },
    {
      title:
        "Spartus: A 9.4 TOp/s FPGA-Based LSTM Accelerator Exploiting Spatio-Temporal Sparsity",
      authors: "C. Gao, T. Delbruck, S.-C. Liu",
      venue: "IEEE Transactions on Neural Networks and Learning Systems, 2024",
    },
    {
      title:
        "MP-DPD: Low-Complexity Mixed-Precision Neural Networks for Energy-Efficient Digital Pre-distortion of Wideband Power Amplifiers",
      authors: "Y. Wu, A. Li, M. Beikmirza, G. D. Singh, Q. Chen, L. de Vreede, M. Alavi, C. Gao",
      venue: "IEEE Microwave and Wireless Technology Letters, 2024 — IMS Top 50 Paper",
    },
    {
      title:
        "EdgeDRNN: Recurrent Neural Network Accelerator for Edge Inference",
      authors: "C. Gao, A. Rios-Navarro, X. Chen, S.-C. Liu, T. Delbruck",
      venue: "IEEE Journal on Emerging and Selected Topics in Circuits and Systems, 2020",
    },
    {
      title:
        "DeltaRNN: A Power-efficient Recurrent Neural Network Accelerator",
      authors: "C. Gao, D. Neil, E. Ceolini, S.-C. Liu, T. Delbruck",
      venue: "ACM/SIGDA FPGA, 2018",
    },
  ],
  serviceTitle: "Professional Service & Community",
  service: [
    {
      role: "Inaugural Committee Member",
      organization:
        "IEEE Circuits and Systems Society Technical Committee on Machine Learning Circuits and Systems (MLCAS)",
      dateRange: "2024 – Present",
    },
    {
      role: "Lead Organizer",
      organization:
        "Efficient Event-based Eye-Tracking (3ET) Challenge, CVPR 2025 Workshop on Event-based Vision",
      dateRange: "2024 – 2025",
    },
    {
      role: "Technical Program Committee",
      organization:
        "IEEE ISCAS 2024 & 2025 (Neuromorphic Systems, Transformers & Applications tracks)",
      dateRange: "2024 – 2025",
    },
    {
      role: "Reviewer",
      organization:
        "33+ journal reviews across IEEE TVLSI, TCAS-I, TBioCAS, JETCAS, TPAMI, Nature Computational Science, and more",
      dateRange: "2017 – Present",
    },
  ],
};

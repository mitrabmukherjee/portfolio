export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  /** Case study narrative: each string is one step/paragraph shown in sequence with animation. */
  caseStudySteps?: string[];
  tech: string[];
  href?: string;
  hrefLabel?: string;
  image?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    id: "autosteamyara",
    title: "AutoSteamYARA",
    shortDescription: "AI-powered YARA rule generation and malware detection.",
    description:
      "Automated YARA rule generation and malware detection using AI/ML. The system learns patterns from malicious binaries and security telemetry to generate robust detection rules and improve threat coverage.",
    caseStudySteps: [
      "Automated YARA rule generation and malware detection using AI/ML.",
      "The system learns patterns from malicious binaries and security telemetry to generate robust detection rules and improve threat coverage.",
    ],
    tech: ["Python", "Machine Learning", "Security"],
    category: "Security & ML",
  },
  {
    id: "deepfake-detection",
    title: "Deepfake Detection",
    shortDescription: "Deep learning system to identify manipulated media.",
    description:
      "Deep learning system to detect deepfake images and videos. Combines convolutional neural networks with artefact analysis to distinguish manipulated media from authentic content.",
    caseStudySteps: [
      "Deep learning system to detect deepfake images and videos.",
      "Combines convolutional neural networks with artefact analysis to distinguish manipulated media from authentic content.",
    ],
    tech: ["Python", "CNN", "Deep Learning"],
    category: "Computer Vision",
  },
];

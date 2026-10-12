export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  period: string;
  status: string;
  details: string;
}

export const educations: EducationEntry[] = [
  {
    institution: "Manipal Academy of Higher Education",
    degree: "Master of Computer Applications (MCA)",
    location: "Manipal, Karnataka, India",
    period: "October 2025 – Present",
    status: "Currently Pursuing",
    details: "Advanced curriculum covering computer science fundamentals, enterprise software engineering, distributed systems, and modern database management."
  },
  {
    institution: "SN College Chempazhanthy, University of Kerala",
    degree: "Bachelor of Science in Chemistry",
    location: "Thiruvananthapuram, Kerala, India",
    period: "2017 – 2020",
    status: "Completed",
    details: "Rigorous scientific education emphasizing analytical problem-solving, laboratory methodology, systematic research, and empirical deduction."
  }
];

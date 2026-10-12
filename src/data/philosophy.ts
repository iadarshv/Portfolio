export interface PhilosophyPrinciple {
  number: string;
  title: string;
  quote: string;
  elaboration: string;
}

export const philosophies: PhilosophyPrinciple[] = [
  {
    number: "01",
    title: "Maintainability",
    quote: "Build code that remains understandable and practical to extend.",
    elaboration: "Code is read far more often than it is written. Clear naming, predictable folder structures, sensible typing, and modular boundaries pay dividends long after the initial commit."
  },
  {
    number: "02",
    title: "Thoughtful Integration",
    quote: "Make APIs and services work together through consistent contracts and predictable behavior.",
    elaboration: "Whether connecting a React interface to an Express route, wiring AWS EventBridge to Lambda, or integrating third-party gateways, reliable systems depend on explicit error envelopes and shared contracts."
  },
  {
    number: "03",
    title: "Performance",
    quote: "Pay attention to queries, background processing, and the details that affect reliability.",
    elaboration: "True optimization happens where users feel it most: indexing database columns, leveraging materialized views, offloading heavy calculations to asynchronous tasks, and trimming frontend payloads."
  },
  {
    number: "04",
    title: "Continuous Learning",
    quote: "Keep improving through experimentation, feedback, and hands-on engineering.",
    elaboration: "Enterprise engineering is a marathon of refinement. Embracing new patterns, learning from production incidents, and asking disciplined questions transforms good developers into great problem solvers."
  }
];

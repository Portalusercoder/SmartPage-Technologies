export const site = {
  name: "Smart Pages Technologies",
  shortName: "SPT",
  tagline: "Technology. Industry. Everyday Experiences.",
  description:
    "Smart Pages Technologies brings together specialized capabilities across technology, industrial packaging, and food and beverage services to support businesses across multiple sectors.",
  url: "https://smartpagetech.com",
  contact: {
    email: "info@smartpagetech.com",
    phone: "+966 13 8433033",
    phoneAlt: "+966 3 8433033",
    addressLines: [
      "King Fahad Street, Cross No. 1",
      "Al Khobar, 31952",
      "Kingdom of Saudi Arabia",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=King+Fahad+Street+Al+Khobar+31952&output=embed",
  },
  social: {
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
} as const;

export type DivisionId = "technology" | "industries" | "food-beverages";

export type Service = {
  id: string;
  name: string;
  shortName: string;
  href: string;
  summary: string;
  overview: string;
  capabilities: string[];
  applications: string[];
  image: string;
};

export type Division = {
  id: DivisionId;
  name: string;
  shortDescription: string;
  description: string;
  href: string;
  heroHeading: string;
  heroDescription: string;
  image: string;
  services: Service[];
};

export const divisions: Division[] = [
  {
    id: "technology",
    name: "Technology",
    shortDescription:
      "ICT infrastructure, security systems, and power solutions for modern operations.",
    description:
      "Technology infrastructure, security systems, and power solutions designed to support modern business operations.",
    href: "/divisions/technology",
    heroHeading: "Technology Solutions for a Connected World.",
    heroDescription:
      "Explore our technology capabilities across ICT infrastructure, security systems, and power solutions designed to support business operations.",
    image: "/images/impact-tech.jpg",
    services: [
      {
        id: "ict-solutions",
        name: "ICT Solutions",
        shortName: "ICT",
        href: "/divisions/technology/ict-solutions",
        summary:
          "Information and communication technology solutions that strengthen connectivity, systems, and day-to-day operations.",
        overview:
          "Our ICT Solutions focus on practical technology foundations that help organizations stay connected, organized, and operationally ready.",
        capabilities: [
          "Network and infrastructure planning support",
          "Systems integration aligned to business needs",
          "Communication technology advisory",
          "Implementation coordination with stakeholders",
        ],
        applications: [
          "Office and facility technology environments",
          "Operational connectivity requirements",
          "Business system readiness initiatives",
        ],
        image: "/images/tech-network.jpg",
      },
      {
        id: "security-solutions",
        name: "Security Solutions",
        shortName: "Security",
        href: "/divisions/technology/security-solutions",
        summary:
          "Security systems and protective technology approaches designed to support safer business environments.",
        overview:
          "Our Security Solutions help organizations address physical and digital security requirements with clear, practical approaches.",
        capabilities: [
          "Security system assessment support",
          "Surveillance and access-oriented solutions",
          "Threat-aware technology recommendations",
          "Integration with existing facility setups",
        ],
        applications: [
          "Commercial facilities and workplaces",
          "Operational sites requiring controlled access",
          "Environments needing monitoring support",
        ],
        image: "/images/tech-security.jpg",
      },
      {
        id: "power-solutions",
        name: "Power Solutions",
        shortName: "Power",
        href: "/divisions/technology/power-solutions",
        summary:
          "Power-related solutions that support continuity, reliability, and operational readiness.",
        overview:
          "Our Power Solutions are designed to help businesses maintain dependable power-related infrastructure for critical and everyday operations.",
        capabilities: [
          "Power continuity planning support",
          "Infrastructure readiness assessments",
          "Solution recommendations for facility needs",
          "Coordination across technical stakeholders",
        ],
        applications: [
          "Facilities requiring reliable power support",
          "Business-critical operational environments",
          "Sites preparing for technology expansion",
        ],
        image: "/images/tech-power.jpg",
      },
    ],
  },
  {
    id: "industries",
    name: "Industries",
    shortDescription:
      "Co-packing, corrugated boxes, and wrapping solutions for production needs.",
    description:
      "Industrial packaging and production capabilities across co-packing, corrugated boxes, and wrapping solutions.",
    href: "/divisions/industries",
    heroHeading: "Packaging Solutions for Business Needs.",
    heroDescription:
      "Discover our industrial capabilities across co-packing, corrugated boxes, and wrapping solutions.",
    image: "/images/industries-packing.jpg",
    services: [
      {
        id: "co-packing",
        name: "Co-packing",
        shortName: "Co-packing",
        href: "/divisions/industries/co-packing",
        summary:
          "Co-packing support that helps businesses prepare, assemble, and package products for market readiness.",
        overview:
          "Our co-packing offering supports organizations that need dependable packaging and preparation capacity without building every process in-house.",
        capabilities: [
          "Product packing and assembly support",
          "Batch preparation aligned to requirements",
          "Quality-focused handling practices",
          "Flexible production coordination",
        ],
        applications: [
          "Consumer and commercial product packing",
          "Seasonal or project-based packing needs",
          "Brands seeking production support partners",
        ],
        image: "/images/industries-packing.jpg",
      },
      {
        id: "corrugated-boxes",
        name: "Corrugated Boxes",
        shortName: "Corrugated",
        href: "/divisions/industries/corrugated-boxes",
        summary:
          "Corrugated box solutions for shipping, storage, and product protection requirements.",
        overview:
          "Our corrugated boxes offering supports businesses that need practical packaging formats for protection, transport, and presentation.",
        capabilities: [
          "Corrugated packaging supply support",
          "Size and format guidance for use cases",
          "Protective packaging considerations",
          "Coordination for business packaging needs",
        ],
        applications: [
          "Shipping and logistics packaging",
          "Product storage and handling",
          "Retail and wholesale packaging needs",
        ],
        image: "/images/industries-boxes.jpg",
      },
      {
        id: "wrapping-solutions",
        name: "Wrapping Solutions",
        shortName: "Wrapping",
        href: "/divisions/industries/wrapping-solutions",
        summary:
          "Wrapping solutions that help secure, protect, and prepare goods for handling and transit.",
        overview:
          "Our wrapping solutions support businesses looking for practical ways to protect products during storage, handling, and movement.",
        capabilities: [
          "Industrial wrapping support",
          "Protective packaging approaches",
          "Handling-ready preparation methods",
          "Coordination for operational packaging needs",
        ],
        applications: [
          "Goods preparation for transit",
          "Warehouse and storage protection",
          "Production line packaging support",
        ],
        image: "/images/industries-wrap.jpg",
      },
    ],
  },
  {
    id: "food-beverages",
    name: "Food & Beverages",
    shortDescription:
      "Food and beverage services through our cafeteria offering.",
    description:
      "Food and beverage services through our cafeteria offering.",
    href: "/divisions/food-beverages",
    heroHeading: "Food and Beverage Services for Everyday Needs.",
    heroDescription:
      "Discover our food and beverage offering through the Smart Pages Technologies cafeteria.",
    image: "/images/food-cafeteria.jpg",
    services: [
      {
        id: "cafeteria",
        name: "Cafeteria",
        shortName: "Cafeteria",
        href: "/divisions/food-beverages/cafeteria",
        summary:
          "A cafeteria offering designed to support everyday food and beverage needs in a welcoming service environment.",
        overview:
          "Our cafeteria provides food and beverage services as part of the Smart Pages Technologies Food & Beverages division.",
        capabilities: [
          "Daily food and beverage service",
          "A setting suited to workplace and visitor needs",
          "Straightforward menu categories (details forthcoming)",
          "Service-focused hospitality experience",
        ],
        applications: [
          "Workplace dining needs",
          "Visitor and guest refreshments",
          "Everyday food and beverage service",
        ],
        image: "/images/food-cafeteria.jpg",
      },
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Multiple specialized divisions",
    description:
      "Technology, industrial packaging, and food and beverage capabilities operate under one corporate identity.",
  },
  {
    title: "Customer-focused approach",
    description:
      "Enquiries are directed to the division best placed to understand and support each requirement.",
  },
  {
    title: "Solutions tailored to requirements",
    description:
      "Each division focuses on practical offerings shaped around real operational and commercial needs.",
  },
  {
    title: "Commitment to service quality",
    description:
      "We aim to deliver clear communication, dependable coordination, and professional service standards.",
  },
] as const;

export const capabilities = [
  {
    title: "Technology readiness",
    description:
      "ICT, security, and power-related capabilities that support connected business environments.",
    image: "/images/tech-network.jpg",
    href: "/divisions/technology",
  },
  {
    title: "Industrial packaging",
    description:
      "Co-packing, corrugated boxes, and wrapping support for production and logistics needs.",
    image: "/images/industries-packing.jpg",
    href: "/divisions/industries",
  },
  {
    title: "Food & beverage service",
    description:
      "Cafeteria services that support everyday dining and refreshment requirements.",
    image: "/images/food-cafeteria.jpg",
    href: "/divisions/food-beverages",
  },
  {
    title: "Cross-division coordination",
    description:
      "A single point of contact that helps route requirements to the right specialized team.",
    image: "/images/capabilities.jpg",
    href: "/contact",
  },
] as const;

export function getDivision(id: DivisionId) {
  return divisions.find((d) => d.id === id);
}

export function getService(divisionId: DivisionId, serviceId: string) {
  return getDivision(divisionId)?.services.find((s) => s.id === serviceId);
}

export function getAllServices() {
  return divisions.flatMap((d) =>
    d.services.map((s) => ({ ...s, divisionId: d.id, divisionName: d.name })),
  );
}

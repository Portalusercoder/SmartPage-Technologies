import { asset } from "@/lib/asset";

export const site = {
  name: "Smart Pages Technologies",
  shortName: "SPT",
  tagline: "Technology. Power. Industry.",
  description:
    "Smart Pages Technologies brings together three specialised divisions — technology, power, and industrial packaging — to help organizations operate with confidence.",
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

export type DivisionId = "technology" | "industries" | "power";

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
      "ICT infrastructure, security systems, and cybersecurity for modern operations.",
    description:
      "Technology infrastructure, networks, and cybersecurity solutions designed to support modern business operations.",
    href: "/divisions/technology",
    heroHeading: "Technology infrastructure engineered for critical operations.",
    heroDescription:
      "Smart Pages Technologies designs, implements and manages technology solutions that align with business goals and regulatory requirements.",
    image: asset("/images/impact-tech.jpg"),
    services: [
      {
        id: "ict-solutions",
        name: "ICT Solutions",
        shortName: "ICT",
        href: "/divisions/technology/ict-solutions",
        summary:
          "Structured and fiber-optic cabling with switching, routing and wireless networks built to standard.",
        overview:
          "The network is the physical backbone of every digital service. We deliver infrastructure and network solutions from the cable plant up — structured copper cabling, fiber-optic backbones, and the active network that runs over them. Every installation is designed, labelled, tested and documented so the network can be expanded and maintained with confidence.",
        capabilities: [
          "Structured copper and fiber-optic cabling",
          "Switching, routing and wireless networks",
          "Systems integration aligned to business needs",
          "Documented handover for long-term maintainability",
        ],
        applications: [
          "Office and facility technology environments",
          "Operational connectivity requirements",
          "Business system readiness initiatives",
        ],
        image: asset("/images/tech-network.jpg"),
      },
      {
        id: "security-solutions",
        name: "Security Solutions",
        shortName: "Security",
        href: "/divisions/technology/security-solutions",
        summary:
          "Security systems and protective technology approaches designed to support safer business environments.",
        overview:
          "Our Security Solutions help organizations address physical and digital security requirements with clear, practical approaches — from surveillance and access to facility-ready protective systems.",
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
        image: asset("/images/tech-security.jpg"),
      },
      {
        id: "cybersecurity-solutions",
        name: "Cybersecurity Solutions",
        shortName: "Cybersecurity",
        href: "/divisions/technology/cybersecurity-solutions",
        summary:
          "Protect your people, network, devices and data from internal and external threats.",
        overview:
          "Our cybersecurity approach combines identity, application and data protection with continuous threat and vulnerability management. Programs are aligned with each organization's regulatory obligations and risk appetite, and supported by services that keep security effective after deployment.",
        capabilities: [
          "Identity, application and data protection",
          "Threat and vulnerability management",
          "Programs aligned to regulatory obligations",
          "Ongoing security operations support",
        ],
        applications: [
          "Enterprise and government networks",
          "Organizations with compliance requirements",
          "Environments needing continuous threat coverage",
        ],
        image: asset("/images/tech-security.jpg"),
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
    heroHeading: "Packaging and industrial services that move products to market.",
    heroDescription:
      "Contract packaging, repacking, labeling and corrugated cartons, supported by warehousing and logistics — one partner from production line to shelf.",
    image: asset("/images/industries-packing.jpg"),
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
        image: asset("/images/industries-packing.jpg"),
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
        image: asset("/images/industries-boxes.jpg"),
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
        image: asset("/images/industries-wrap.jpg"),
      },
    ],
  },
  {
    id: "power",
    name: "Power",
    shortDescription:
      "Electrical installation, power distribution, UPS and backup generation for critical facilities.",
    description:
      "SmartPage Power is the electrical and power division of the group. It brings together electrical installation, distribution, backup power and maintenance capabilities for commercial, industrial and infrastructure projects.",
    href: "/divisions/power",
    heroHeading: "Power systems built for continuity.",
    heroDescription:
      "Electrical works, power distribution and backup power solutions — from panel boards and cabling to UPS and standby generation — for facilities where downtime is not an option.",
    image: asset("/images/tech-power.jpg"),
    services: [
      {
        id: "electrical-solutions",
        name: "Electrical Solutions",
        shortName: "Electrical",
        href: "/divisions/power/electrical-solutions",
        summary:
          "Complete internal and external electrical works — power, lighting and panel boards.",
        overview:
          "Electrical installation is the foundation every other building system depends on. We deliver internal and external electrical works, from containment and cabling to final connections and lighting. Works are executed to approved drawings and inspected and tested before energization.",
        capabilities: [
          "Power & lighting installation for buildings and sites",
          "External electrical works and site lighting",
          "Panel board installation, termination and testing",
          "Earthing and lightning protection systems",
        ],
        applications: [
          "Commercial and public buildings",
          "Industrial and plant sites",
          "Infrastructure and critical facilities",
        ],
        image: asset("/images/tech-power.jpg"),
      },
      {
        id: "power-distribution",
        name: "Power Distribution",
        shortName: "Distribution",
        href: "/divisions/power/power-distribution",
        summary:
          "Low-voltage switchgear, distribution boards and cabling that deliver power safely to every load.",
        overview:
          "A well-designed distribution system delivers stable power, protects people and equipment, and leaves room for future load. We supply and install LV distribution from the main switchboard to the final circuit, with load schedules, discrimination and cable sizing reviewed so protection operates correctly under fault conditions.",
        capabilities: [
          "Main and sub-main switchboard supply and installation",
          "Final distribution boards and sub-circuits",
          "Armoured and unarmoured power cabling with containment",
          "Power factor correction and related upgrades",
        ],
        applications: [
          "Commercial facilities and campuses",
          "Industrial plants and workshops",
          "Sites preparing for load growth",
        ],
        image: asset("/images/impact-energy.jpg"),
      },
      {
        id: "ups-systems",
        name: "UPS Systems",
        shortName: "UPS",
        href: "/divisions/power/ups-systems",
        summary:
          "Uninterruptible power for IT, security and life-safety loads that cannot drop.",
        overview:
          "Even a momentary interruption can corrupt data or stop a critical process. We size, supply, install and commission UPS systems that bridge every outage and condition incoming power. Designs cover redundancy level, battery autonomy, bypass arrangements and monitoring integration.",
        capabilities: [
          "Online double-conversion UPS for sensitive loads",
          "Modular and redundant N+1 configurations",
          "Battery systems sized for required autonomy",
          "UPS monitoring with network and BMS integration",
        ],
        applications: [
          "IT and data environments",
          "Security and life-safety systems",
          "Control rooms and critical processes",
        ],
        image: asset("/images/tech-power.jpg"),
      },
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Multiple specialized divisions",
    description:
      "Technology, power, and industrial packaging capabilities operate under one corporate identity.",
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
      "ICT, security, and cybersecurity capabilities that support connected business environments.",
    image: asset("/images/tech-network.jpg"),
    href: "/divisions/technology",
  },
  {
    title: "Industrial packaging",
    description:
      "Co-packing, corrugated boxes, and wrapping support for production and logistics needs.",
    image: asset("/images/industries-packing.jpg"),
    href: "/divisions/industries",
  },
  {
    title: "Power continuity",
    description:
      "Electrical works, distribution, and UPS systems for facilities where downtime is not an option.",
    image: asset("/images/tech-power.jpg"),
    href: "/divisions/power",
  },
  {
    title: "Cross-division coordination",
    description:
      "A single point of contact that helps route requirements to the right specialized team.",
    image: asset("/images/capabilities.jpg"),
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

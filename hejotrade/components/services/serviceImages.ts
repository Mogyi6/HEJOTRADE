import type { ServiceRoute } from "@/sections/ServicePageContent";

type ServiceImageSet = {
  primary: string;
  secondary?: string;
  detail: string;
  objectPosition?: string;
  detailObjectPosition?: string;
};

export const serviceImages: Record<ServiceRoute, ServiceImageSet> = {
  mining: {
    primary: "/images/services/mining-dredger.webp",
    secondary: "/images/services/mining-hoist.webp",
    detail: "/images/services/mining-hoist.webp",
    objectPosition: "center 46%",
    detailObjectPosition: "center 43%",
  },
  energy: {
    primary: "/images/services/energy-pipes.webp",
    secondary: "/images/services/energy-cable-trays.webp",
    detail: "/images/services/energy-cable-trays.webp",
    objectPosition: "center 48%",
    detailObjectPosition: "center 38%",
  },
  technology: {
    primary: "/images/services/technology-cleanroom.webp",
    secondary: "/images/services/technology-workshop.webp",
    detail: "/images/services/technology-workshop.webp",
    objectPosition: "center 56%",
    detailObjectPosition: "center 52%",
  },
  generalContracting: {
    primary: "/images/services/general-contracting-stadium.webp",
    detail: "/images/services/general-contracting-stadium.webp",
    objectPosition: "center 62%",
    detailObjectPosition: "center 63%",
  },
};

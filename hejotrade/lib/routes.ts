import type { Locale } from "./i18n";

export type RouteKey =
  | "about"
  | "mining"
  | "energy"
  | "technology"
  | "generalContracting"
  | "contact";

const routeMap: Record<RouteKey, Record<Locale, string>> = {
  about: {
    hu: "",
    en: "",
  },

  mining: {
    hu: "banyaszat-geotermia",
    en: "mining-geothermal",
  },

  energy: {
    hu: "energetika",
    en: "energy",
  },

  technology: {
    hu: "technologiai-kivitelezes",
    en: "technology",
  },

  generalContracting: {
    hu: "fovallalkozas",
    en: "general-contracting",
  },

  contact: {
    hu: "elerhetosegeink",
    en: "contact",
  },
};

export function getPath(locale: Locale, route: RouteKey) {
  const slug = routeMap[route][locale];

  // A bemutatkozás a főoldal
  if (route === "about") {
    return locale === "en" ? "/en" : "/";
  }

  return locale === "en" ? `/en/${slug}` : `/${slug}`;
}

export function getRouteFromParts(
  parts?: string[],
): { locale: Locale; route: RouteKey } | null {
  if (!parts || parts.length === 0) {
    return {
      locale: "hu",
      route: "about",
    };
  }

  // /en
  if (parts.length === 1) {
    if (parts[0] === "en") {
      return {
        locale: "en",
        route: "about",
      };
    }

    // Magyar route
    const huRoute = (Object.keys(routeMap) as RouteKey[]).find(
      (key) =>
        key !== "about" &&
        routeMap[key].hu === parts[0],
    );

    if (huRoute) {
      return {
        locale: "hu",
        route: huRoute,
      };
    }

    return null;
  }

  // /en/valami
  if (parts.length === 2 && parts[0] === "en") {
    const enRoute = (Object.keys(routeMap) as RouteKey[]).find(
      (key) =>
        key !== "about" &&
        routeMap[key].en === parts[1],
    );

    if (enRoute) {
      return {
        locale: "en",
        route: enRoute,
      };
    }

    return null;
  }

  return null;
}

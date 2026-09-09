import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A Docker production image csak a futtatáshoz szükséges fájlokat kapja meg.
  output: "standalone",
};

export default nextConfig;

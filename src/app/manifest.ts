import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fly Agency",
    short_name: "Fly Agency",
    description: "Marketing digital para empresas que querem crescer.",
    start_url: "/",
    display: "standalone",
    background_color: "#060608",
    theme_color: "#060608",
    icons: [
      {
        src: "/logo.png",
        sizes: "499x499",
        type: "image/png",
      },
    ],
  };
}

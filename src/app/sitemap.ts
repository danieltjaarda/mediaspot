import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  images?: string[];
}[] = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "monthly",
    images: ["/images/hero-main.jpg", "/images/wie-ben-ik.jpg"],
  },
  {
    path: "/trouwerij",
    priority: 0.9,
    changeFrequency: "monthly",
    images: [
      "/images/bruiloft.png",
      "/images/portfolio-jawoord.png",
      "/images/trouwdag-ceremonie-buiten.jpg",
      "/images/trouwdag-uittocht-confetti.jpg",
    ],
  },
  {
    path: "/evenementen",
    priority: 0.8,
    changeFrequency: "monthly",
    images: ["/images/event-confetti.jpg", "/images/event-concert.jpg"],
  },
  {
    path: "/bedrijfsvideo",
    priority: 0.8,
    changeFrequency: "monthly",
    images: ["/images/event-congres.jpg"],
  },
  {
    path: "/social-content",
    priority: 0.7,
    changeFrequency: "monthly",
    images: ["/images/social-onlocation.jpg"],
  },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/algemene-voorwaarden", priority: 0.2, changeFrequency: "yearly" },
  { path: "/privacybeleid", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: route.images?.map((image) => `${SITE_URL}${image}`),
  }));
}

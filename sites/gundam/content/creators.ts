import type { Creator } from "@/lib/creators";

// Gundam Card Game creators featured on /creators (owner, 2026-10-31). Newest
// `since` is the spotlight. Avatars live in public/img/creators/, cut to a
// circle. Only what the creator shows publicly; no follower count unless it
// flatters them.
export const CREATORS: Creator[] = [
  {
    slug: "phixtcg",
    name: "phixtcg",
    blurb: "Short Gundam Card Game explainers, key terms and pack openings, plus Magic, Pokémon and Yu-Gi-Oh!.",
    about:
      "“Just here to play card games.” phixtcg teaches the Gundam Card Game in bite-size videos, from learning the game in one minute to the terms every new player needs, and opens starter decks and packs such as Zeon's Rush and Celestial Drive. New videos land on Instagram and YouTube.",
    links: [
      { platform: "Instagram", url: "https://www.instagram.com/phixtcg/", handle: "@phixtcg" },
      { platform: "YouTube", url: "https://www.youtube.com/@phixtcg", handle: "@phixtcg" },
    ],
    tags: ["Gundam Card Game", "How to play", "Pack openings", "Pulls"],
    avatar: "/img/creators/phixtcg.webp",
    since: "2026-10-31",
  },
];

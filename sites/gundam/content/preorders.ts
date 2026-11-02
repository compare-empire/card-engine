import type { PreorderCopy } from "@/lib/site-types";

// Copy for /preorders and /preorders/<set slug> (facts: research/news.md,
// 2026-10-24). A fact we can't source is left out; a set without copy here
// still gets a page from its data.
export const PREORDER_COPY: PreorderCopy = {
  intro:
    "Every upcoming Gundam Card Game release, each with its own page comparing every store's booster box, pack and sealed pre-order price, cheapest first in your currency. Sets stay listed for six weeks after release, when the most people shop for a box.",
  faq: [
    { q: "When do Gundam Card Game pre-orders open?", a: "Most stores list a new set six to ten weeks before release. Each release page adds a store as soon as its listing appears, and refreshes every store daily." },
    { q: "Is it cheaper to pre-order or to wait for release?", a: "Booster boxes usually sit near MSRP during pre-order and can rise in release week if allocations run short; singles are usually cheapest a few weeks after release. If you want to open product, pre-ordering at a good price is reasonable." },
    { q: "Do the prices include shipping?", a: "No. Every price is the store's item price before shipping, in the store's own currency, so compare the stores in your market." },
  ],
  sets: {
    "stardust-trails": {
      intro:
        "Every store taking pre-orders for <b>Stardust Trails (GD06)</b>, the Gundam Card Game set built on ZZ Gundam and 0083 Stardust Memory, compared cheapest first in your currency. It releases on 30 October 2026.",
      facts: [
        { label: "Release", value: "30 October 2026" },
        { label: "Set code", value: "GD06" },
        { label: "Pack MSRP", value: "US$4.99 / £3.75" },
        { label: "Legend Rares", value: "12 (+ LR+ / LR++ parallels)" },
      ],
      faq: [
        { q: "When does GD06 Stardust Trails release?", a: "30 October 2026, with pre-orders open at most stores." },
        { q: "What is in Stardust Trails?", a: "It is themed on Mobile Suit Gundam ZZ (its 40th anniversary) and Gundam 0083: Stardust Memory (its 35th), in 12-card packs at US$4.99. Its Legend Rares include ZZ Gundam, Gundam GP01Fb and Elpeo Ple's Qubeley Mk-II; the LR+ and LR++ parallels of ZZ Gundam and GP01Fb are the expected chases." },
      ],
    },
    "blazing-fist": {
      facts: [
        { label: "Release", value: "29 January 2027 (TCGplayer listing)" },
        { label: "Set code", value: "GD07" },
      ],
      faq: [{ q: "When is GD07 Blazing Fist?", a: "29 January 2027 per TCGplayer's listing. Some stores already take pre-orders." }],
    },
  },
};

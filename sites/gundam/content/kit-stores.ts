// Gunpla shops for the model-kit section (SITE.kits). Every store here was
// read by a probe on 2026-10-28 (a temporary Actions workflow over 285
// Shopify shops: the ~190 card stores below plus ~95 hobby shops): its
// collection's products.json returned Bandai kits whose SKU or description
// carries the JAN or Bandai's item number, which is how kits are matched
// (lib/import/kits.ts). Shops that sell Gunpla without either (Robot4Less,
// Hobbies Online, Tokyo Toys, Gundam Place Store…) are left out: their kits
// cannot be matched without guessing. Keys equal the card store's key where
// the shop is the same. Metro Hobbies (metrohobbies.ca, Square Online) was
// asked for on 2026-10-29 but its pages carry no SKU, item number or JAN, so
// it is left out on the same rule.
import type { KitStoreConfig } from "@/lib/site-types";

export const KIT_STORES: KitStoreConfig[] = [
  // United States
  { key: "gundamplanet", name: "Gundam Planet", base: "https://www.gundamplanet.com", market: "US", collections: ["gunpla"] },
  { key: "usagundamstore", name: "USA Gundam Store", base: "https://www.usagundamstore.com", market: "US", collections: ["bandai-model-kits"] },
  { key: "toyarena", name: "Toy Arena", base: "https://www.toyarena.com", market: "US", collections: ["gundam"] },
  { key: "allaccesscardshop", name: "All Access Card Shop", base: "https://allaccesscardshop.com", market: "US", collections: ["gunpla-model-kits"] },
  { key: "superanimestore", name: "Super Anime Store", base: "https://superanimestore.com", market: "US", collections: ["model-kits"] },
  { key: "japanfigure", name: "Japan Figure", base: "https://www.japan-figure.com", market: "US", collections: ["bandai-spirits"] },
  // United Kingdom
  { key: "travellingman", name: "Travelling Man", base: "https://www.travellingman.com", market: "UK", collections: ["model-kit-gunpla", "gundam"] },
  { key: "uniongundam", name: "Union Gundam", base: "https://www.uniongundam.co.uk", market: "UK", collections: ["all-gunpla"] },
  { key: "gundamlab", name: "GundamLAB", base: "https://gundamlab.com", market: "UK", collections: ["gunpla"] },
  { key: "dragoongaming", name: "Dragoon Gaming", base: "https://www.dragoongaming.co.uk", market: "UK", collections: ["gunadam-kits"] },
  { key: "gaijingadgets", name: "Gaijin Gadgets", base: "https://www.gaijingadgets.com", market: "UK", collections: ["gunpla", "gundam"] },
  { key: "lvlupgaming", name: "Lvl Up Gaming UK", base: "https://lvlupgaming.co.uk", market: "UK", collections: ["bandai-model-kit-gunpla"] },
  { key: "redsuncollectables", name: "Red Sun Collectables", base: "https://redsuncollectables.com", market: "UK", collections: ["gunpla"] },
  { key: "pucapucagames", name: "Puca Puca Games", base: "https://www.pucapucagames.co.uk", market: "UK", collections: ["gunpla"] },
  // Australia
  { key: "goodgames", name: "Good Games", base: "https://www.goodgames.com.au", market: "AU", collections: ["gundam"] },
  { key: "mechaexpressaustralia", name: "Mecha Express Australia", base: "https://mechaexpressaustralia.com.au", market: "AU", collections: ["all"] },
  { key: "hobbyco", name: "Hobbyco", base: "https://hobbyco.com.au", market: "AU", collections: ["all-products-gundam-gunpla"] },
  { key: "gamesportal", name: "Games Portal", base: "https://www.gamesportal.com.au", market: "AU", collections: ["model-kits"] },
  { key: "gapgames", name: "Gap Games", base: "https://www.gapgames.com.au", market: "AU", collections: ["gundam-kits", "gundam-hg", "gundam-mg", "gundam-rg", "gundam-pg", "gundam-entry-grade", "gundam-sdw"] },
  { key: "generalgames", name: "General Games Chirnside Park", base: "https://generalgames.com.au", market: "AU", collections: ["gundam"] },
  { key: "hobbycollectorsaustralia", name: "Hobby Collectors Australia", base: "https://hobbycollectorsaustralia.com.au", market: "AU", collections: ["gunpla"] },
  { key: "turtletcg", name: "Turtle TCG", base: "https://turtletcg.com.au", market: "AU", collections: ["gundam"] },
  // Neto, not Shopify: category pages, each card naming the Bandai item number (owner's request, 2026-10-29).
  {
    key: "frontlinehobbies",
    name: "Frontline Hobbies",
    base: "https://www.frontlinehobbies.com.au",
    market: "AU",
    platform: "neto",
    collections: [
      "model-building/gundam-plastic-models/high-grade",
      "model-building/gundam-plastic-models/master-grade",
      "model-building/gundam-plastic-models/real-grade",
      "model-building/gundam-plastic-models/perfect-grade",
      "model-building/gundam-plastic-models/sd-gundam",
      "model-building/bandai-gundam-model-kits/gundam-other-grades",
      "model-building/gundam-gunpla-model-kits/30-minute-missions-sisters/30-minute-missions",
    ],
  },
  // Canada
  { key: "401games", name: "401 Games", base: "https://store.401games.ca", market: "CA", collections: ["bandai-gunpla"] },
  { key: "bananagames", name: "Banana Games & Hobby", base: "https://bananagames.ca", market: "CA", collections: ["gundams", "bandai-model-kits"] },
  { key: "bentogaming", name: "Bento Gaming", base: "https://bentogaming.com", market: "CA", collections: ["gunpla-hg", "gunpla-mg", "gunpla-rg", "gunpla-pg", "gunpla-eg", "gunpla-sd", "gunpla-mgsd", "gunpla-non-grade", "gunpla-other", "megasize"] },
  { key: "pandahobby", name: "Panda Hobby", base: "https://pandahobby.ca", market: "CA", collections: ["gundam"] },
  { key: "torchlightgh", name: "Torchlight Games and Hobbies", base: "https://torchlightgh.com", market: "CA", collections: ["all-gunpla"] },
  { key: "zonegunpla", name: "Zone Gunpla", base: "https://www.zonegunpla.com", market: "CA", collections: ["high-grade", "master-grade", "realgrade", "perfect-grade", "entry-grade", "sd", "mgex", "mgsd", "precommandes"] },
  { key: "clawmebaby", name: "Claw Me Baby", base: "https://clawmebaby.ca", market: "CA", collections: ["gundams"] },
  // SKU is the Bandai item number (owner's request, 2026-10-29).
  { key: "gundamextra", name: "Gundam Extra", base: "https://gundamextra.com", market: "CA", collections: ["all"] },
];

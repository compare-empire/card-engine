// The ONE game-specific configuration file. Lorcana Compare and Gundam Compare
// run the same engine (the Rift Compare playbook, rebuilt lean); everything
// that differs between them — names, colours, data sources, stores, copy —
// lives here or in src/content/. Keep engine code free of game names.
import type { SiteConfig } from "@/lib/site-types";
import { STORES } from "@/content/stores";
import { KIT_STORES } from "@/content/kit-stores";

export const SITE: SiteConfig = {
  key: "gundam",
  name: "Gundam Compare",
  shortName: "GundamCompare",
  wordmark: ["GUNDAM", "COMPARE"],
  game: "Gundam Card Game",
  gameShort: "Gundam",
  domain: "gundamcompare.com",
  tagline: "Compare Gundam Card Game prices across every store",
  description:
    "Free Gundam Card Game price comparison: live prices for every Gundam TCG card, parallel and booster box across TCGplayer, eBay and game stores in the US, UK, Canada and Australia.",
  keywords: [
    "gundam card game prices",
    "gundam tcg prices",
    "gundam card game price guide",
    "gundam booster box price",
    "gundam card game parallel prices",
    "gd06 stardust trails price",
  ],
  adminEmails: ["bill.jyang101@gmail.com"],
  supportEmail: "compareempire@gmail.com",
  ownerEmail: "bill.jyang101@gmail.com",
  impactSiteVerification: "3ab0538e-afa1-4fe4-9cac-ce9a84159716",

  priceAlerts: true,
  tcgcsvCategoryId: 86,
  tcgplayerSlug: "gundam-card-game",
  ebay: {
    query: "gundam",
    singlesCategoryId: "183454",
    sealedCategoryId: "183456",
    // Cards under $10 get no eBay call; every sealed product does (owner, 2026-10-25).
    minPriceUsd: 10,
    // One eBay app, three sites (4,500 of its 5,000 a day): Lorcana 1,150,
    // Gundam 1,150, YGO 2,200 (2026-10-28; 1,500 each from the owner's
    // 2026-10-26 split, but Gundam and Lorcana spent ~1,000 a day covering every
    // eligible product while YGO's 3,400 eligible products hit the cap). Never
    // raise one without lowering another by the same amount.
    dailyBudget: 1150,
    // Lorcana Compare runs at 06 UTC and YGO Compare at 12 UTC on the same eBay
    // app; eBay's daily count resets at midnight Pacific, so each eBay day
    // holds one run of each site.
    runHourUtc: 18,
  },

  // Card numbers look like "GD02-048" (unique across sets; parallels share it).
  numberStyle: "code",
  // Crawlable hubs by card attribute (/cards/<facet>/<slug>), 2026-11-01.
  cardHubs: [
    { facet: "color", attr: "Color", noun: ["colour", "colours"], blurb: "Every Gundam Card Game unit, pilot and command is one of five colours." },
    { facet: "type", attr: "CardType", noun: ["card type", "card types"], title: "{game} {v} cards" },
    { facet: "trait", attr: "Trait", noun: ["trait", "traits"], split: "\\)\\s*\\(", minItems: 15, blurb: "Traits are the factions and series printed in brackets on a card, such as (Zeon) or (Earth Federation)." },
  ],
  rarityOrder: ["LR++", "LR+", "Legend Rare", "R+", "Rare", "U+", "Uncommon", "C++", "C+", "Common", "Promo"],
  chaseRarities: ["LR++", "LR+", "R+"],

  theme: {
    brand: "#3d7bff",
    brandLight: "#7aa5ff",
    brandDark: "#2557c9",
    accent: "#e5303f",
    pageDark: "#070b14",
    inkDark: ["#05080f", "#0a0f1b", "#0f1626", "#151e33", "#24304d", "#37476d"],
    wordmarkGradient: "linear-gradient(180deg, #ffffff 0%, #b9ceff 45%, #3d7bff 100%)",
    displayFont: "Orbitron",
  },
  halloween: {
    headline: "Night Raid: Zeon's in the shadows until 31 October",
    blurb: "Halloween on the battlefield — hunt down the cheapest Legend Rare parallels before the clock strikes midnight.",
  },
  christmas: {
    headline: "Operation Christmas",
    blurb: "booster boxes and starter decks to gift, cheapest store first",
  },

  stores: STORES,
  // The whole Compare Empire family, card games first (2026-10-27, DECISIONS.md
  // "Every site links the whole family"). `anchor` is the link text.
  sisterSites: [
    { name: "Rift Compare", url: "https://riftcompare.com", game: "Riftbound", anchor: "Riftbound card prices", search: "https://riftcompare.com/browse?q={q}" },
    { name: "OP Compare", url: "https://opcompare.app", game: "One Piece", anchor: "One Piece card prices", search: "https://opcompare.app/browse?q={q}" },
    { name: "DexCompare", url: "https://dexcompare.app", game: "Pokémon", anchor: "Pokémon sealed prices", search: "https://dexcompare.app/us/sealed?q={q}" },
    { name: "MTG Compare", url: "https://mtgcompare.app", game: "Magic", anchor: "Magic: The Gathering sealed prices", search: "https://mtgcompare.app/us/sealed?q={q}" },
    { name: "Lorcana Compare", url: "https://lorcanacompare.com", game: "Disney Lorcana", anchor: "Disney Lorcana card prices", search: "https://lorcanacompare.com/cards?q={q}" },
    { name: "YGO Compare", url: "https://ygocompare.com", game: "Yu-Gi-Oh!", anchor: "Yu-Gi-Oh! card prices", search: "https://ygocompare.com/cards?q={q}" },
    { name: "Cyberpunk Compare", url: "https://cyberpunkcompare.com", game: "Cyberpunk TCG", anchor: "Cyberpunk TCG prices", search: "https://cyberpunkcompare.com/cards?q={q}" },
    { name: "WargameCompare", url: "https://wargamecompare.com", game: "Wargames", anchor: "Miniature wargame prices" },
    { name: "FigureCompare", url: "https://figurecompare.com", game: "Anime figures", anchor: "Anime figure prices" },
    { name: "CamCompare", url: "https://www.camcompare.app", game: "Cameras", anchor: "Camera and lens prices" },
    { name: "Compare Empire", url: "https://compareempire.com", game: "Tech", anchor: "Tech and appliance prices" },
  ],
  family: { id: "gundam" },
  social: { reddit: "https://www.reddit.com/r/GundamTCG/" },
  // Gunpla (owner, 2026-10-28): Bandai model kits compared by JAN barcode
  // across hobby shops (src/content/kit-stores.ts, DECISIONS.md "Gunpla").
  kits: {
    label: "Gunpla",
    noun: "Gunpla model kits",
    maker: "Bandai Spirits",
    janPrefixes: ["4573102", "4549660", "4543112", "4580886"],
    itemCodeJanPrefix: "4573102",
    searchPrefix: "gunpla",
    shareImage: { url: "/og/gunpla.jpg", alt: "Gundam Compare: compare Gunpla prices across 29 hobby shops in the US, UK, Canada and Australia, matched by barcode" },
    stores: KIT_STORES,
  },
};

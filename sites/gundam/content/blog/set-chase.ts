import type { Post } from "./types";

// One "most valuable cards" post per booster set (29 October 2026, owner: set and chase-card searches are what bring RiftCompare its Google traffic), linking the /cards/rarity hubs for the cross-set lists (a blog list of a rarity would compete with its hub). Written from the 28 October data by a script; counts are typed with that date, every price in a table or {{price}} token is live. GD06 already has its own post; Edition Beta is left out because its TCGplayer prices come from a handful of listings.
export const SET_POSTS: Post[] = [
  {
    slug: "freedom-ascension-most-valuable-cards",
    title: "Freedom Ascension Most Valuable Cards: Gundam Card Game GD05",
    description: "The most valuable Freedom Ascension cards today, from live TCGplayer and store prices: the top 20, every LR++ and LR+ card and the booster box price.",
    date: "2026-10-29",
    keywords: ["freedom ascension most valuable cards", "freedom ascension chase cards", "freedom ascension card prices", "freedom ascension lr++ cards", "freedom ascension booster box price"],
    html: `
<p><b>Freedom Ascension</b> is the Gundam Card Game's GD05 booster set, released for the game's first anniversary. TCGplayer lists <b>197 cards</b> in it (52 Common, 19 C+, 36 Uncommon, 3 U+, 32 Rare, 26 R+, 12 Legend Rare, 12 LR+, 5 LR++). These are its most valuable cards today, read from TCGplayer's market price every morning, so the order below is always current. For every card in the set with the cheapest store price, see <a href="/sets/freedom-ascension">Freedom Ascension's full card list</a>.</p>

<h2>The 20 most valuable cards in Freedom Ascension</h2>
{{toplist:24699:20}}

<h2>Freedom Ascension LR++ cards</h2>
<p>LR++ is the top alternate-art version of a Legend Rare, the rarest pull in a pack and almost always the most valuable card in its set. Freedom Ascension has <b>5</b>. The dearest three are {{card:707601}} ({{price:707601}}), {{card:707600}} ({{price:707600}}) and {{card:707604}} ({{price:707604}}). Every LR++ card across all sets is in <a href="/cards/rarity/lr-plus-plus">our LR++ list</a>.</p>

<h2>Freedom Ascension LR+ cards</h2>
<p>LR+ is the parallel printing of a Legend Rare: the same card number and game text with premium foil and often alternate art. Some are SP versions with special art. Freedom Ascension has <b>12</b>. The dearest three are {{card:707542}} ({{price:707542}}), {{card:707551}} ({{price:707551}}) and {{card:707552}} ({{price:707552}}). Every LR+ card across all sets is in <a href="/cards/rarity/lr-plus">our LR+ list</a>.</p>

<h2>Freedom Ascension Legend Rare cards</h2>
<p>Legend Rares are the set's headline mobile suits and pilots, and the base printing that the LR+ and LR++ versions share their game text with. Freedom Ascension has <b>12</b>. The dearest three are {{card:705586}} ({{price:705586}}), {{card:705538}} ({{price:705538}}) and {{card:705569}} ({{price:705569}}). Every Legend Rare card across all sets is in <a href="/cards/rarity/legend-rare">our Legend Rare list</a>.</p>

<h2>Where the value sits</h2>
<p>On 28 October 2026, the ten most valuable cards held <b>86%</b> of the set's total value (US$14,555.88 across 197 priced cards). 19 cards were worth US$100 or more, and <b>132 of 197</b> were worth under US$1. That shape is typical of Gundam Card Game: a handful of chase printings carry the set, and most playable cards cost very little as singles.</p>

<h2>Freedom Ascension booster box and sealed prices</h2>
<p>A booster box of Freedom Ascension is {{price:693621}} at TCGplayer market today. Every sealed product from the set, with the cheapest in-stock store listing we found:</p>
{{sealed:24699}}
<p>Store prices for the same box differ by more than the cost of a few packs: compare every store on <a href="/card/freedom-ascension-booster-box">Freedom Ascension's booster box page</a> before you buy.</p>

<h2>Open boxes or buy singles?</h2>
<p>If you want one particular chase card, buying the single is almost always cheaper than opening packs for it: most boxes contain none of the top 20, and the one you want is one of many. Open boxes for the fun of opening; buy singles for the cards your deck or binder needs. <a href="/blog/gundam-card-game-booster-box-worth-it">Booster box or singles?</a> works through the maths, and each card page charts its price history so you can see whether today's price is high for it.</p>

<h2>Other sets</h2>
<p>The same list for <a href="/blog/eternal-nexus-most-valuable-cards">Eternal Nexus</a>. Across every set, the dearest cards are in <a href="/blog/most-expensive-gundam-card-game-cards">the most expensive Gundam Card Game cards</a>.</p>
`,
    faq: [
      { q: "What is the most expensive Freedom Ascension card?", a: "On 28 October 2026 it was Wing Gundam Zero (EW) (LR++) at US$3,910.18 on TCGplayer's market price. The table on this page is read every morning, so check it for today's order." },
      { q: "How many cards are in Freedom Ascension?", a: "TCGplayer lists 197 cards in Freedom Ascension: 52 Common, 19 C+, 36 Uncommon, 3 U+, 32 Rare, 26 R+, 12 Legend Rare, 12 LR+, 5 LR++." },
      { q: "Is a booster box of Freedom Ascension worth opening?", a: "For a specific card, buying the single is almost always cheaper. On 28 October 2026 the top ten cards held 86% of the set's value and 132 of 197 cards were worth under US$1, so a box's value rests on pulling one of a few cards. Open one for the fun of opening." },
    ],
  },
  {
    slug: "eternal-nexus-most-valuable-cards",
    title: "Eternal Nexus Most Valuable Cards: Gundam Card Game EB01",
    description: "The most valuable Eternal Nexus cards today, from live TCGplayer and store prices: the top 20, every LR++ and LR+ card and the booster box price.",
    date: "2026-10-29",
    keywords: ["eternal nexus most valuable cards", "eternal nexus chase cards", "eternal nexus card prices", "eternal nexus lr++ cards", "eternal nexus booster box price"],
    html: `
<p><b>Eternal Nexus</b> is the Gundam Card Game's first extra booster, EB01. TCGplayer lists <b>108 cards</b> in it (46 Common, 24 Uncommon, 3 U+, 15 Rare, 7 R+, 6 Legend Rare, 6 LR+, 1 LR++). These are its most valuable cards today, read from TCGplayer's market price every morning, so the order below is always current. For every card in the set with the cheapest store price, see <a href="/sets/eternal-nexus">Eternal Nexus's full card list</a>.</p>

<h2>The 20 most valuable cards in Eternal Nexus</h2>
{{toplist:24693:20}}

<h2>Eternal Nexus LR++ cards</h2>
<p>LR++ is the top alternate-art version of a Legend Rare, the rarest pull in a pack and almost always the most valuable card in its set. Eternal Nexus has <b>1</b>. The dearest one is {{card:702815}} ({{price:702815}}). Every LR++ card across all sets is in <a href="/cards/rarity/lr-plus-plus">our LR++ list</a>.</p>

<h2>Eternal Nexus LR+ cards</h2>
<p>LR+ is the parallel printing of a Legend Rare: the same card number and game text with premium foil and often alternate art. Some are SP versions with special art. Eternal Nexus has <b>6</b>. The dearest three are {{card:702827}} ({{price:702827}}), {{card:702826}} ({{price:702826}}) and {{card:702823}} ({{price:702823}}). Every LR+ card across all sets is in <a href="/cards/rarity/lr-plus">our LR+ list</a>.</p>

<h2>Eternal Nexus Legend Rare cards</h2>
<p>Legend Rares are the set's headline mobile suits and pilots, and the base printing that the LR+ and LR++ versions share their game text with. Eternal Nexus has <b>6</b>. The dearest three are {{card:700950}} ({{price:700950}}), {{card:700949}} ({{price:700949}}) and {{card:700910}} ({{price:700910}}). Every Legend Rare card across all sets is in <a href="/cards/rarity/legend-rare">our Legend Rare list</a>.</p>

<h2>Where the value sits</h2>
<p>On 28 October 2026, the ten most valuable cards held <b>96%</b> of the set's total value (US$1,249.91 across 108 priced cards). 1 card was worth US$100 or more, and <b>87 of 108</b> were worth under US$1. That shape is typical of Gundam Card Game: a handful of chase printings carry the set, and most playable cards cost very little as singles.</p>

<h2>Eternal Nexus booster box and sealed prices</h2>
<p>A booster box of Eternal Nexus is {{price:693103}} at TCGplayer market today. Every sealed product from the set, with the cheapest in-stock store listing we found:</p>
{{sealed:24693}}
<p>Store prices for the same box differ by more than the cost of a few packs: compare every store on <a href="/card/eternal-nexus-booster-box">Eternal Nexus's booster box page</a> before you buy.</p>

<h2>Open boxes or buy singles?</h2>
<p>If you want one particular chase card, buying the single is almost always cheaper than opening packs for it: most boxes contain none of the top 20, and the one you want is one of many. Open boxes for the fun of opening; buy singles for the cards your deck or binder needs. <a href="/blog/gundam-card-game-booster-box-worth-it">Booster box or singles?</a> works through the maths, and each card page charts its price history so you can see whether today's price is high for it.</p>

<h2>Other sets</h2>
<p>The same list for <a href="/blog/freedom-ascension-most-valuable-cards">Freedom Ascension</a> and <a href="/blog/phantom-aria-most-valuable-cards">Phantom Aria</a>. Across every set, the dearest cards are in <a href="/blog/most-expensive-gundam-card-game-cards">the most expensive Gundam Card Game cards</a>.</p>
`,
    faq: [
      { q: "What is the most expensive Eternal Nexus card?", a: "On 28 October 2026 it was Phoenix Gundam (Power Unleashed) (EX) (LR++) at US$1,094.36 on TCGplayer's market price. The table on this page is read every morning, so check it for today's order." },
      { q: "How many cards are in Eternal Nexus?", a: "TCGplayer lists 108 cards in Eternal Nexus: 46 Common, 24 Uncommon, 3 U+, 15 Rare, 7 R+, 6 Legend Rare, 6 LR+, 1 LR++." },
      { q: "Is a booster box of Eternal Nexus worth opening?", a: "For a specific card, buying the single is almost always cheaper. On 28 October 2026 the top ten cards held 96% of the set's value and 87 of 108 cards were worth under US$1, so a box's value rests on pulling one of a few cards. Open one for the fun of opening." },
    ],
  },
  {
    slug: "phantom-aria-most-valuable-cards",
    title: "Phantom Aria Most Valuable Cards: Gundam Card Game GD04",
    description: "The most valuable Phantom Aria cards today, from live TCGplayer and store prices: the top 20, every LR++ and LR+ card and the booster box price.",
    date: "2026-10-29",
    keywords: ["phantom aria most valuable cards", "phantom aria chase cards", "phantom aria card prices", "phantom aria lr++ cards", "phantom aria booster box price"],
    html: `
<p><b>Phantom Aria</b> is the Gundam Card Game's GD04 booster set. TCGplayer lists <b>194 cards</b> in it (64 Common, 10 C+, 1 C++, 36 Uncommon, 6 U+, 32 Rare, 17 R+, 12 Legend Rare, 14 LR+, 2 LR++). These are its most valuable cards today, read from TCGplayer's market price every morning, so the order below is always current. For every card in the set with the cheapest store price, see <a href="/sets/phantom-aria">Phantom Aria's full card list</a>.</p>

<h2>The 20 most valuable cards in Phantom Aria</h2>
{{toplist:24633:20}}

<h2>Phantom Aria LR++ cards</h2>
<p>LR++ is the top alternate-art version of a Legend Rare, the rarest pull in a pack and almost always the most valuable card in its set. Phantom Aria has <b>2</b>. The dearest two are {{card:691970}} ({{price:691970}}) and {{card:691971}} ({{price:691971}}). Every LR++ card across all sets is in <a href="/cards/rarity/lr-plus-plus">our LR++ list</a>.</p>

<h2>Phantom Aria LR+ cards</h2>
<p>LR+ is the parallel printing of a Legend Rare: the same card number and game text with premium foil and often alternate art. Some are SP versions with special art. Phantom Aria has <b>14</b>. The dearest three are {{card:691976}} ({{price:691976}}), {{card:691977}} ({{price:691977}}) and {{card:691943}} ({{price:691943}}). Every LR+ card across all sets is in <a href="/cards/rarity/lr-plus">our LR+ list</a>.</p>

<h2>Phantom Aria Legend Rare cards</h2>
<p>Legend Rares are the set's headline mobile suits and pilots, and the base printing that the LR+ and LR++ versions share their game text with. Phantom Aria has <b>12</b>. The dearest three are {{card:684548}} ({{price:684548}}), {{card:689647}} ({{price:689647}}) and {{card:689677}} ({{price:689677}}). Every Legend Rare card across all sets is in <a href="/cards/rarity/legend-rare">our Legend Rare list</a>.</p>

<h2>Where the value sits</h2>
<p>On 28 October 2026, the ten most valuable cards held <b>82%</b> of the set's total value (US$2,889.50 across 194 priced cards). 4 cards were worth US$100 or more, and <b>132 of 194</b> were worth under US$1. That shape is typical of Gundam Card Game: a handful of chase printings carry the set, and most playable cards cost very little as singles.</p>

<h2>Phantom Aria booster box and sealed prices</h2>
<p>A booster box of Phantom Aria is {{price:682302}} at TCGplayer market today. Every sealed product from the set, with the cheapest in-stock store listing we found:</p>
{{sealed:24633}}
<p>Store prices for the same box differ by more than the cost of a few packs: compare every store on <a href="/card/phantom-aria-booster-box">Phantom Aria's booster box page</a> before you buy.</p>

<h2>Open boxes or buy singles?</h2>
<p>If you want one particular chase card, buying the single is almost always cheaper than opening packs for it: most boxes contain none of the top 20, and the one you want is one of many. Open boxes for the fun of opening; buy singles for the cards your deck or binder needs. <a href="/blog/gundam-card-game-booster-box-worth-it">Booster box or singles?</a> works through the maths, and each card page charts its price history so you can see whether today's price is high for it.</p>

<h2>Other sets</h2>
<p>The same list for <a href="/blog/eternal-nexus-most-valuable-cards">Eternal Nexus</a> and <a href="/blog/steel-requiem-most-valuable-cards">Steel Requiem</a>. Across every set, the dearest cards are in <a href="/blog/most-expensive-gundam-card-game-cards">the most expensive Gundam Card Game cards</a>.</p>
`,
    faq: [
      { q: "What is the most expensive Phantom Aria card?", a: "On 28 October 2026 it was Destiny Gundam (LR++) at US$1,130.70 on TCGplayer's market price. The table on this page is read every morning, so check it for today's order." },
      { q: "How many cards are in Phantom Aria?", a: "TCGplayer lists 194 cards in Phantom Aria: 64 Common, 10 C+, 1 C++, 36 Uncommon, 6 U+, 32 Rare, 17 R+, 12 Legend Rare, 14 LR+, 2 LR++." },
      { q: "Is a booster box of Phantom Aria worth opening?", a: "For a specific card, buying the single is almost always cheaper. On 28 October 2026 the top ten cards held 82% of the set's value and 132 of 194 cards were worth under US$1, so a box's value rests on pulling one of a few cards. Open one for the fun of opening." },
    ],
  },
  {
    slug: "steel-requiem-most-valuable-cards",
    title: "Steel Requiem Most Valuable Cards: Gundam Card Game GD03",
    description: "The most valuable Steel Requiem cards today, from live TCGplayer and store prices: the top 20, every LR++ and LR+ card and the booster box price.",
    date: "2026-10-29",
    keywords: ["steel requiem most valuable cards", "steel requiem chase cards", "steel requiem card prices", "steel requiem lr++ cards", "steel requiem booster box price"],
    html: `
<p><b>Steel Requiem</b> is the Gundam Card Game's GD03 booster set. TCGplayer lists <b>202 cards</b> in it (68 Common, 13 C+, 1 C++, 36 Uncommon, 4 U+, 34 Rare, 20 R+, 12 Legend Rare, 12 LR+, 2 LR++). These are its most valuable cards today, read from TCGplayer's market price every morning, so the order below is always current. For every card in the set with the cheapest store price, see <a href="/sets/steel-requiem">Steel Requiem's full card list</a>.</p>

<h2>The 20 most valuable cards in Steel Requiem</h2>
{{toplist:24522:20}}

<h2>Steel Requiem LR++ cards</h2>
<p>LR++ is the top alternate-art version of a Legend Rare, the rarest pull in a pack and almost always the most valuable card in its set. Steel Requiem has <b>2</b>. The dearest two are {{card:675689}} ({{price:675689}}) and {{card:675703}} ({{price:675703}}). Every LR++ card across all sets is in <a href="/cards/rarity/lr-plus-plus">our LR++ list</a>.</p>

<h2>Steel Requiem LR+ cards</h2>
<p>LR+ is the parallel printing of a Legend Rare: the same card number and game text with premium foil and often alternate art. Some are SP versions with special art. Steel Requiem has <b>12</b>. The dearest three are {{card:675687}} ({{price:675687}}), {{card:675680}} ({{price:675680}}) and {{card:675695}} ({{price:675695}}). Every LR+ card across all sets is in <a href="/cards/rarity/lr-plus">our LR+ list</a>.</p>

<h2>Steel Requiem Legend Rare cards</h2>
<p>Legend Rares are the set's headline mobile suits and pilots, and the base printing that the LR+ and LR++ versions share their game text with. Steel Requiem has <b>12</b>. The dearest three are {{card:670506}} ({{price:670506}}), {{card:670488}} ({{price:670488}}) and {{card:670514}} ({{price:670514}}). Every Legend Rare card across all sets is in <a href="/cards/rarity/legend-rare">our Legend Rare list</a>.</p>

<h2>Where the value sits</h2>
<p>On 28 October 2026, the ten most valuable cards held <b>70%</b> of the set's total value (US$2,006.79 across 202 priced cards). 3 cards were worth US$100 or more, and <b>139 of 202</b> were worth under US$1. That shape is typical of Gundam Card Game: a handful of chase printings carry the set, and most playable cards cost very little as singles.</p>

<h2>Steel Requiem booster box and sealed prices</h2>
<p>A booster box of Steel Requiem is {{price:662114}} at TCGplayer market today. Every sealed product from the set, with the cheapest in-stock store listing we found:</p>
{{sealed:24522}}
<p>Store prices for the same box differ by more than the cost of a few packs: compare every store on <a href="/card/steel-requiem-booster-box">Steel Requiem's booster box page</a> before you buy.</p>

<h2>Open boxes or buy singles?</h2>
<p>If you want one particular chase card, buying the single is almost always cheaper than opening packs for it: most boxes contain none of the top 20, and the one you want is one of many. Open boxes for the fun of opening; buy singles for the cards your deck or binder needs. <a href="/blog/gundam-card-game-booster-box-worth-it">Booster box or singles?</a> works through the maths, and each card page charts its price history so you can see whether today's price is high for it.</p>

<h2>Other sets</h2>
<p>The same list for <a href="/blog/phantom-aria-most-valuable-cards">Phantom Aria</a> and <a href="/blog/dual-impact-most-valuable-cards">Dual Impact</a>. Across every set, the dearest cards are in <a href="/blog/most-expensive-gundam-card-game-cards">the most expensive Gundam Card Game cards</a>.</p>
`,
    faq: [
      { q: "What is the most expensive Steel Requiem card?", a: "On 28 October 2026 it was GFreD (LR++) at US$437.52 on TCGplayer's market price. The table on this page is read every morning, so check it for today's order." },
      { q: "How many cards are in Steel Requiem?", a: "TCGplayer lists 202 cards in Steel Requiem: 68 Common, 13 C+, 1 C++, 36 Uncommon, 4 U+, 34 Rare, 20 R+, 12 Legend Rare, 12 LR+, 2 LR++." },
      { q: "Is a booster box of Steel Requiem worth opening?", a: "For a specific card, buying the single is almost always cheaper. On 28 October 2026 the top ten cards held 70% of the set's value and 139 of 202 cards were worth under US$1, so a box's value rests on pulling one of a few cards. Open one for the fun of opening." },
    ],
  },
  {
    slug: "dual-impact-most-valuable-cards",
    title: "Dual Impact Most Valuable Cards: Gundam Card Game GD02",
    description: "The most valuable Dual Impact cards today, from live TCGplayer and store prices: the top 20, every LR++ and LR+ card and the booster box price.",
    date: "2026-10-29",
    keywords: ["dual impact most valuable cards", "dual impact chase cards", "dual impact card prices", "dual impact lr++ cards", "dual impact booster box price"],
    html: `
<p><b>Dual Impact</b> is the Gundam Card Game's GD02 booster set. TCGplayer lists <b>187 cards</b> in it (61 Common, 10 C+, 1 C++, 36 Uncommon, 2 U+, 32 Rare, 19 R+, 12 Legend Rare, 12 LR+, 2 LR++). These are its most valuable cards today, read from TCGplayer's market price every morning, so the order below is always current. For every card in the set with the cheapest store price, see <a href="/sets/dual-impact">Dual Impact's full card list</a>.</p>

<h2>The 20 most valuable cards in Dual Impact</h2>
{{toplist:24408:20}}

<h2>Dual Impact LR++ cards</h2>
<p>LR++ is the top alternate-art version of a Legend Rare, the rarest pull in a pack and almost always the most valuable card in its set. Dual Impact has <b>2</b>. The dearest two are {{card:659292}} ({{price:659292}}) and {{card:659279}} ({{price:659279}}). Every LR++ card across all sets is in <a href="/cards/rarity/lr-plus-plus">our LR++ list</a>.</p>

<h2>Dual Impact LR+ cards</h2>
<p>LR+ is the parallel printing of a Legend Rare: the same card number and game text with premium foil and often alternate art. Some are SP versions with special art. Dual Impact has <b>12</b>. The dearest three are {{card:659291}} ({{price:659291}}), {{card:659248}} ({{price:659248}}) and {{card:659294}} ({{price:659294}}). Every LR+ card across all sets is in <a href="/cards/rarity/lr-plus">our LR+ list</a>.</p>

<h2>Dual Impact Legend Rare cards</h2>
<p>Legend Rares are the set's headline mobile suits and pilots, and the base printing that the LR+ and LR++ versions share their game text with. Dual Impact has <b>12</b>. The dearest three are {{card:659290}} ({{price:659290}}), {{card:655155}} ({{price:655155}}) and {{card:659273}} ({{price:659273}}). Every Legend Rare card across all sets is in <a href="/cards/rarity/legend-rare">our Legend Rare list</a>.</p>

<h2>Where the value sits</h2>
<p>On 28 October 2026, the ten most valuable cards held <b>84%</b> of the set's total value (US$2,442.05 across 187 priced cards). 4 cards were worth US$100 or more, and <b>133 of 187</b> were worth under US$1. That shape is typical of Gundam Card Game: a handful of chase printings carry the set, and most playable cards cost very little as singles.</p>

<h2>Dual Impact booster box and sealed prices</h2>
<p>A booster box of Dual Impact is {{price:650748}} at TCGplayer market today. Every sealed product from the set, with the cheapest in-stock store listing we found:</p>
{{sealed:24408}}
<p>Store prices for the same box differ by more than the cost of a few packs: compare every store on <a href="/card/dual-impact-booster-box">Dual Impact's booster box page</a> before you buy.</p>

<h2>Open boxes or buy singles?</h2>
<p>If you want one particular chase card, buying the single is almost always cheaper than opening packs for it: most boxes contain none of the top 20, and the one you want is one of many. Open boxes for the fun of opening; buy singles for the cards your deck or binder needs. <a href="/blog/gundam-card-game-booster-box-worth-it">Booster box or singles?</a> works through the maths, and each card page charts its price history so you can see whether today's price is high for it.</p>

<h2>Other sets</h2>
<p>The same list for <a href="/blog/steel-requiem-most-valuable-cards">Steel Requiem</a> and <a href="/blog/newtype-rising-most-valuable-cards">Newtype Rising</a>. Across every set, the dearest cards are in <a href="/blog/most-expensive-gundam-card-game-cards">the most expensive Gundam Card Game cards</a>.</p>
`,
    faq: [
      { q: "What is the most expensive Dual Impact card?", a: "On 28 October 2026 it was Gundam Barbatos 1st Form (LR++) at US$1,095.76 on TCGplayer's market price. The table on this page is read every morning, so check it for today's order." },
      { q: "How many cards are in Dual Impact?", a: "TCGplayer lists 187 cards in Dual Impact: 61 Common, 10 C+, 1 C++, 36 Uncommon, 2 U+, 32 Rare, 19 R+, 12 Legend Rare, 12 LR+, 2 LR++." },
      { q: "Is a booster box of Dual Impact worth opening?", a: "For a specific card, buying the single is almost always cheaper. On 28 October 2026 the top ten cards held 84% of the set's value and 133 of 187 cards were worth under US$1, so a box's value rests on pulling one of a few cards. Open one for the fun of opening." },
    ],
  },
  {
    slug: "newtype-rising-most-valuable-cards",
    title: "Newtype Rising Most Valuable Cards: Gundam Card Game GD01",
    description: "The most valuable Newtype Rising cards today, from live TCGplayer and store prices: the top 20, every LR++ and LR+ card and the booster box price.",
    date: "2026-10-29",
    keywords: ["newtype rising most valuable cards", "newtype rising chase cards", "newtype rising card prices", "newtype rising lr++ cards", "newtype rising booster box price"],
    html: `
<p><b>Newtype Rising</b> is the Gundam Card Game's GD01 booster set. TCGplayer lists <b>182 cards</b> in it (62 Common, 8 C+, 1 C++, 36 Uncommon, 2 U+, 32 Rare, 15 R+, 12 Legend Rare, 12 LR+, 2 LR++). These are its most valuable cards today, read from TCGplayer's market price every morning, so the order below is always current. For every card in the set with the cheapest store price, see <a href="/sets/newtype-rising">Newtype Rising's full card list</a>.</p>

<h2>The 20 most valuable cards in Newtype Rising</h2>
{{toplist:24221:20}}

<h2>Newtype Rising LR++ cards</h2>
<p>LR++ is the top alternate-art version of a Legend Rare, the rarest pull in a pack and almost always the most valuable card in its set. Newtype Rising has <b>2</b>. The dearest two are {{card:645375}} ({{price:645375}}) and {{card:645376}} ({{price:645376}}). Every LR++ card across all sets is in <a href="/cards/rarity/lr-plus-plus">our LR++ list</a>.</p>

<h2>Newtype Rising LR+ cards</h2>
<p>LR+ is the parallel printing of a Legend Rare: the same card number and game text with premium foil and often alternate art. Some are SP versions with special art. Newtype Rising has <b>12</b>. The dearest three are {{card:645344}} ({{price:645344}}), {{card:645372}} ({{price:645372}}) and {{card:645373}} ({{price:645373}}). Every LR+ card across all sets is in <a href="/cards/rarity/lr-plus">our LR+ list</a>.</p>

<h2>Newtype Rising Legend Rare cards</h2>
<p>Legend Rares are the set's headline mobile suits and pilots, and the base printing that the LR+ and LR++ versions share their game text with. Newtype Rising has <b>12</b>. The dearest three are {{card:643193}} ({{price:643193}}), {{card:643215}} ({{price:643215}}) and {{card:643173}} ({{price:643173}}). Every Legend Rare card across all sets is in <a href="/cards/rarity/legend-rare">our Legend Rare list</a>.</p>

<h2>Where the value sits</h2>
<p>On 28 October 2026, the ten most valuable cards held <b>84%</b> of the set's total value (US$5,144.32 across 182 priced cards). 5 cards were worth US$100 or more, and <b>121 of 182</b> were worth under US$1. That shape is typical of Gundam Card Game: a handful of chase printings carry the set, and most playable cards cost very little as singles.</p>

<h2>Newtype Rising booster box and sealed prices</h2>
<p>A booster box of Newtype Rising is {{price:619072}} at TCGplayer market today. Every sealed product from the set, with the cheapest in-stock store listing we found:</p>
{{sealed:24221}}
<p>Store prices for the same box differ by more than the cost of a few packs: compare every store on <a href="/card/newtype-rising-booster-box">Newtype Rising's booster box page</a> before you buy.</p>

<h2>Open boxes or buy singles?</h2>
<p>If you want one particular chase card, buying the single is almost always cheaper than opening packs for it: most boxes contain none of the top 20, and the one you want is one of many. Open boxes for the fun of opening; buy singles for the cards your deck or binder needs. <a href="/blog/gundam-card-game-booster-box-worth-it">Booster box or singles?</a> works through the maths, and each card page charts its price history so you can see whether today's price is high for it.</p>

<h2>Other sets</h2>
<p>The same list for <a href="/blog/dual-impact-most-valuable-cards">Dual Impact</a>. Across every set, the dearest cards are in <a href="/blog/most-expensive-gundam-card-game-cards">the most expensive Gundam Card Game cards</a>.</p>
`,
    faq: [
      { q: "What is the most expensive Newtype Rising card?", a: "On 28 October 2026 it was Gundam (GD01-001) (LR++) at US$2,218.02 on TCGplayer's market price. The table on this page is read every morning, so check it for today's order." },
      { q: "How many cards are in Newtype Rising?", a: "TCGplayer lists 182 cards in Newtype Rising: 62 Common, 8 C+, 1 C++, 36 Uncommon, 2 U+, 32 Rare, 15 R+, 12 Legend Rare, 12 LR+, 2 LR++." },
      { q: "Is a booster box of Newtype Rising worth opening?", a: "For a specific card, buying the single is almost always cheaper. On 28 October 2026 the top ten cards held 84% of the set's value and 121 of 182 cards were worth under US$1, so a box's value rests on pulling one of a few cards. Open one for the fun of opening." },
    ],
  },
];

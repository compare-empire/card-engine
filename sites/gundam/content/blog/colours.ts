import type { Post } from "./types";

// The tables are live ({{attrstats:FACET}}, lib/post-render.ts): counts and prices update with every import.
export const post: Post = {
  slug: "gundam-card-game-colours-prices-compared",
  title: "Gundam Card Game colours compared: which costs the most to collect?",
  description: "All five Gundam Card Game colours and the biggest traits compared by card count, median price and $10+ cards, with live prices and links to every card.",
  date: "2026-11-01",
  keywords: ["gundam card game colors", "gundam card game colours", "most expensive gundam card game color", "gundam card game traits", "gundam card game zeon cards", "gundam card game earth federation cards"],
  html: `
<p>Every Gundam Card Game unit, pilot and command card belongs to one of five colours: blue, green, red, purple and white. Collectors and players often ask which colour is the expensive one. The honest answer is that the <b>typical</b> card costs about the same in every colour, well under a dollar, and the differences are in how many cards are worth real money. The tables below are live: they update every time we import prices.</p>

<h2>The five colours at a glance</h2>
{{attrstats:color}}
<p><b>Median</b> is the middle card's TCGplayer market price, so a handful of trophy cards can't skew it. <b>$10+</b> counts the cards worth ten dollars or more, which is where the cost of a competitive deck or a full master set really sits. Click any colour for every card in it, most valuable first.</p>

<h2>What the numbers mean for your wallet</h2>
<ul>
<li><b>Playing one colour pair is cheap.</b> Most of a deck is commons and uncommons at well under a dollar. The cost is in a few chase cards (LR+, LR++ and parallel art), the same in every colour.</li>
<li><b>The "most valuable" column is not what you'll pay for a deck.</b> Tournament prize cards and serialised cards sell for hundreds or thousands, but no deck needs them. Look at the $10+ count instead.</li>
<li><b>New sets reshuffle the order.</b> A colour that gets a strong new leader unit sees its staples rise within days. The <a href="/movers">price movers</a> page shows who is climbing this week.</li>
</ul>

<h2>Card types</h2>
<p>The same comparison by card type. Units are most of the game and hold most of its value; EX Base and EX Resource cards are mostly promotional and token-style cards, which is why their median is so high.</p>
{{attrstats:type}}

<h2>Traits: the factions and series</h2>
<p>Traits are the groups printed in brackets on a card, such as (Zeon), (Earth Federation) or (Tekkadan). Many decks are built around one, so a trait's prices are a good guide to what a themed deck costs. These are the traits with enough cards for their own price list:</p>
{{attrstats:trait}}

<h2>How to pay less for any colour</h2>
<ol>
<li>Open the colour or trait above and sort out which cards you actually need.</li>
<li>Paste your list into the <a href="/tools/best-basket">best basket</a> tool, which finds the cheapest mix of stores, shipping included.</li>
<li>Check the <a href="/cards/rarity/lr-plus-plus">LR++</a> and <a href="/cards/rarity/lr-plus">LR+</a> price lists before opening packs for a chase card: buying the single is usually far cheaper. Our <a href="/blog/gundam-card-game-booster-box-worth-it">booster box or singles guide</a> explains why.</li>
</ol>
`,
  faq: [
    { q: "What is the most expensive colour in the Gundam Card Game?", a: "No colour is much more expensive for a typical card: the median card in every colour costs well under a dollar. The differences are in how many cards are worth $10 or more, which Gundam Compare's colour table shows live." },
    { q: "How many colours are there in the Gundam Card Game?", a: "Five: blue, green, red, purple and white." },
  ],
};

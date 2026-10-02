export const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#ramen", label: "Ramen" },
  { href: "#menu", label: "Menu" },
  { href: "#location", label: "Location" },
  { href: "#circle", label: "Red Circle" },
  { href: "#franchise", label: "Franchise" },
];

export type Dish = { name: string; desc: string; img: string; alt: string; isNew?: boolean };

export const dishes: Dish[] = [
  { name: "X Ramen", isNew: true, img: "/bowls/x-ramen.webp", alt: "Top-down bowl of ramen with chilli-glazed tofu cubes, dumpling and pickled vegetables", desc: "Bold, mysterious and full of character, with a little SATO attitude." },
  { name: "Kings Cheesy Ramen", img: "/bowls/kings-cheesy-ramen.webp", alt: "Top-down bowl of creamy ramen with cheese cubes, a dumpling, snap peas and spring onion", desc: "A royal, creamy comfort bowl made for serious cheese lovers." },
  { name: "Naruto Veg Ramen", img: "/bowls/naruto-veg-ramen.webp", alt: "Top-down bowl of creamy veg ramen with a dumpling, cucumber, red cabbage and carrot", desc: "Warm, comforting and packed with playful Japanese anime energy." },
  { name: "Kimchi Veg Ramen", img: "/bowls/kimchi-veg-ramen.webp", alt: "Top-down bowl of ramen topped with kimchi and sesame seeds", desc: "A lively kimchi kick meets slow, warming ramen comfort." },
  { name: "Captain Sato Ramen", img: "/bowls/captain-sato-ramen.webp", alt: "Top-down bowl of ramen with chilli-dusted tofu slabs and a dumpling", desc: "Hearty, warm and generous. The bowl that is unmistakably SATO." },
];

export const dishCards = [
  { name: "Sato Red Flame Udon", jp: "うどん", img: "/menu/sato-red-flame-udon.webp", alt: "Spicy red udon with tofu, corn and spring onion in a kraft tray" },
  { name: "Teriyaki Veggie Bao", jp: "包子", img: "/menu/teriyaki-veggie-bao.webp", alt: "Two teriyaki veggie bao with slaw and chilli in a kraft tray" },
  { name: "Korean Cheese Corn Dog", jp: "ハットグ", img: "/menu/korean-cheese-corn-dog.webp", alt: "Crumb-coated Korean cheese corn dog drizzled with cheese and chilli sauce" },
  { name: "Butter Garlic Tteokbokki", jp: "トッポッキ", img: "/menu/butter-garlic-tteokbokki.webp", alt: "Creamy butter garlic tteokbokki topped with spring onion and sesame" },
];

type Outlet = { name: string; addr: string; img?: string; alt?: string };

// Street addresses and phone numbers still to come from SATO; the fifth outlet's photo is pending.
export const outlets: Outlet[] = [
  {
    name: "SATO Vijay Char Rasta",
    addr: "[Street address], Ahmedabad",
    img: "/outlets/vijay-char-rasta.webp",
    alt: "Red-walled SATO Vijay Char Rasta with a bar counter, orange stools and a neon Sato Ramen sign",
  },
  {
    name: "SATO Gota",
    addr: "[Street address], Ahmedabad",
    img: "/outlets/gota.webp",
    alt: "Glass-fronted SATO Gota with red booth seating, red chairs and a neon Sato Ramen sign",
  },
  {
    name: "SATO Naroda",
    addr: "[Street address], Ahmedabad",
    img: "/outlets/naroda.webp",
    alt: "Bright SATO Naroda dining room with red chairs, framed art and a ラーメン banner",
  },
  {
    name: "SATO Gandhinagar",
    addr: "[Street address], Gandhinagar",
    img: "/outlets/gandhinagar.webp",
    alt: "Cosy corner at SATO Gandhinagar with manga shelves, an anime pirate flag and a low bench table",
  },
  { name: "SATO [Area 5]", addr: "[Street address], [City]" },
];

export const perks = [
  { jp: "秘", k: "Secret menu", v: "Taste bowls that never make the menu." },
  { jp: "初", k: "First taste", v: "Try every new launch before anyone else." },
  { jp: "祭", k: "Themed nights", v: "Personal invites to cosplay and Ghibli nights." },
  { jp: "仲", k: "Find your people", v: "Anime fans, spice lovers, late-night slurpers." },
];

// Top reels on @sato_ramenbowl by views (checked 2 Oct 2026). Each card links to the reel on Instagram;
// covers are the reels' own thumbnails, saved locally because Instagram image URLs expire.
export const reels = [
  {
    url: "https://www.instagram.com/reel/Db5rOqtM90G/",
    views: "84.7K",
    creator: "darvimukhijaa",
    cover: "/reels/Db5rOqtM90G.jpg",
    alt: "Red-and-white SATO interior with paper lanterns, titled Ramen X Cosplay in Ahmedabad",
    caption: "Ramen, dumplings and cosplay. A new comfort-food spot in Ahmedabad.",
  },
  {
    url: "https://www.instagram.com/reel/DcFzZ-zhyyk/",
    views: "70.7K",
    creator: "withmahekk",
    cover: "/reels/DcFzZ-zhyyk.jpg",
    alt: "Guest with a paper umbrella under SATO's parasol ceiling, titled Japan in Ahmedabad",
    caption: "“Ahmedabad, we found your next ramen spot.” Cheese Ramen rated 9.5/10.",
  },
  {
    url: "https://www.instagram.com/reel/Dd1YFeQtGdL/",
    views: "3.7K",
    creator: "allabouttanu48",
    cover: "/reels/Dd1YFeQtGdL.jpg",
    alt: "Bowl of SATO ramen with tofu, corn and greens beside bamboo steamers",
    caption: "Japanese vibes, cozy corners and a comforting bowl in Gandhinagar.",
  },
];

export const franchisePerks = [
  { k: "Brand & identity", v: "The complete SATO look, voice and experience." },
  { k: "Menu", v: "A proven Asian comfort-food menu." },
  { k: "Training & SOPs", v: "Staff training and systems built for consistency." },
  { k: "Launch & marketing", v: "Support to open strong and keep growing." },
  { k: "Quality standards", v: "Every SATO should feel like SATO." },
];

export const instagramUrl = "https://www.instagram.com/sato_ramenbowl/";

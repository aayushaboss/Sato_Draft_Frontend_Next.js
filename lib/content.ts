export const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#ramen", label: "Ramen" },
  { href: "#menu", label: "Menu" },
  { href: "#location", label: "Location" },
  { href: "#circle", label: "Red Circle" },
  { href: "#franchise", label: "Franchise" },
];

export type Dish = { name: string; desc: string; isNew?: boolean };

export const dishes: Dish[] = [
  { name: "X Ramen", isNew: true, desc: "Bold, mysterious and full of character, with a little SATO attitude." },
  { name: "Kings Cheesy Ramen", desc: "A royal, creamy comfort bowl made for serious cheese lovers." },
  { name: "Naruto Veg Ramen", desc: "Warm, comforting and packed with playful Japanese anime energy." },
  { name: "Kimchi Veg Ramen", desc: "A lively kimchi kick meets slow, warming ramen comfort." },
  { name: "Captain Sato Ramen", desc: "Hearty, warm and generous. The bowl that is unmistakably SATO." },
];

const lightStripes = "repeating-linear-gradient(135deg,rgba(255,255,255,.07) 0 10px,rgba(255,255,255,0) 10px 20px)";
const darkStripes = "repeating-linear-gradient(135deg,rgba(255,255,255,.05) 0 10px,rgba(255,255,255,0) 10px 20px)";

export const dishCards = [
  { name: "Iconic Ramen", jp: "ラーメン", img: "signature ramen · on red", bg: "#b40c3d", pattern: lightStripes },
  { name: "Bao Cloud Bites", jp: "包子", img: "bao trio · on black", bg: "#1B1B1B", pattern: darkStripes },
  { name: "Little Pockets", jp: "餃子", img: "dimsum basket · on black", bg: "#1B1B1B", pattern: darkStripes },
  { name: "Topokki Saga", jp: "トッポッキ", img: "topokki · red/white split", bg: "linear-gradient(135deg,#b40c3d 55%,#eef2e6 55%)", pattern: lightStripes },
];

export const outlets = [1, 2, 3, 4, 5].map((i) => ({
  n: `OUTLET 0${i}`,
  name: `SATO [Area ${i}]`,
  addr: "[Street address], [City]",
}));

export const perks = [
  { jp: "秘", k: "Secret menu", v: "Taste bowls that never make the menu." },
  { jp: "初", k: "First taste", v: "Try every new launch before anyone else." },
  { jp: "祭", k: "Themed nights", v: "Personal invites to cosplay and Ghibli nights." },
  { jp: "仲", k: "Find your people", v: "Anime fans, spice lovers, late-night slurpers." },
];

// Top reels on @sato_ramenbowl by views (checked 2 Oct 2026). Each card links to the reel on Instagram.
export const reels = [
  {
    url: "https://www.instagram.com/reel/Db5rOqtM90G/",
    views: "84.7K",
    creator: "darvimukhijaa",
    img: "reel · ramen + dumplings",
    caption: "Craving ramen and dumplings? This one became a new comfort-food spot.",
  },
  {
    url: "https://www.instagram.com/reel/DcFzZ-zhyyk/",
    views: "70.7K",
    creator: "withmahekk",
    img: "reel · cheese ramen + momos",
    caption: "“Ahmedabad, we found your next ramen spot.” Cheese Ramen rated 9.5/10.",
  },
  {
    url: "https://www.instagram.com/reel/Dd1YFeQtGdL/",
    views: "3.7K",
    creator: "allabouttanu48",
    img: "reel · cozy corners, Gandhinagar",
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

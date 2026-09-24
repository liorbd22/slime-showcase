import pinkGlitter from "@/assets/slimes/pink-glitter.png";
import purpleBeads from "@/assets/slimes/purple-beads.png";
import mintButter from "@/assets/slimes/mint-butter.png";
import yellowStars from "@/assets/slimes/yellow-stars.png";

/**
 * כל הסליימים מוצגים מכאן.
 * כדי להוסיף סליים חדש: מעלים תמונה ל-Cloudinary ומוסיפים שורה לרשימה.
 */
export const CLOUDINARY_BASE = "https://res.cloudinary.com/dbrhckjds/image/upload";

/** מוסיף אופטימיזציה של Cloudinary (פורמט אוטומטי + דחיסה + רוחב) לכל תמונה */
export function cloudinary(publicIdWithPath: string, width = 800): string {
  return `${CLOUDINARY_BASE}/f_auto,q_auto,w_${width}/${publicIdWithPath}`;
}

export const heroImage = cloudinary("v1790279511/shaked/main_iumwtg.png", 1200);

export interface Slime {
  name: string;
  description: string;
  tag: string;
  /** URL מוכן לתצוגה (כבר עם אופטימיזציה של Cloudinary או ייבוא מקומי) */
  image: string;
  width?: number;
  height?: number;
}

export const slimes: Slime[] = [
  {
    name: "וורוד נצנוץ",
    description: "סליים גלוסי ורוד עם נצנוצים צבעוניים — נמתח, זורם ובוהק כמו ממתק.",
    tag: "גליטר",
    image: pinkGlitter,
    width: 1024,
    height: 768,
  },
  {
    name: "לילה סגול",
    description: "סליים סגול רך וקטיפתי עם כדורי קצף פסטליים — קראנץ' מושלם בכל לחיצה.",
    tag: "קראנצ'י",
    image: purpleBeads,
    width: 1024,
    height: 768,
  },
  {
    name: "נענע קרם",
    description: "באטר סליים בנענע ושמנת, מרקם חלק כמו גלידה רכה שנמרחת בנחת.",
    tag: "באטר",
    image: mintButter,
    width: 1024,
    height: 768,
  },
  {
    name: "שמש זהובה",
    description: "סליים צהוב שקוף עם כוכבים זהובים ונצנוץ — כאילו שמש נוזלית ביד.",
    tag: "גליטר",
    image: yellowStars,
    width: 1024,
    height: 768,
  },
];

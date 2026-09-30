import { PhotoData } from "@/components/photo";

const base = "https://images.unsplash.com/";
export const images: Record<string, PhotoData> = {
 hero: { src: base + "photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=90", alt: "Bride and groom walking through a sunlit field" },
 sea: { src: base + "photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85", alt: "Blue Caribbean water viewed from above" },
 woman: { src: base + "photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=85", alt: "Portrait in soft afternoon light" },
 dance: { src: base + "photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85", alt: "Couple dancing at their reception" },
 palms: { src: base + "photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=85", alt: "Lush tropical landscape" },
 wedding1: { src: base + "photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=88", alt: "Bride and groom sharing a quiet moment" },
 wedding2: { src: base + "photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=2200&q=88", alt: "Wedding table details in candlelight" },
 ring: { src: base + "photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=85", alt: "Couple embracing outdoors" },
 portrait: { src: base + "photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85", alt: "Portrait of Nathan Crossdale" },
 dinner: { src: base + "photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=2200&q=85", alt: "Intimate dinner setting" }
};

export const MARKWISE_THEMES = [
  {
    id: "light",
    name: "Light",
    description: "Clean white and blue",
    swatch: ["oklch(0.984 0.003 247)", "oklch(0.548 0.222 263)"],
    dark: false,
  },
  {
    id: "dark",
    name: "Dark",
    description: "Deep slate focus mode",
    swatch: ["oklch(0.18 0.04 265)", "oklch(0.66 0.2 263)"],
    dark: true,
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "Teal and blue revision mode",
    swatch: ["oklch(0.975 0.018 210)", "oklch(0.58 0.16 215)"],
    dark: false,
  },
  {
    id: "forest",
    name: "Forest",
    description: "Calm green study mode",
    swatch: ["oklch(0.975 0.018 145)", "oklch(0.54 0.16 150)"],
    dark: false,
  },
  {
    id: "sunset",
    name: "Sunset",
    description: "Warm amber and coral",
    swatch: ["oklch(0.98 0.018 72)", "oklch(0.62 0.18 38)"],
    dark: false,
  },
  {
    id: "midnight",
    name: "Midnight",
    description: "Dark cyan and violet",
    swatch: ["oklch(0.16 0.045 245)", "oklch(0.7 0.14 205)"],
    dark: true,
  },
  {
    id: "crimson-neon",
    name: "Crimson Neon",
    description: "Black glass with red neon focus",
    swatch: ["oklch(0.13 0.035 25)", "oklch(0.66 0.26 24)"],
    dark: true,
  },
  {
    id: "ultraviolet",
    name: "Ultraviolet",
    description: "Deep purple with electric pink accents",
    swatch: ["oklch(0.15 0.055 300)", "oklch(0.72 0.24 325)"],
    dark: true,
  },
  {
    id: "cyber-mint",
    name: "Cyber Mint",
    description: "Dark terminal tones with neon mint",
    swatch: ["oklch(0.14 0.04 175)", "oklch(0.78 0.17 165)"],
    dark: true,
  },
  {
    id: "arcade-blue",
    name: "Arcade Blue",
    description: "Ink-black panels with blue arcade glow",
    swatch: ["oklch(0.13 0.05 255)", "oklch(0.68 0.22 250)"],
    dark: true,
  },
] as const;

export type MarkwiseThemeId = (typeof MARKWISE_THEMES)[number]["id"];

export const DEFAULT_THEME: MarkwiseThemeId = "dark";
export const THEME_STORAGE_KEYS = ["markwise:theme", "markwise-theme"] as const;

export function getTheme(themeId: string | null | undefined) {
  return MARKWISE_THEMES.find((theme) => theme.id === themeId) ?? MARKWISE_THEMES.find((theme) => theme.id === DEFAULT_THEME)!;
}

export function readStoredTheme(): MarkwiseThemeId {
  if (typeof window === "undefined") return DEFAULT_THEME;
  const stored =
    window.localStorage.getItem(THEME_STORAGE_KEYS[0]) ??
    window.localStorage.getItem(THEME_STORAGE_KEYS[1]);
  return getTheme(stored).id;
}

export function applyTheme(themeId: MarkwiseThemeId) {
  if (typeof document === "undefined") return;
  const theme = getTheme(themeId);
  document.documentElement.dataset.theme = theme.id;
  document.documentElement.classList.toggle("dark", theme.dark);
}

export function persistTheme(themeId: MarkwiseThemeId) {
  if (typeof window === "undefined") return;
  for (const key of THEME_STORAGE_KEYS) {
    window.localStorage.setItem(key, themeId);
  }
}

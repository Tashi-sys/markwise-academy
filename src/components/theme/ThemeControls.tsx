import { Palette } from "lucide-react";
import { MARKWISE_THEMES, getTheme, type MarkwiseThemeId } from "../../lib/theme";

export function ThemeSettingsCard({
  themeId,
  onChange,
}: {
  themeId: MarkwiseThemeId;
  onChange: (themeId: MarkwiseThemeId) => void;
}) {
  const activeTheme = getTheme(themeId);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Appearance</h2>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Choose the theme MarkWise uses across the landing page and dashboard.
          </p>
        </div>
      </div>

      <label className="mt-5 block text-sm font-medium text-foreground">
        Theme
        <select
          value={themeId}
          onChange={(event) => onChange(event.target.value as MarkwiseThemeId)}
          className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-medium text-foreground outline-none ring-primary/30 focus:ring-2"
          aria-label="Choose theme"
        >
          {MARKWISE_THEMES.map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          ))}
        </select>
      </label>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {MARKWISE_THEMES.map((theme) => (
          <button
            key={theme.id}
            type="button"
            onClick={() => onChange(theme.id)}
            className={`theme-swatch-button rounded-xl border p-2 text-left transition ${
              theme.id === themeId
                ? "border-primary bg-primary/10 shadow-glow"
                : "border-border bg-background hover:bg-secondary"
            }`}
            aria-label={`Use ${theme.name} theme`}
            title={theme.description}
          >
            <span className="flex h-9 overflow-hidden rounded-lg border border-border/60">
              <span className="flex-1" style={{ background: theme.swatch[0] }} />
              <span className="flex-1" style={{ background: theme.swatch[1] }} />
            </span>
            <span className="mt-2 block text-xs font-semibold text-foreground">{theme.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-border bg-secondary/30 px-3 py-2 text-sm text-muted-foreground">
        {activeTheme.description}
      </div>
    </div>
  );
}

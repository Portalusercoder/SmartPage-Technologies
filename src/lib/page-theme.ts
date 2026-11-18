const THEME_CLASS = "theme-brand-red";

const activeSections = new Set<string>();

function syncTheme() {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle(
    THEME_CLASS,
    activeSections.size > 0,
  );
}

/** Keep brand-red while any subscribed section intersects the viewport band. */
export function setBrandRedTheme(sectionId: string, active: boolean) {
  if (typeof document === "undefined") return;
  if (active) activeSections.add(sectionId);
  else activeSections.delete(sectionId);
  syncTheme();
}

export function clearBrandRedTheme() {
  activeSections.clear();
  syncTheme();
}

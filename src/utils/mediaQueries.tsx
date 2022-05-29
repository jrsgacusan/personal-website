export const breakpoints = {
  mediumDown: "only screen and (max-width:1024px)",
  mediumUp: "only screen and (min-width: 640px)",
  mediumOnly: "only screen and (min-width:640px) and (max-width:1023px)",
  smallOnly: "only screen and (max-width: 639px)",
  largeUp: "only screen and (min-width: 1024px)",
};

const mediaQueries = {
  is_medium_down: () => window.matchMedia(breakpoints.mediumDown).matches,
  is_medium_up: () => window.matchMedia(breakpoints.mediumUp).matches,
  is_medium_only: () => window.matchMedia(breakpoints.mediumOnly).matches,
  is_small_only: () => window.matchMedia(breakpoints.smallOnly).matches,
  is_large_up: () => window.matchMedia(breakpoints.smallOnly).matches,
};

export default mediaQueries;

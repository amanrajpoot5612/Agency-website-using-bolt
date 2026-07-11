/**
 * Production theme selector.
 * Change only this number (0–5), then rebuild and deploy the website.
 */
export const ACTIVE_THEME = 1;

export const THEMES = [
  {
    name: 'Electric Cyan',
    background: { 950: '#0a0e14', 900: '#0f1419', 800: '#141b25', 700: '#1a2233' },
    accent: { 100: '#cff8ff', 200: '#8cedff', 300: '#42e2ff', 400: '#00d9ff', 500: '#00b8d4', 600: '#0099b0' },
    neutral: { 50: '#f0f4f8', 100: '#e1eaf2', 200: '#c8d6e5', 300: '#aabccd', 400: '#8fa3b8', 500: '#647c93', 600: '#4b6074', 700: '#344558', 800: '#202f3f', 900: '#131d28' },
  },
  {
    name: 'Cobalt Violet',
    background: { 950: '#090b18', 900: '#101329', 800: '#181d38', 700: '#252b4d' },
    accent: { 100: '#e7e8ff', 200: '#c8cbff', 300: '#a5a8ff', 400: '#8187ff', 500: '#6366f1', 600: '#4f46e5' },
    neutral: { 50: '#f5f6ff', 100: '#e8eaf6', 200: '#d0d4e8', 300: '#b2b8d2', 400: '#929ab8', 500: '#737d9f', 600: '#56617f', 700: '#3d4662', 800: '#272e46', 900: '#171c31' },
  },
  {
    name: 'Emerald Teal',
    background: { 950: '#071310', 900: '#0c1c18', 800: '#122923', 700: '#1b3a32' },
    accent: { 100: '#d2faee', 200: '#9af2db', 300: '#5de5c3', 400: '#2dd4aa', 500: '#14b88e', 600: '#0d9675' },
    neutral: { 50: '#f1f8f6', 100: '#e1eeea', 200: '#c5dcd5', 300: '#a5c3ba', 400: '#83a99e', 500: '#638b80', 600: '#496e65', 700: '#345149', 800: '#203830', 900: '#12251f' },
  },
  {
    name: 'Signal Orange',
    background: { 950: '#120d09', 900: '#1d1510', 800: '#2b1f17', 700: '#402c20' },
    accent: { 100: '#fff0db', 200: '#ffd9ad', 300: '#ffbb73', 400: '#ff9a3d', 500: '#f57816', 600: '#d95b0b' },
    neutral: { 50: '#faf6f2', 100: '#eee6df', 200: '#dccdc0', 300: '#c4ad9b', 400: '#a98d78', 500: '#8b705d', 600: '#6d5545', 700: '#503d31', 800: '#372920', 900: '#251a15' },
  },
  {
    name: 'Neon Magenta',
    background: { 950: '#110812', 900: '#1b0e1e', 800: '#29152d', 700: '#3d2043' },
    accent: { 100: '#ffe1fa', 200: '#ffb8f1', 300: '#ff82e5', 400: '#f451d2', 500: '#d92bb8', 600: '#b51d98' },
    neutral: { 50: '#fbf4fb', 100: '#f0e4f0', 200: '#decade', 300: '#c5aac6', 400: '#a98baa', 500: '#8b6c8d', 600: '#6d526f', 700: '#503b52', 800: '#372739', 900: '#241825' },
  },
  {
    name: 'Arctic Lime',
    background: { 950: '#090d0c', 900: '#101716', 800: '#182321', 700: '#24332f' },
    accent: { 100: '#efffcf', 200: '#dcff9a', 300: '#c3f85d', 400: '#a8e633', 500: '#87c51c', 600: '#68a30e' },
    neutral: { 50: '#f4f8f7', 100: '#e6eeec', 200: '#cddbd7', 300: '#afc3bd', 400: '#91aaa3', 500: '#718b84', 600: '#566e68', 700: '#3d514c', 800: '#283834', 900: '#182421' },
  },
];

if (!Number.isInteger(ACTIVE_THEME) || !THEMES[ACTIVE_THEME]) {
  throw new Error(`ACTIVE_THEME must be an integer from 0 to ${THEMES.length - 1}.`);
}

export const activeTheme = THEMES[ACTIVE_THEME];

import { theme } from '@users-platform/iceapple';

const customTheme = {
  ...theme,
  custom: {
    // Your custom theme goes here
  },
};

export default customTheme;
export type CustomThemeType = typeof customTheme;

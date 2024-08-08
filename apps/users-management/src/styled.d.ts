// styled.d.ts
import 'styled-components';
import { CustomThemeType } from './app/customTheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomThemeType {}
}

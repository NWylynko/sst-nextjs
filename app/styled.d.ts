// import original module declarations
import 'styled-components';

import type { Theme } from "./theme"

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colours: {
      background: string;
      foreground: string;
      accent1: string;
      accent2: string;
      success: string;
      warning: string;
      error: string;
    };
  }
}
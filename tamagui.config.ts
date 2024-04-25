import { createTamagui } from "tamagui";

import { config } from "@tamagui/config/v2-native";
import { tokens } from "./tokens";

// CREATE TAMAGUI CONFIG
const appConfig = createTamagui({
  ...config, 
  tokens,
  settings: {
    allowedStyleValues: true,
  },
});

type AppConfig = typeof appConfig;

// this will give you types for your components
// note - if using your own design system, put the package name here instead of tamagui
declare module "tamagui" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;

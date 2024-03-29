import { extendTheme } from "@chakra-ui/react";
import { CardComponent } from "./additions/card/Card";
import { CardBodyComponent } from "./additions/card/CardBody";
import { CardHeaderComponent } from "./additions/card/CardHeader";
import { AlertStyles } from "./components/alert";
import { badgeStyles } from "./components/badge";
import { buttonStyles } from "./components/button";
import { drawerStyles } from "./components/drawer";
import { linkStyles } from "./components/link";
import { switchStyles } from "./components/switch";
import { breakpoints } from "./foundations/breakpoints";
import { globalStyles } from "./styles";
// import { mode } from "@chakra-ui/theme-tools";
export default extendTheme(
  { breakpoints }, // Breakpoints
  globalStyles, // Global styles
  AlertStyles, // Alert styles
  buttonStyles, // Button styles
  badgeStyles, // Badge styles
  linkStyles, // Link styles
  drawerStyles, // Sidebar variant for Chakra's drawer
  switchStyles, // Switch styles
  CardComponent, // Card component
  CardBodyComponent, // Card Body component
  CardHeaderComponent // Card Header component
);

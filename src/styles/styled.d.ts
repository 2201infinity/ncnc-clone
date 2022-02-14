import "styled-components";
import { breakPointTypes, ColorsTypes, FontSizeTypes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
    breakPoint: breakPointTypes;
  }
}

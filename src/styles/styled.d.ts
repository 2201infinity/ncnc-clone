import "styled-components";
import {
  breakPointTypes,
  ColorsTypes,
  FontSizeTypes,
  ZindexedTypes,
} from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
    zIndexes: ZindexedTypes;
    breakPoint: breakPointTypes;
  }
}

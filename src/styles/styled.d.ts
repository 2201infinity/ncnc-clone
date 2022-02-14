import "styled-components";
import { ColorsTypes, FontSizeTypes, ZindexedTypes } from "./theme";
import { breakPointTypes, ColorsTypes, FontSizeTypes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
    zIndexes: ZindexedTypes;
    breakPoint: breakPointTypes;
  }
}

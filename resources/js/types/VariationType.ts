import {Title} from "./CategoryType";

export interface Variation {
  type:      string;
  title:     Title;
  price:     string;
  order:     number;
  children?: Variation[];
  thumbnail? : string
}

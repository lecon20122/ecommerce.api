import {Title} from "./CategoryType";
import {NewMediaProps} from "./products";

export interface Variation {
  type: string;
  title: Title;
  price: string;
  order: number;
  children?: Variation[];
  thumbnail?: string
  media: NewMediaProps[],
  variation_type?: VariationTypes,
  variation_type_value?: VariationTypesValues
}

export interface VariationTypesValues {
  id: number;
  value: Title;
}

export interface VariationTypes {
  id: number;
  type: Title;
  is_mediable: boolean,
}

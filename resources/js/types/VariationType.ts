import {Title} from "./CategoryType";
import {NewMediaProps} from "./products";

export interface Variation {
  id: number,
  parent_id: number
  price: string;
  order: number;
  type: string;
  title: string;
  children: Variation[];
  thumbnail?: string
  color?: NewMediaProps
  media: NewMediaProps[],
  variation_type?: VariationTypes,
  variation_type_value?: VariationTypesValues
}

export interface VariationTypesValues {
  id: number;
  value: Title;
  variation_type_id: number
}

export interface VariationTypes {
  id: number;
  type: Title;
  is_mediable: boolean,
  variationTypeValues: VariationTypesValues[]
}

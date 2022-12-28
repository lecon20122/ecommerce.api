import {Title} from "./CategoryType";
import {NewMediaProps} from "./products";

export interface Variation {
  id: number,
  parent_id: number
  product_id: number
  store_id: number
  price: string;
  order: number;
  type: string;
  title: string;
  children: Variation[];
  thumbnail?: string
  color?: Color
  stock_count: number,
  pivot: Pivot
  parent: Variation
  media: NewMediaProps[],
  variation_images: NewMediaProps[],
  variation_type?: VariationTypes,
  variation_type_value?: VariationTypesValues
}

export interface Color {
  id:        number;
  name:      string;
  file_name: string;
  mime_type: string;
  width:     null;
  height:    null;
  color:     string;
}

export interface Pivot {
  cart_id: number;
  variation_id: number;
  quantity: number;
  price: string;
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
  is_stockable: boolean,
  variationTypeValues: VariationTypesValues[]
}

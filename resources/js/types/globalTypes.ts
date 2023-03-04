import {ProductWithThumbnail} from "./products";
import {Title} from "./CategoryType";

export interface ResponseMessage {
  setErrors?: string,
  setStatus?: string,
}

export interface ModelCommonData {
  id: number;
  created_at?: string;
  updated_at?: string;
}

export interface Link {
  url: string;
  label: string;
  active: boolean;
}

export interface Store {
  id: number;
  name: string;
  description: string;
  is_active: boolean;
  created_at: Date;
  user_id: number;
  user: User;
  approved_at?: string;
  approved_by?: {
    id: number;
    name: string;
  };
}

export interface User {
  id: number;
  name: string;

  email: string;
}


export interface StoreWithProducts {
  id: number;
  name: string;
  description: string;
  is_active: boolean;
  created_at: string;
  user_id: number;
  user: User;
  products: ProductWithThumbnail[]
}

export interface PaginateDataType<T> {
  data: T[];
  links: Links;
  meta: Meta;
}

export interface Links {
  first: string;
  last: string;
  prev: string;
  next: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface ProductDescription {
  id: number,
  value: Title,
  product_id: number,
  attribute: ProductAttribute
}

export interface ProductAttribute {
  id: number,
  attribute: Title,
  is_filterable: boolean,
}

import {ProductWithThumbnail} from "./products";

export interface ResponseMessage {
  setErrors?: string,
  setStatus?: string,
}

export interface PaginatedData {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface ModelCommonData {
  id: number;
  created_at?: string;
  updated_at?: string;
}

export interface Link {
  url: null | string;
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
}

export interface User {
  id: number;
  name: string;
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

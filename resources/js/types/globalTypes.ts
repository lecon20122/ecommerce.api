import { ProductWithThumbnail } from "./products";
import { Title } from "./CategoryType";
import { RolesEnum } from "../Enums/RolesEnum";

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
  status: number;
  email_verified_at: null;
  roles : Role[];
  created_at: Date;
  updated_at: Date;
}

export interface Role {
  id: number;
  name: string;
  guard_name: string;
  created_at: Date;
  updated_at: Date;
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

export interface District {
  id: number;
  name: string;
  city_id: number;
  created_at: Date;
  updated_at: Date;
  city: City;
}

export interface City {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  governorate_id: number;
  governorate: Governorate;
}

export interface Governorate {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface Address {
  id: number;
  district_id: number;
  district: District;
  apartment_number: null;
  building: string;
  floor: null;
  nearby_landmark: null;
  street: string;
}

export interface SellerRequest {
  id: number;
  company_register: string;
  brand_name: string;
  what_store_sells: string;
  social_media: string;
  user: User;
  pickup_location: Address;
  approved_at: string;
  rejected_at: string;
  created_at: Date;
  updated_at: Date;
}

export interface ByPass {
  id: number;
  email: string;
  role: RolesEnum;
  expires_at: Date;
  created_at: Date;
  updated_at: Date;
}



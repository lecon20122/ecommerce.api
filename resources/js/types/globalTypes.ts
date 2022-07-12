import { User } from './auth';

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

export interface ModelData {
  id: number;
  created_at?: string;
  updated_at?: string;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}


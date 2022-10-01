import {NewMediaProps, Product} from "./products";

export interface HomePageCategory {
  id: number;
  parent_id: number;
  title: Title;
  slug: string;
  media: NewMediaProps[];
  parent?: Parent;
  children: HomePageCategory[]
}

export interface Thumbnail {
  id: number;
  name: string;
  file_name: string;
  mime_type: string;
  thumbnail: string;
  big: boolean;
}

export interface Title {
  en: string;
  ar: string;
}

export interface Parent {
  title: Title;
  id: number;
}


export interface Category {
  id: number;
  title: Title
  parent_id: number;
  slug: string;
  children?: Category[];
  products?: Product[];
  thumbnail?: Thumbnail;
}

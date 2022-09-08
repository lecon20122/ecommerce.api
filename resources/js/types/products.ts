import {Title} from "./CategoryType";
import {Variation} from "./VariationType";

export interface Categories {
  categories: Category[] | null;
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

export interface Product {
  id: number;
  title: string;
  price: string;
  slug: string;
  description: string;
  media: Media[];
}

export interface ProductWithThumbnail {
  id: number;
  title: {
    ar: string,
    en: string,
  };
  price: string;
  slug: string;
  description: string;
  thumbnail: string;
  small_thumbnail: string;
  deleted_at: string | null,
  variations: Variation[]
  media: NewMediaProps[]
}


export interface CategoryWithMedia {
  id: number;
  title: {
    en?: string,
    ar?: string,
  };
  parent_id: number;
  slug: string;
  children?: Category[];
  products?: Product[];
  media: Media[];
}

export interface CategoryWithThumbnail extends Thumbnail {
  id: number;
  title: {
    en?: string,
    ar?: string,
  };
  parent_id: number;
  slug: string;
  children?: Category[];
  products?: Product[];
}

export interface Media {
  id: number;
  name: string;
  file_name: string;
  mime_type: string;
  original_url: string;
  small_url?: string;
  thumb_url?: string;
}


export interface Thumbnail {
  thumbnail: ThumbnailProps
}

export interface ThumbnailProps {
  id: number;
  name: string;
  file_name: string;
  mime_type: string;
  original_url: string;
  thumbnail: string;
}

export interface NewMediaProps {
  id: number;
  name: string;
  file_name: string;
  mime_type: string;
  thumbnail: string;
  big: string;
  small: string;
  original: string
}

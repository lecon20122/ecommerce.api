export interface Categories {
  categories: Category[] | null;
}


export interface Category {
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

export interface Product {
  id: number;
  title: string;
  price: string;
  slug: string;
  description: string;
  media: Media[];
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

export interface Media {
  id: number;
  name: string;
  file_name: string;
  mime_type: string;
  original_url: string;
  small_url?: string;
  thumb_url?: string;
}

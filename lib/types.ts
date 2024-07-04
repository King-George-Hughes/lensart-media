export interface ApiBlogResponse {
  data: BlogData[];
  links: {};
  meta: {
    per_page: number;
    total: number;
  };
}

export interface BlogData {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
  created_at: string;
}

export interface ApiClientResponse {
  data: ClientData[];
  links: {};
  meta: {
    per_page: number;
    total: number;
  };
}

export interface ClientData {
  id: number;
  slug: string;
  title: string;
  images: string[];
  description: string;
  client_email: string;
  client_id: number;
  created_at: string;
}

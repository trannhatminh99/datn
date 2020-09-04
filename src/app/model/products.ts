export class Products {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  images: string;
  description: string;
  content: string;
  category: string;
  status_product: string;
  code: string;
  price: number;
  discount_price?: number;
  status: string;
  published_at: Date;
  total?: number;
  count?: number;
  per_page?: number;
  current_page?: number;
  total_pages?: number;
}


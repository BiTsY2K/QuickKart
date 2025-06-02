
interface ProductImage {
  id: string; url: string; alt: string;
}

interface ProductReview {
  id: string; author: string; rating: number; date: string; comment: string;
}

interface ProductSpecification {
  name: string; value: string;
}

interface ProductVariant {
  id: string; name: string; price: number; compareAtPrice?: number; inStock: boolean;
}

interface Product {
  id: string; name: string; title?: string; description?: string;
  imageUrl: string; price: number; discountPrice?: number; rating: number;
  category: string; subCategory?: string; brand: string;
  colors: string[]; sizes?: string[]; tags: string[]; material?: string;
  inStock: boolean; freeShipping: boolean; newArrival: boolean; bestSeller: boolean;

  images: ProductImage[];
  features: string[]; reviews: ProductReview[];
  variants: ProductVariant[]; specs: ProductSpecification[];
}

export type {
  ProductImage, ProductReview, ProductSpecification, ProductVariant, Product
}
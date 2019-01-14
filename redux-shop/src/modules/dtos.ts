export interface CategoryDto {
  id: number;
  name: string;
  image: string;
}

export interface ProductDto {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: CategoryDto
}
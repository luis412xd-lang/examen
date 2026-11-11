import { Product } from "../interfaces/product.interface";
import { ProductResponse } from "../responses/product.response";

export const productMapper = (
  data: ProductResponse
): Product => {
  return {
    id: data.id,
    name: data.title,
    image: data.image,
    price: data.price,
    category: data.category,
    description: data.description,
  };
};
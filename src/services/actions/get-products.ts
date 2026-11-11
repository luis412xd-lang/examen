import { productMapper } from "../../infrastructure/mappers/product.mapper";
import { ProductResponse } from "../../infrastructure/responses/product.response";
import { storeApi } from "../api/store-api";

export const getProducts = async () => {
  const response = await storeApi.get<ProductResponse[]>(
    "/products"
  );

  return response.data.map(productMapper);
};
import ProductServices from "@/services/ProductServices";

import useSwr from "swr";

const service = new ProductServices();

export const useGetAllProducts = () => {
  const { data, isLoading, error, mutate } = useSwr("/products", () =>
    service.getAll()
  );

  return {
    products: data || [],
    isLoading: isLoading,
    error: error,
    mutate: mutate,
  };
};

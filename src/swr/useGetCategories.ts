import CategoriesServices from "@/services/CategoriesServices";
import { ICategory } from "@/types/category.interface";

import useSwr from "swr";

const service = new CategoriesServices();

export const useGetAllCategories = () => {
  const { data, isLoading, error, mutate } = useSwr<ICategory[]>(
    "/categories",
    () => service.getAll()
  );

  return {
    categories: data || [],
    isLoading: isLoading,
    error: error,
    mutate: mutate,
  };
};

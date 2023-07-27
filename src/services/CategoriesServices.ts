import { ICategory } from "@/types/category.interface";
import { AppServices } from "./api";

class CategoriesServices extends AppServices {
  public async getAll(): Promise<ICategory[]> {
    const response = await this.api.get("/categories");
    return response.data;
  }
}

export default CategoriesServices;

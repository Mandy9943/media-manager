import { IProduct } from "@/types/product.interface";
import { AppServices } from "./api";

class ProductServices extends AppServices {
  public async getAll(): Promise<IProduct[]> {
    const response = await this.api.get("/products");
    return response.data;
  }

  public async incrementView(
    productId: number,
    currentViews: number
  ): Promise<IProduct> {
    const response = await this.api.patch(`/products/${productId}`, {
      views: currentViews + 1,
    });
    return response.data;
  }
  public async update(
    productId: number,
    product: Partial<IProduct>
  ): Promise<IProduct> {
    const { id, ...rest } = product;
    const productData = { ...rest };
    const response = await this.api.put(`/products/${productId}`, {
      ...productData,
    });
    return response.data;
  }
  public async post(product: Partial<IProduct>): Promise<IProduct> {
    const { id, ...rest } = product;
    const productData = { ...rest };
    const response = await this.api.post(`/products/`, {
      ...productData,
    });
    return response.data;
  }
  public async delete(productId: number): Promise<{}> {
    const response = await this.api.delete(`/products/${productId}`);

    return response.data;
  }
}

export default ProductServices;

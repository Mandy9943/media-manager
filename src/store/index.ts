import { IProduct } from "@/types/product.interface";
import { proxy } from "valtio";
interface IAppState {
  isProductModal: boolean;
  productForm?: IProduct;
}
const state = proxy<IAppState>({
  isProductModal: false,
  productForm: undefined,
});

export default state;

import state from "@/store";
import dynamic from "next/dynamic";
import { useSnapshot } from "valtio";

// lazy loading ProductFormModal
const ProductFormModal = dynamic(() => import("./ProductFormModal"));

const ProductFormCotainer = () => {
  const snap = useSnapshot(state);
  const onClose = () => {
    state.isProductModal = false;
  };
  const isOpen = snap.isProductModal;
  return (
    <>{isOpen && <ProductFormModal isOpen={isOpen} onClose={onClose} />}</>
  );
};

export default ProductFormCotainer;

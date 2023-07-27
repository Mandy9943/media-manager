import Container from "@/components/Container/Container";
import state from "@/store";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { BsPlusCircle } from "react-icons/bs";
import ProductFormCotainer from "./components/ProductFormModal/ProductFormCotainer";
import ProductTable from "./components/ProductTable/ProductTable";
const Home = () => {
  const handleOpenAddProductModal = () => {
    state.isProductModal = true;
    state.productForm = undefined;
  };
  return (
    <Container my={10}>
      <Flex w="full" mb={5}>
        <Button
          leftIcon={<Icon as={BsPlusCircle} />}
          onClick={handleOpenAddProductModal}
        >
          Media
        </Button>
      </Flex>
      <ProductTable />
      <ProductFormCotainer />
    </Container>
  );
};

export default Home;

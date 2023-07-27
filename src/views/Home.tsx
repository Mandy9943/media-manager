import Container from "@/components/Container/Container";
import state from "@/store";
import { Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { BsPlusCircle } from "react-icons/bs";
import ProductFormCotainer from "./components/ProductFormModal/ProductFormCotainer";
import ProductTable from "./components/ProductTable/ProductTable";
const Home = () => {
  const handleOpenAddProductModal = () => {
    state.isProductModal = true;
    state.productForm = undefined;
  };
  return (
    <Container pb={10}>
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
        textAlign={"center"}
        my={8}
      >
        Manage your media <br />
        <Text as={"span"} color={"green.400"} data-testid="heading-colorfull">
          in an easy way
        </Text>
      </Heading>
      <Flex w="full" mb={5} justifyContent={"flex-end"}>
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

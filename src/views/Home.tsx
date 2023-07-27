import Container from "@/components/Container/Container";
import { Button, Flex, Icon, useDisclosure } from "@chakra-ui/react";
import { BsPlusCircle } from "react-icons/bs";
import ProductFormModal from "./components/ProductFormModal/ProductFormModal";
import ProductTable from "./components/ProductTable/ProductTable";
const Home = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container my={10}>
      <Flex w="full" mb={5}>
        <Button leftIcon={<Icon as={BsPlusCircle} />} onClick={onOpen}>
          Media
        </Button>
      </Flex>
      <ProductTable />
      <ProductFormModal
        isOpen={isOpen}
        onClose={onClose}
        product={{
          id: 1,
          abbreviation: "ASFD",
          category: {
            name: "Sofa",
            hasLength: false,
          },
          insertDate: "2022-10-15",
          name: "Batma",
          releaseDate: "2020-10-20",
          views: 10,
          type: "movie",
        }}
      />
    </Container>
  );
};

export default Home;

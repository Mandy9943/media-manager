import Card from "@/components/Card/Card";
import CardBody from "@/components/Card/CardBody";
import SearchTable1 from "@/components/Tables/ReactTable";
import { useGetAllProducts } from "@/swr/useGetProducts";
import { Center, Spinner } from "@chakra-ui/react";
import productsColumns, { excludeSort } from "./columns";

const ProductTable = () => {
  const { products, isLoading } = useGetAllProducts();

  return (
    <Card px="0px" w="full">
      <CardBody>
        {isLoading ? (
          <Center minH="150px" w="full">
            <Spinner />
          </Center>
        ) : (
          <SearchTable1
            columnsData={productsColumns}
            tableData={products}
            disableSortKeys={excludeSort}
          />
        )}
      </CardBody>
    </Card>
  );
};

export default ProductTable;

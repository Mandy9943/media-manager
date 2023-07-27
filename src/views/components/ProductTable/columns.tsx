import ProductServices from "@/services/ProductServices";
import state from "@/store";
import { IProduct } from "@/types/product.interface";
import { ICellProps } from "@/types/table.interface";
import { formatDate, formatNumber, formatSecondsTime } from "@/utils/functions";
import { Divider, Flex, Icon, IconButton } from "@chakra-ui/react";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";
import { mutate } from "swr";
type ICell = ICellProps<IProduct>;

const productsColumns = [
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }: ICell) => {
      const rowData: IProduct = row.original;

      return <Flex w="full">{rowData.name}</Flex>;
    },
  },
  {
    header: "Type",
    accessorKey: "type",
    cell: ({ row }: ICell) => {
      const rowData: IProduct = row.original;

      return (
        <Flex justifyContent={"center"} w="full">
          {rowData.type}
        </Flex>
      );
    },
  },

  {
    header: "Length",
    accessorKey: "durationInSec",
    cell: ({ row }: ICell) => {
      const rowData: IProduct = row.original;

      const time = formatSecondsTime(rowData?.durationInSec);

      return (
        <Flex justifyContent={"center"} w="full">
          {time}
        </Flex>
      );
    },
  },
  {
    header: "Release Date",
    accessorKey: "releaseDate",
    cell: ({ row }: ICell) => {
      const rowData: IProduct = row.original;
      const date = new Date(rowData.releaseDate);

      const formatedDate = formatDate(date);

      return (
        <Flex justifyContent={"center"} w="full">
          {formatedDate}
        </Flex>
      );
    },
  },
  {
    header: "Insert Date",
    accessorKey: "insertDate",
    cell: ({ row }: ICell) => {
      const rowData: IProduct = row.original;
      const date = new Date(rowData.insertDate);

      const formatedDate = formatDate(date);

      return <Flex>{formatedDate}</Flex>;
    },
  },
  {
    header: "Views",
    accessorKey: "views",
    cell: ({ row }: ICell) => {
      const rowData: IProduct = row.original;

      return (
        <Flex justifyContent={"center"} w="full">
          {formatNumber(rowData.views)}
        </Flex>
      );
    },
  },
  {
    header: "Abbreviation",
    accessorKey: "abbreviation",
    cell: ({ row }: ICell) => {
      const rowData: IProduct = row.original;

      return (
        <Flex justifyContent={"center"} w="full">
          {rowData.abbreviation}
        </Flex>
      );
    },
  },
  {
    header: "Category",
    accessorFn: (originalRow: IProduct, index: number) =>
      originalRow.category.name,
    cell: ({ row }: ICell) => {
      const rowData: IProduct = row.original;

      return (
        <Flex justifyContent={"center"} w="full">
          {rowData.category.name}
        </Flex>
      );
    },
  },
  {
    header: "Options",
    accessorFn: (originalRow: IProduct, index: number) =>
      originalRow.category.name,
    cell: ({ row }: ICell) => {
      const rowData: IProduct = row.original;

      const productServices = new ProductServices();
      const handleUpdateProduct = () => {
        state.isProductModal = true;
        state.productForm = rowData;
      };
      const handleDeleteProduct = async () => {
        await productServices.delete(rowData.id);
        mutate("/products");
      };
      const handleAddview = async () => {
        await productServices.incrementView(rowData.id, rowData.views);
        mutate("/products");
      };

      return (
        <Flex gap={3} w="full" h="40px">
          <IconButton aria-label="edit product" onClick={handleUpdateProduct}>
            <Icon as={FiEdit2} />
          </IconButton>
          <IconButton aria-label="remove product" onClick={handleDeleteProduct}>
            <Icon as={FiTrash2} />
          </IconButton>

          <Divider orientation="vertical" />

          <IconButton aria-label="increment view" onClick={handleAddview}>
            <Icon as={FiEye} />
          </IconButton>
        </Flex>
      );
    },
  },
];

export default productsColumns;

export const excludeSort = [
  "Options",
  "Category",
  "Type",
  "Length",
  "Insert Date",
  "Name",
  "Insert Date",
  "Abbreviation",
];

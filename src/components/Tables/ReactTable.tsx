import {
  Button,
  Flex,
  Icon,
  Input,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  ColumnFiltersState,
  SortDirection,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from "react-icons/ti";

interface IProps {
  columnsData: any[];
  tableData: any;
  notShowEntriesText?: boolean;
  notShowPagination?: boolean;
  disableSortKeys?: string[];
}

const SearchTable1 = ({
  columnsData,
  tableData,
  notShowEntriesText,
  notShowPagination,
  disableSortKeys,
}: IProps) => {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
      globalFilter,
    },
  });

  const {
    getHeaderGroups,
    getRowModel,
    nextPage,
    previousPage,
    setPageSize,
    getState,
    getPageCount,
    setPageIndex,
    getCanNextPage,
    getCanPreviousPage,
  } = tableInstance;

  const createPages = (count: number) => {
    const arrPageCount = [];

    for (let i = 1; i <= count; i++) {
      arrPageCount.push(i);
    }

    return arrPageCount;
  };

  const {
    pagination: { pageIndex, pageSize },
  } = getState();

  const pageCount = getPageCount();

  const gotoPage = (page: number) => {
    setPageIndex(page);
  };

  return (
    <>
      <Flex
        direction="column"
        w="100%"
        overflowX={{ sm: "auto", lg: "hidden" }}
      >
        <Flex
          justify="space-between"
          align="center"
          w="100%"
          px={{ xs: "0px", lg: "22px" }}
        >
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ sm: "4px", md: "12px" }}
            align="center"
            me="12px"
            my="24px"
            minW={{ sm: "100px", md: "200px" }}
          >
            <Select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              color="gray.400"
              bg="#0F1535"
              border="0.5px solid"
              borderColor="#E2E8F04D"
              borderRadius="15px"
              size="sm"
              maxW="75px"
              cursor="pointer"
            >
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
            </Select>
            <Text fontSize="xs" color="gray.400" fontWeight="500">
              entries per page
            </Text>
          </Stack>
          <Input
            mb={{ xs: "20px", lg: "0px" }}
            color="gray.400"
            bg="#0F1535"
            border="0.5px solid"
            borderColor="#E2E8F04D"
            borderRadius="15px"
            type="text"
            placeholder="Search..."
            minW="75px"
            maxW="175px"
            fontSize="sm"
            _focus={{ borderColor: "teal.300" }}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </Flex>
        <Table variant="simple" color="gray.500" mb="24px">
          <Thead>
            {getHeaderGroups().map((headerGroup, index) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => {
                  const disableIndex = disableSortKeys?.findIndex(
                    (headerKey) => headerKey === header.column.columnDef.header
                  );
                  let disableSort = !header.column.getCanSort();

                  if (disableIndex !== undefined && disableIndex !== -1) {
                    disableSort = true;
                  }

                  return (
                    <Th borderColor="#56577A" pe="0px" key={index}>
                      <Flex
                        justify="space-between"
                        align="center"
                        fontSize={{ sm: "10px", lg: "12px" }}
                        color="gray.400"
                        onClick={
                          !disableSort
                            ? header.column.getToggleSortingHandler()
                            : undefined
                        }
                        {...(!disableSort
                          ? {
                              cursor: "pointer",
                            }
                          : {})}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {!disableSort && (
                          <Icon
                            w={{ sm: "10px", md: "14px" }}
                            h={{ sm: "10px", md: "14px" }}
                            color={!disableSort ? "gray.500" : "gray.400"}
                            float="right"
                            as={
                              header.column.getIsSorted()
                                ? (header.column.getIsSorted() as SortDirection) ===
                                  "desc"
                                  ? TiArrowSortedDown
                                  : TiArrowSortedUp
                                : TiArrowUnsorted
                            }
                          />
                        )}
                      </Flex>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {getRowModel().rows.map((row, index) => {
              return (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell, index) => {
                    return (
                      <Td
                        borderColor="#56577A"
                        color="white"
                        padding={{ xs: "20px 0px 12px 0px ", md: "12px" }}
                        paddingLeft={"8px"}
                        key={index}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Flex
          direction={{ sm: "column", md: "row" }}
          justify="space-between"
          align="center"
          w="100%"
          px={{ md: "22px" }}
        >
          {!notShowEntriesText && (
            <Text
              fontSize="sm"
              color="white"
              fontWeight="500"
              mb={{ sm: "24px", md: "0px" }}
            >
              Showing {pageSize * pageIndex + 1} to{" "}
              {pageSize * (pageIndex + 1) <= tableData.length
                ? pageSize * (pageIndex + 1)
                : tableData.length}{" "}
              of {tableData.length} entries
            </Text>
          )}
          <Stack
            direction="row"
            alignSelf="flex-end"
            spacing="4px"
            ms="auto"
            mb={4}
          >
            <Button
              variant="no-hover"
              onClick={() => previousPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="50%"
              bg="#fff"
              border="1px solid lightgray"
              display={
                pageSize === 5 ? "none" : getCanPreviousPage() ? "flex" : "none"
              }
              _hover={{
                bg: "gray.200",
                opacity: "0.7",
                borderColor: "gray.500",
              }}
              aria-label="previous"
            >
              <Icon as={GrFormPrevious} w="16px" h="16px" color="gray.400" />
            </Button>
            {!notShowPagination && (
              <>
                {createPages(pageCount).map((pageNumber, index) => {
                  return (
                    <Button
                      variant="no-hover"
                      transition="all .5s ease"
                      onClick={() => gotoPage(pageNumber - 1)}
                      w="40px"
                      h="40px"
                      borderRadius="160px"
                      bg={pageNumber === pageIndex + 1 ? "brand.200" : "#fff"}
                      key={index}
                      aria-label={"page " + pageNumber}
                    >
                      <Text
                        fontSize="xs"
                        color={
                          pageNumber === pageIndex + 1 ? "#fff" : "gray.600"
                        }
                      >
                        {pageNumber}
                      </Text>
                    </Button>
                  );
                })}
              </>
            )}
            <Button
              variant="no-hover"
              onClick={() => nextPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="160px"
              bg="#fff"
              display={
                pageSize === 5 ? "none" : getCanNextPage() ? "flex" : "none"
              }
              aria-label="next"
            >
              <Icon as={GrFormNext} w="16px" h="16px" color="gray.400" />
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export default SearchTable1;

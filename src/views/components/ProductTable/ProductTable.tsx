import Card from "@/components/Card/Card";
import CardBody from "@/components/Card/CardBody";
import SearchTable1 from "@/components/Tables/SearchTable1";
import { IProduct } from "@/types/product.type";
import productsColumns from "./columns";
const testData: IProduct[] = [
  {
    id: 1,
    name: "Spiderman",
    type: "movie",
    releaseDate: "2022-05-15",
    insertDate: "2023-07-26",
    views: 50000,
    abbreviation: "SM",
    category: {
      name: "Trailer Movie",
      hasLength: true,
    },
  },
  {
    id: 2,
    name: "Five Feet Apart",
    type: "movie",
    releaseDate: "2020-03-15",
    insertDate: "2023-07-26",
    views: 35000,
    abbreviation: "FFA",
    category: {
      name: "Internet",
      hasLength: true,
    },
  },
  {
    id: 3,
    name: "Spiderman: The Invisible Men",
    type: "movie",
    releaseDate: "2024-09-20",
    insertDate: "2023-07-26",
    views: 7500,
    abbreviation: "SIM",
    category: {
      name: "Trailer Movie",
      hasLength: true,
    },
  },
  {
    id: 4,
    name: "Stranger Things",
    type: "series",
    releaseDate: "2016-07-15",
    insertDate: "2023-07-26",
    views: 100000,
    abbreviation: "ST",
    category: {
      name: "Trailer TV",
      hasLength: false,
    },
  },
  {
    id: 5,
    name: "The Crown",
    type: "series",
    releaseDate: "2016-11-04",
    insertDate: "2023-07-26",
    views: 90000,
    abbreviation: "TC",
    category: {
      name: "Trailer TV",
      hasLength: false,
    },
  },
  {
    id: 6,
    name: "Avengers: Endgame",
    type: "movie",
    releaseDate: "2019-04-26",
    insertDate: "2023-07-26",
    views: 120000,
    abbreviation: "AE",
    category: {
      name: "Trailer Movie",
      hasLength: true,
    },
  },
  {
    id: 7,
    name: "The Mandalorian",
    type: "series",
    releaseDate: "2019-11-12",
    insertDate: "2023-07-26",
    views: 80000,
    abbreviation: "TM",
    category: {
      name: "Trailer TV",
      hasLength: false,
    },
  },
  {
    id: 8,
    name: "Inception",
    type: "movie",
    releaseDate: "2010-07-16",
    insertDate: "2023-07-26",
    views: 95000,
    abbreviation: "IN",
    category: {
      name: "Trailer Movie",
      hasLength: true,
    },
  },
  {
    id: 9,
    name: "Friends",
    type: "series",
    releaseDate: "1994-09-22",
    insertDate: "2023-07-26",
    views: 200000,
    abbreviation: "FR",
    category: {
      name: "Internet",
      hasLength: false,
    },
  },
  {
    id: 10,
    name: "Stranger Things 2",
    type: "series",
    releaseDate: "2017-10-27",
    insertDate: "2023-07-26",
    views: 110000,
    abbreviation: "ST2",
    category: {
      name: "Internet",
      hasLength: false,
    },
  },
];

const ProductTable = () => {
  return (
    <Card px="0px" w="full">
      <CardBody>
        <SearchTable1
          canPreviousPage
          columnsData={productsColumns}
          tableData={testData}
        />
      </CardBody>
    </Card>
  );
};

export default ProductTable;

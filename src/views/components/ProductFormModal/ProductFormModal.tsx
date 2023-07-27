import MyInput from "@/components/Inputs/Input";
import MySelect from "@/components/Inputs/Select";
import MyModal from "@/components/Modal/Modal";
import { IProduct } from "@/types/product.type";
import {
  Button,
  Flex,
  Grid,
  Heading,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const productValidationSchema = Yup.object({
  name: Yup.string().required(),
  type: Yup.string().required(),
  releaseDate: Yup.date().required(),
  insertDate: Yup.date().required(),
  views: Yup.number().required(),
  abbreviation: Yup.string().min(3),
  category: Yup.string().required(),
  length: Yup.number(),
});

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  product?: IProduct;
}
const ProductFormModal = ({ isOpen, product, onClose }: IProps) => {
  const formik = useFormik({
    initialValues: {
      name: product?.name || "",
      type: product?.type || "",
      releaseDate: product?.releaseDate || "",
      insertDate: product?.insertDate || "",
      views: product?.views || "",
      abbreviation: product?.abbreviation || "",
      category: product?.category.name || "",
      length: product?.durationInSec || "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      if (product) {
        // update product
      } else {
        // add product
      }
    },
    validationSchema: productValidationSchema,
  });
  return (
    <MyModal
      isOpen={isOpen}
      onClose={onClose}
      borderRadius={"20px"}
      size={"3xl"}
    >
      <ModalCloseButton />
      <ModalHeader borderRadius="1.5rem 1.5rem 0 0">
        <Heading fontSize={{ xs: "18px", md: "22px" }}>
          {" "}
          Create your Media
        </Heading>
      </ModalHeader>
      {/* <Divider /> */}
      <ModalBody pb={5}>
        <form onSubmit={formik.handleSubmit}>
          <Grid gridTemplateColumns={"1fr 1fr"} gap={5}>
            <MyInput
              label="Name"
              name="name"
              onChange={formik.handleChange}
              placeholder="eg. Spiderman"
              isInvalid={formik.touched.name && Boolean(formik.errors.name)}
              errorMessage={formik.errors.name}
              value={formik.values.name}
            />

            <MyInput
              label="Type"
              name="type"
              onChange={formik.handleChange}
              placeholder="eg. movie"
              isInvalid={formik.touched.type && Boolean(formik.errors.type)}
              errorMessage={formik.errors.type}
              value={formik.values.type}
            />
            <MyInput
              label="Release Date"
              name="releaseDate"
              onChange={formik.handleChange}
              placeholder="eg. 2023-07-27"
              type="date"
              isInvalid={
                formik.touched.releaseDate && Boolean(formik.errors.releaseDate)
              }
              errorMessage={formik.errors.type}
              value={formik.values.releaseDate}
            />
            <MyInput
              label="Insert Date"
              name="insertDate"
              onChange={formik.handleChange}
              placeholder="eg. 2023-07-27"
              type="date"
              isInvalid={
                formik.touched.insertDate && Boolean(formik.errors.insertDate)
              }
              errorMessage={formik.errors.type}
              value={formik.values.insertDate}
            />
            <MyInput
              label="Views"
              name="views"
              onChange={formik.handleChange}
              placeholder="eg. 100"
              type="number"
              isInvalid={formik.touched.views && Boolean(formik.errors.views)}
              errorMessage={formik.errors.views}
              value={formik.values.views}
            />
            <MyInput
              label="Abbreviation"
              name="abbreviation"
              onChange={formik.handleChange}
              placeholder="eg. Spiderman"
              isInvalid={
                formik.touched.abbreviation &&
                Boolean(formik.errors.abbreviation)
              }
              errorMessage={formik.errors.abbreviation}
              value={formik.values.abbreviation}
            />

            <MySelect
              label="Category"
              onChange={formik.handleChange}
              name="category"
              errorMessage={formik.errors.category}
              value={formik.values.category}
            />
            <MyInput
              label="Length"
              name="length"
              onChange={formik.handleChange}
              placeholder="eg. 450"
              type="number"
              isInvalid={formik.touched.length && Boolean(formik.errors.length)}
              errorMessage={formik.errors.length}
              value={formik.values.length}
            />
          </Grid>

          <Flex w="full" mt={6}>
            <Button
              variant={"solid"}
              colorScheme="green"
              w="full"
              maxW={"200px"}
              type="submit"
            >
              Send
            </Button>
          </Flex>
        </form>
      </ModalBody>
    </MyModal>
  );
};

export default ProductFormModal;

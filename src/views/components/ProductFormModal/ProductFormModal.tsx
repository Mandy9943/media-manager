import MyInput from "@/components/Inputs/Input";
import MySelect from "@/components/Inputs/Select";
import MyModal from "@/components/Modal/Modal";
import ProductServices from "@/services/ProductServices";
import state from "@/store";
import { useGetAllCategories } from "@/swr/useGetCategories";
import { IProduct } from "@/types/product.interface";
import {
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Spinner,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useEffect } from "react";
import { mutate } from "swr";
import { useSnapshot } from "valtio";
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
}
const ProductFormModal = ({ isOpen, onClose }: IProps) => {
  const { categories, isLoading } = useGetAllCategories();

  const snap = useSnapshot(state);
  const product = snap.productForm;
  const formik = useFormik({
    initialValues: {
      name: product?.name || "",
      type: product?.type || "",
      releaseDate: product?.releaseDate || "",
      insertDate: product?.insertDate || "",
      views: product?.views.toString() || "",
      abbreviation: product?.abbreviation || "",
      category: product?.category.name || "",
      length: product?.durationInSec?.toString() || "",
    },
    onSubmit: async (values) => {
      // Instantiate the ProductServices class to interact with the product API
      const productServices = new ProductServices();

      // Find the selected category from the categories array based on the form values
      const selectedCategory = categories.find(
        (category) => category.name === values.category
      );

      // Proceed only if a valid category is found
      if (selectedCategory) {
        // Prepare the product data object with the form values
        const dataProduct: Partial<IProduct> = {
          name: values.name,
          abbreviation: values.abbreviation,
          category: selectedCategory,
          insertDate: values.insertDate,
          releaseDate: values.releaseDate,
          type: values.type,
          views: parseInt(values.views),
        };

        // Check if the selected category has a "hasLength" property
        // If yes, add the "durationInSec" property to dataProduct
        if (dataProduct.category?.hasLength) {
          dataProduct["durationInSec"] = parseInt(values.length);
        }

        // Check if a product object is already available (for update operation)
        if (product) {
          // Update product: send a request to update the product with its ID and updated data
          await productServices.update(product.id, dataProduct);
        } else {
          // Add product: send a request to create a new product with the provided data
          await productServices.post(dataProduct);
        }

        // After adding or updating the product, trigger a cache update for the "/products" endpoint
        mutate("/products");

        state.isProductModal = false;
      }
    },

    validationSchema: productValidationSchema,
  });

  const selectedCategory = categories.find(
    (category) => category.name === formik.values.category
  );

  useEffect(() => {
    if (!product && categories.length > 0) {
      formik.setFieldValue("category", categories[0].name);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

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
        {isLoading ? (
          <Center minH="150px">
            <Spinner />
          </Center>
        ) : (
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
                  formik.touched.releaseDate &&
                  Boolean(formik.errors.releaseDate)
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
              >
                {categories.map((category) => {
                  return (
                    <option key={category.id} value={category.name}>
                      {category.name}{" "}
                    </option>
                  );
                })}
              </MySelect>

              {selectedCategory?.hasLength && (
                <MyInput
                  label="Length"
                  name="length"
                  onChange={formik.handleChange}
                  placeholder="eg. 450"
                  type="number"
                  isInvalid={
                    formik.touched.length && Boolean(formik.errors.length)
                  }
                  errorMessage={formik.errors.length}
                  value={formik.values.length}
                  isRequired
                />
              )}
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
        )}
      </ModalBody>
    </MyModal>
  );
};

export default ProductFormModal;

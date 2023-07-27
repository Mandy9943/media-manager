import { IProduct } from "@/types/product.interface";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import ProductServices from "../ProductServices";

// Mock the axios API requests
const mockApi = new MockAdapter(axios);

describe("ProductServices", () => {
  // Initialize ProductServices with the mocked axios instance
  const productServices = new ProductServices();

  // Test for getAll method
  it("should fetch all products", async () => {
    // Mock the response from the API
    const products: IProduct[] = [
      {
        name: "Spiderman",
        abbreviation: "SPM",
        category: {
          id: 0,
          name: "Trailer Movie",
          hasLength: true,
        },
        insertDate: "2023-07-22",
        releaseDate: "2022-05-14",
        type: "movie",
        views: 1000,
        durationInSec: 150,
        id: 1,
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
          id: 1,
          name: "Internet",
          hasLength: true,
        },
      },
    ];
    mockApi.onGet("/products").reply(200, products);

    const result = await productServices.getAll();
    expect(result).toEqual(products);
  });

  // Test for incrementView method
  it("should increment the views of a product", async () => {
    const productId = 1;
    const currentViews = 5;
    const updatedProduct: IProduct = {
      id: 2,
      name: "Five Feet Apart",
      type: "movie",
      releaseDate: "2020-03-15",
      insertDate: "2023-07-26",
      views: 35000,
      abbreviation: "FFA",
      category: {
        id: 1,
        name: "Internet",
        hasLength: true,
      },
    };
    mockApi.onPatch(`/products/${productId}`).reply(200, updatedProduct);

    const result = await productServices.incrementView(productId, currentViews);
    expect(result).toEqual(updatedProduct);
  });

  // Test for update method
  it("should update a product", async () => {
    const productId = 1;
    const productToUpdate: Partial<IProduct> = { name: "Updated Product 1" };
    const updatedProduct: IProduct = {
      id: 2,
      name: "Five Feet Apart",
      type: "movie",
      releaseDate: "2020-03-15",
      insertDate: "2023-07-26",
      views: 35000,
      abbreviation: "FFA",
      category: {
        id: 1,
        name: "Internet",
        hasLength: true,
      },
    };
    mockApi.onPut(`/products/${productId}`).reply(200, updatedProduct);

    const result = await productServices.update(productId, productToUpdate);
    expect(result).toEqual(updatedProduct);
  });

  // Test for post method
  it("should create a new product", async () => {
    const newProduct: Partial<IProduct> = { name: "New Product" };
    const createdProduct: IProduct = {
      id: 2,
      name: "Five Feet Apart",
      type: "movie",
      releaseDate: "2020-03-15",
      insertDate: "2023-07-26",
      views: 35000,
      abbreviation: "FFA",
      category: {
        id: 1,
        name: "Internet",
        hasLength: true,
      },
    };
    mockApi.onPost("/products/").reply(201, createdProduct);

    const result = await productServices.post(newProduct);
    expect(result).toEqual(createdProduct);
  });

  // Test for delete method
  it("should delete a product", async () => {
    const productId = 1;
    mockApi.onDelete(`/products/${productId}`).reply(200, {});

    const result = await productServices.delete(productId);
    expect(result).toEqual({});
  });
});

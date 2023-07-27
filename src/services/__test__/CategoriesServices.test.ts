import { ICategory } from "@/types/category.interface";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import CategoriesServices from "../CategoriesServices";

// Mock the axios API requests
const mockApi = new MockAdapter(axios);

describe("CategoriesServices", () => {
  // Initialize CategoriesServices with the mocked axios instance
  const categoriesServices = new CategoriesServices();

  // Test for getAll method
  it("should fetch all categories", async () => {
    // Mock the response from the API
    const categories: ICategory[] = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
    ];
    mockApi.onGet("/categories").reply(200, categories);

    const result = await categoriesServices.getAll();
    expect(result).toEqual(categories);
  });

  // Test for an empty list of categories
  it("should handle empty response", async () => {
    // Mock an empty response from the API
    mockApi.onGet("/categories").reply(200, []);

    const result = await categoriesServices.getAll();
    expect(result).toEqual([]);
  });

  // Test for handling errors
  it("should handle API error", async () => {
    // Mock an error response from the API
    mockApi.onGet("/categories").reply(500, { error: "Internal Server Error" });

    // Ensure the method rejects the promise when an error occurs
    await expect(categoriesServices.getAll()).rejects.toThrow();
  });
});

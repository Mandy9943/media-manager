import axios, { AxiosInstance } from "axios";

export class AppServices {
  private static readonly BASE_URL = "http://localhost:4000";

  readonly api: AxiosInstance = axios.create({
    baseURL: AppServices.BASE_URL,
    timeout: 5000,
  });
}

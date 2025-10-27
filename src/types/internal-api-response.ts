export type InternalApiResponse<T> = {
  data: T;
  error?: string;
  status: number;
  message?: string;
};

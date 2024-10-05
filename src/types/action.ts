export type ActionGenericResponse<T> = {
  success: boolean;
  message: string;
  data: T | null;
};

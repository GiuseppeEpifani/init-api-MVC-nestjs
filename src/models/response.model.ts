export class ResponseModel<T> {
  message: string;
  body: T | T[];
}
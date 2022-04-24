export interface HttpResponse {
  status: number;
  message?: string;
  errors?: string[];
  data?: any;
}

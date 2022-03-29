import axios, {AxiosResponse} from 'axios';

type httpClientParams = {
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE';
  data?: any;
  endPoint: string;
  baseURL: string;
};

type httpClientResponseTypes<t> = {
  statusCode: number;
  data: t;
};

export async function httpClient<t>({
  method = 'GET',
  baseURL,
  data,
  endPoint,
}: httpClientParams): Promise<httpClientResponseTypes<t>> {
  try {
    const response: AxiosResponse<any, t> = await axios.request({
      method,
      baseURL,
      data,
      url: endPoint,
    });

    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      data: error.message,
    };
  }
}

import axios, {AxiosResponse} from 'axios';

type httpClientParams = {
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE';
  data?: any;
  endPoint: string;
  baseURL: string;
};

export async function httpClient({
  method = 'GET',
  baseURL,
  data,
  endPoint,
}: httpClientParams): Promise<any> {
  try {
    const response: AxiosResponse = await axios.request({
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
      data: error,
    };
  }
}

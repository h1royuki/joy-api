import axios, {AxiosInstance, AxiosResponse} from 'axios';
import cheerio from 'cheerio';
import Root = cheerio.Root;

class AxiosService {

    public createInstance(baseURL: string): AxiosInstance {
        const instance : AxiosInstance = axios.create({baseURL});

        // @ts-ignore
        instance.interceptors.response.use((response : AxiosResponse) : Root => cheerio.load(response.data));

        return instance;
    }
}

export default new AxiosService();

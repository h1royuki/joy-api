import {AxiosInstance} from "axios";
import axiosService from "./services/axiosService"
import apiService from "./parsers/pageParser";
import Page from "./models/Page";
import Root = cheerio.Root;

export class JoyApi {
    private instance: AxiosInstance;

    constructor(baseUrl = 'http://joyreactor.cc/') {
        this.instance = axiosService.createInstance(baseUrl);
    }

    public async getPage(pageNumber: number | null = null): Promise<Page | void> {
        try {
            const url: string = pageNumber ? '/' + pageNumber : '/';
            const $cheerio: Root = await this.instance.get(url);

            return apiService.parsePage($cheerio);
        } catch (e) {
            console.log(e);
        }
    }
}

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

    public async getHomePage(pageNumber: number | null = null): Promise<Page | void> {
        try {
            const url: string = pageNumber ? '/' + pageNumber : '/';
            const $cheerio: Root = await this.instance.get(url);

            return apiService.parsePage($cheerio);
        } catch (e) {
            console.log(e);
        }
    }

    public async getTagPage(pageNumber: number | null = null, tag: string): Promise<Page | void> {
        try {
            let url: string = '/tag/';

            url += tag.replace(/\s/, '+');
            url += pageNumber ? '/' + pageNumber : '';

            const $cheerio: Root = await this.instance.get(encodeURI(url));

            return apiService.parsePage($cheerio);
        } catch (e) {
            console.log(e);
        }
    }

    public async getUserPage(pageNumber: number | null = null, user: string): Promise<Page | void> {
        try {
            let url: string = '/user/';

            url += user.replace(/\s/, '+');
            url += pageNumber ? '/' + pageNumber : '';

            const $cheerio: Root = await this.instance.get(encodeURI(url));

            return apiService.parsePage($cheerio);
        } catch (e) {
            console.log(e);
        }
    }
}

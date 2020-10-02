import Root = cheerio.Root;
import Element = cheerio.Element;
import postParser from "./Post/postParser";
import Page from "../models/Page";

class PageParser {

    public parsePage($page: Root): Page
    {
        const page : Page = new Page();
        const postContainers  = $page('.postContainer');

        postContainers.map((i : number, el : Element): void => {
            page.addPost(postParser.parsePost(el));
        });

        page.nextPage = PageParser.parsePageNumber($page, 'next');
        page.prevPage = PageParser.parsePageNumber($page, 'prev')

        return page;
    }

    private static parsePageNumber($page: Root, name: string): number|null
    {
        const page : Element = $page('.pagination_main > .' + name)[0];

        return page ? Number(page.attribs.href.slice(1)) : null;
    }
}

export default new PageParser();

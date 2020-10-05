import User from "../../models/User";
import Post from "../../models/Post";
import cheerio from "cheerio";
import Content from "../../models/Post/Content";
import contentParser from "./Content/contentParser";
import Element = cheerio.Element;
import Root = cheerio.Root;


class PostParser {
    public parsePost(html: Element): Post {
        const post = new Post();
        const $post = cheerio.load(html);

        post.id = PostParser.parseId(html);
        post.tags = PostParser.parsePostTags($post);
        post.author = PostParser.parsePostAuthor($post);
        post.date = PostParser.parsePostDate($post);
        post.rating = PostParser.parsePostRating($post);
        post.commentsCount = PostParser.parseCommentsCount($post);
        post.content = PostParser.parseContent($post);

        return post;
    }

    private static parseContent($post: Root): Content {
        const content = new Content();
        const elements: Element[] = $post('.post_content')[0].children;

        content.elements = contentParser.parse(elements);

        return content;
    }

    private static parseCommentsCount($post: Root): number | null {
        const text: Element = $post('.commentnum')[0].children[0];
        const match: RegExpMatchArray | null = text.data ? text.data.match(/\s(\d*)/) : null;

        return match ? Number(match[1]) : null;
    }

    private static parsePostRating($post: Root): number | null {
        const el: Element = $post('.post_rating > span')[0].children[0];

        return el.data ? Number(el.data) : null;
    }

    private static parsePostDate($post: Root): number | null {
        const el: Element = $post('.non-localized-time')[0];

        return el ? Number(el.attribs['data-time']) : null;
    }

    private static parsePostAuthor($post: Root): User {
        const user = new User();
        const link: Element = $post('.uhead_nick > img')[0];

        const nickname: string = link.attribs.alt;
        const id = link.attribs.src.match(/\/(\d+)/);

        user.id = id ? Number(id[1]) : null;
        user.nickname = nickname;

        return user;
    }

    private static parsePostTags($post: Root): string[] {
        const tags: string[] = [];
        const elements = $post('.taglist > b > a');

        elements.map((i: number, el: Element) => {
            const tag: string = el.attribs.title;
            tags.push(tag);
        })

        return tags;
    }

    private static parseId($post: Element): number|null {
        const containerName: string = $post.attribs.id;
        const match: RegExpMatchArray | null = containerName.match(/\d+/);

        return match ? Number(match[0]) : null;
    }
}

export default new PostParser();

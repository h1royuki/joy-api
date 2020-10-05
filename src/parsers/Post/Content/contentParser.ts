import ContentElement from "../../../models/Post/Content/ContentElement";
import Element = cheerio.Element;

class ContentParser {

    public parse(elements: Element[]): ContentElement[] {
        const contentElements: ContentElement[] = [];

        elements.map((el) => {
            const object = new ContentElement();

            if (el.attribs && el.attribs.class === 'image') {
                ContentParser.parseMediaContent(el, object);
                contentElements.push(object);
            } else {
                ContentParser.parseTextContent(el, object);

                if (object.data) {
                    contentElements.push(object);
                }

                if (el.children) {
                    contentElements.push(...this.parse(el.children));
                }
            }
        })

        return contentElements;
    }

    private static parseTextContent(el: Element, object: ContentElement): ContentElement {
        const textTags = ['h3', 'p'];

        if (textTags.includes(el.name)) {
            object.type = el.name;
            object.data = ContentParser.searchText(el.children);
        }

        if (el.type === 'text') {
            object.type = 'p';
            object.data = el.data ? el.data : null;
        }

        if (el.name === 'a') {
            if (el.attribs.href) {
                object.type = 'a';
                object.data = el.children[0] ? String(el.children[0].data) : null;
                object.link = el.attribs.href;
            }
        }

        return object;
    }

    private static searchText(elements: Element[]): string | null {
        let text: string = '';

        elements.map((el) => {
            if(el.data && el.data.length > 0) {
                text += el.data + ' ';
            }

            if(el.children) {
                text += ContentParser.searchText(el.children);
            }
        })

        return text;
    }

    private static parseMediaContent(el: Element, object: ContentElement): ContentElement {
        const children: Element = el.children[0];

        if (children.name === 'img') {
            object.type = ContentElement.IMAGE_TYPE;
            object.data = children.attribs.src;
        }

        if (children.name === 'a') {
            object.type = ContentElement.IMAGE_TYPE;
            object.data = children.children[0] ? children.children[0].attribs.src : null;
        }

        if (children.name === 'span') {
            object.type = ContentElement.VIDEO_TYPE;
            object.data = children.children[0] ? children.children[0].attribs.href : null;
        }

        if (children.name === 'iframe') {
            object.type = ContentElement.IFRAME_TYPE;
            object.data = children.attribs.src;
        }

        return object;
    }
}

export default new ContentParser();

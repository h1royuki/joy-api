import ContentElement from "../../../models/Post/Content/ContentElement";
import Element = cheerio.Element;

class ContentParser {

    public parse(elements: Element[]): ContentElement[] {
        const contentElements: ContentElement[] = [];

        elements.map((el) => {
            const object = new ContentElement();

            if (el.attribs && el.attribs.class === 'image') {
                ContentParser.parseMediaContent(el, object);
            } else {
                if (el.children && el.children.length > 0) {
                    object.childrens = this.parse(el.children);
                }

                object.type = el.name ? el.name : el.type;
                object.data = el.data ? el.data : null;
            }

            contentElements.push(object);
        })

        return contentElements;
    }

    private static parseMediaContent(el: Element, object: ContentElement): ContentElement {
        const children: Element = el.children[0];

        if (children.name === 'img') {
            object.type = ContentElement.IMAGE_TYPE;
            object.data = children.attribs.src;
        }

        if (children.name === 'a') {
            object.type = ContentElement.IMAGE_TYPE;
            object.data = children.children[0].attribs.src;
        }

        if (children.name === 'span') {
            object.type = ContentElement.VIDEO_TYPE;
            object.data = children.children[0].attribs.href;
        }

        if (children.name === 'iframe') {
            object.type = ContentElement.IFRAME_TYPE;
            object.data = children.attribs.src;
        }

        return object;
    }
}

export default new ContentParser();

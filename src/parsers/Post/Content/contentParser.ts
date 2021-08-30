import ContentElement from "../../../models/Post/Content/ContentElement";
import Element = cheerio.Element;

class ContentParser {

    public parse(elements: Element[], parentTag: string | null = null): ContentElement[] {
        const contentElements: ContentElement[] = [];

        elements.map((el) => {
            const object = new ContentElement();

            const tag = el.name ? el.name : null;
            const isText = el.type === 'text';

                // is media (gif, iframe, image)
            if (el.attribs && el.attribs.class === 'image') {
                ContentParser.parseMediaContent(el, object);

                contentElements.push(object);
                // is link
            } else if (el.name === 'a' && el.attribs.href) {
                object.type = ContentElement.LINK_TYPE;
                object.data = el.children[0] ? String(el.children[0].data) : null;
                object.link = el.attribs.href;

                contentElements.push(object);
                // another - text, we trying to get all text with tags from children tags
            } else {
                if (isText) {
                    object.data = el.data ? el.data : '';
                    object.type = ContentElement.TEXT_TYPE;
                    object.tag = parentTag;

                    contentElements.push(object);
                }

                if (el.children) {
                    const childrens = this.parse(el.children, tag);

                    contentElements.push(...childrens);
                }
            }
        })

        return contentElements;
    }

    private static parseMediaContent(el: Element, object: ContentElement): ContentElement {
        let children: Element = el.children[0];

        if (children.name === 'img' || children.name === 'a') {
            children = children.children[0] ? children.children[0] : children;

            object.type = ContentElement.IMAGE_TYPE;
            object.data = children.attribs.src;
            object.height = children.attribs.height;
            object.width = children.attribs.width;
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

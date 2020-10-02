import ContentElement from "./Content/ContentElement";

export default class Content {
    private _elements: ContentElement[];

    constructor() {
        this._elements = [];
    }

    get elements(): ContentElement[] {
        return this._elements;
    }

    set elements(value: ContentElement[]) {
        this._elements = value;
    }

}


import ContentElement from "./Content/ContentElement";

export default class Content {
    private _elements: Array<ContentElement>;

    constructor() {
        this._elements = [];
    }

    get elements(): Array<ContentElement> {
        return this._elements;
    }

    set elements(value: Array<ContentElement>) {
        this._elements = value;
    }

}


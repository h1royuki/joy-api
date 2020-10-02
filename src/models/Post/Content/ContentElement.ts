export default class ContentElement {

    public static readonly IMAGE_TYPE = 'image';
    public static readonly IFRAME_TYPE = 'iframe';
    public static readonly VIDEO_TYPE = 'video'

    private _type: string|null;
    private _data: string|number|null;
    private _childrens : ContentElement[];

    constructor() {
        this._childrens = [];
        this._type = null;
        this._data = null;
    }

    get type(): string | null {
        return this._type;
    }

    set type(value: string | null) {
        this._type = value;
    }

    get data(): string | number | null {
        return this._data;
    }

    set data(value: string | number | null) {
        this._data = value;
    }

    get childrens(): ContentElement[] {
        return this._childrens;
    }

    set childrens(value: ContentElement[]) {
        this._childrens = value;
    }
}


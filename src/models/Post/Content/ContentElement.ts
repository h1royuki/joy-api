export default class ContentElement {

    public static readonly IMAGE_TYPE = 'image';
    public static readonly IFRAME_TYPE = 'iframe';
    public static readonly VIDEO_TYPE = 'video';
    public static readonly TEXT_TYPE = 'text';
    public static readonly LINK_TYPE = 'link';

    private _type: string|null;
    private _data: string|number|null;
    private _tag: string|null;
    private _link: string|null;
    private _width: number|null;
    private _height: number|null;

    constructor() {
        this._type = null;
        this._data = null;
        this._tag = null;
        this._link = null;
        this._width = null;
        this._height = null;
    }

    set tag(value: string | null) {
        this._tag = value;
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

    get link(): string | null {
        return this._link;
    }

    set link(value: string | null) {
        this._link = value;
    }

    set height(value: number | null) {
        this._height = value;
    }

    set width(value: number | null) {
        this._width = value;
    }
}


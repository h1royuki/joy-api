export default class ContentElement {

    public static readonly IMAGE_TYPE = 'image';
    public static readonly IFRAME_TYPE = 'iframe';
    public static readonly VIDEO_TYPE = 'video';

    private _type: string|null;
    private _data: string|number|null;
    private _link: string| null;

    constructor() {
        this._type = null;
        this._data = null;
        this._link = null;
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

    get link(): string | null {
        return this._link;
    }

    set link(value: string | null) {
        this._link = value;
    }
}


export default class User {
    private _id : number | null;
    private _nickname : string | null;

    constructor() {
        this._id = null;
        this._nickname = null;
    }

    get id(): number | null {
        return this._id;
    }

    set id(value: number | null) {
        this._id = value;
    }

    get nickname(): string | null {
        return this._nickname;
    }

    set nickname(value: string | null) {
        this._nickname = value;
    }
}

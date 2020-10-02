import Content from "./Post/Content";
import User from "./User";

export default class Post {

    private _id: number|null;
    private _content: Content | null;
    private _author: User | null;
    private _tags: string[] | null;
    private _date: number | null;
    private _commentsCount: number | null;
    private _rating: number | null;

    constructor() {
        this._id = null;
        this._content = null;
        this._author = null;
        this._tags = [];
        this._date = null;
        this._commentsCount = null;
        this._rating = null;
    }

    get id(): number | null {
        return this._id;
    }

    set id(value: number | null) {
        this._id = value;
    }

    get content(): Content | null {
        return this._content;
    }

    set content(value: Content | null) {
        this._content = value;
    }

    get author(): User | null {
        return this._author;
    }

    set author(value: User | null) {
        this._author = value;
    }

    get tags(): string[] | null {
        return this._tags;
    }

    set tags(value: string[] | null) {
        this._tags = value;
    }

    get date(): number | null {
        return this._date;
    }

    set date(value: number | null) {
        this._date = value;
    }

    get commentsCount(): number | null {
        return this._commentsCount;
    }

    set commentsCount(value: number | null) {
        this._commentsCount = value;
    }

    get rating(): number | null {
        return this._rating;
    }

    set rating(value: number | null) {
        this._rating = value;
    }
}

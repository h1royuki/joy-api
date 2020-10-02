import Post from "./Post";

export default class Page {

    private readonly _posts: Post[];
    private _prevPage: number | null;
    private _nextPage: number | null;

    constructor() {
        this._posts = [];
        this._nextPage = null;
        this._prevPage = null;
    }

    get posts(): Post[] | undefined {
        return this._posts;
    }

    addPost(value: Post) {
        this._posts.push(value);
    }

    get prevPage(): number | null {
        return this._prevPage;
    }

    set prevPage(value: number | null) {
        this._prevPage = value;
    }

    get nextPage(): number | null {
        return this._nextPage;
    }

    set nextPage(value: number | null) {
        this._nextPage = value;
    }
}


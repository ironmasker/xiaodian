export class Like {
    private _selected: boolean = false;

    constructor(private _count: number) {
    }

    get count() {
        return this._count;
    }

    get selected() {
        return this._selected;
    }

    like() {
        this._selected = ! this._selected;
        this._count += this._selected ? 1 : -1;
    }
}

declare interface Array<T> {
    last(): T;
    last(n: number): T[];
    last(n: 1, predicateFn?: (value: T, index?: number, array?: T[]) => boolean): T;
    last(n: number, predicateFn?: (value: T, index?: number, array?: T[]) => boolean): T[];
    first(): T;
    first(n: number): T | T[];
    first(n: 1, predicateFn?: (value: T, index?: number, array?: T[]) => boolean): T;
    first(n: number, predicateFn?: (value: T, index?: number, array?: T[]) => boolean): T[];
}
Array.prototype.last = function <T>(n?: number, predicateFn?: (value: T, index?: number, array?: T[]) => boolean): T | T[] {
    if (n == undefined) return this[this.length - 1];
    if (n == 1) return this.filter(predicateFn ?? (() => true)).last();
    return this.filter(predicateFn ?? (() => true)).slice(-n);
}
Array.prototype.first = function <T>(n?: number, predicateFn?: (value: T, index?: number, array?: T[]) => boolean): T | T[] {
    if (n == undefined) return this[0];
    if (n == 1) return this.filter(predicateFn ?? (() => true))[0];
    return this.filter(predicateFn ?? (() => true)).slice(0, n - 1);
}
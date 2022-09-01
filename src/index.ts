declare interface Array<T> {
    /**
     * Returns the last element of the array.
     */
    last(): T;
    /**
     * Returns the last *n* elements of the array.
     */
    last(n: number): T[];
    /**
     * Returns the last element of the array that fulfills the predicate function.
     * @param n Amount of elements to return
     * @param predicateFn A function that accepts up to three arguments. The last method calls the predicate function one time for each element in the array, and keeps the element only if the predicate function returns `true`.
     */
    last(n: 1, predicateFn?: (value: T, index?: number, array?: T[]) => boolean): T;
    /**
     * Returns the last *n* elements of the array that fulfill the predicate function.
     * @param n Amount of elements to return
     * @param predicateFn A function that accepts up to three arguments. The last method calls the predicate function one time for each element in the array, and keeps the element only if the predicate function returns `true`.
     */
    last(n: number, predicateFn?: (value: T, index?: number, array?: T[]) => boolean): T[];
    /**
     * Returns the first element of the array.
     * 
     * Works the same as doing `array[0]`.
     */
    first(): T;
    /**
     * Returns the first *n* elements of the array.
     */
    first(n: number): T | T[];
    /**
     * Returns the first element of the array that fulfills the predicate function.
     * @param n Amount of elements to return.
     * @param predicateFn A function that accepts up to three arguments. The last method calls the predicate function one time for each element in the array, and keeps the element only if the predicate function returns `true`.
     */
    first(n: 1, predicateFn?: (value: T, index?: number, array?: T[]) => boolean): T;
    /**
     * Returns the first *n* elements of the array that fulfill the predicate function.
     * @param n Amount of elements to return
     * @param predicateFn A function that accepts up to three arguments. The last method calls the predicate function one time for each element in the array, and keeps the element only if the predicate function returns `true`.
     */
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
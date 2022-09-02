import "./index.min";

// array of randomly chosen numbers
const array = [
    78, 6,  40, 55, 63,
    85, 58, 70, 55, 79,
    12, 15, 74, 70, 62,
    71, 7,  53, 96, 4,
];

describe('Array.prototype.last', () => {
    it('should be defined', () => {
        expect(Array.prototype.last).toBeTruthy();
    });
    it('should be a function', () => {
        expect(Array.prototype.last).toBeInstanceOf(Function);
    });
    it('should return the correct element', () => {
        expect(array.last()).toBe(4);
    });
    it('should return the correct array of elements', () => {
        expect(array.last(3)).toEqual([53, 96, 4]);
    });
    it('should return the correct element using predicate', () => {
        expect(array.last(1, v => v < 20 && v > 10)).toBe(15);
    });
    it('should return the correct array of elements using predicate', () => {
        expect(array.last(4, v => v < 16)).toEqual([12, 15, 7, 4]);
    });
});
describe('Array.prototype.first', () => {
    it('should be defined', () => {
        expect(Array.prototype.first).toBeTruthy();
    });
    it('should be a function', () => {
        expect(Array.prototype.first).toBeInstanceOf(Function);
    });
    it('should return the correct element', () => {
        expect(array.first()).toBe(78);
    });
    it('should return the correct array of elements', () => {
        expect(array.first(3)).toEqual([78, 6, 40]);
    });
    it('should return the correct element using predicate', () => {
        expect(array.first(1, v => v < 20 && v > 10)).toBe(12);
    });
    it('should return the correct array of elements using predicate', () => {
        expect(array.first(4, v => v > 70)).toEqual([78, 85, 79, 74]);
    });
});
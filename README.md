# first & last
[NPM](https://img.shields.io/npm/v/first-last.svg)

Two array functions for selecting first or last n elements.

## Installation
### Node
```
npm install first-last --save
```

### Browser
Coming soon

## Usage
### Node
```typescript
require('first-last');
// or
import {} from 'first-last';
```

### Browser
All declarations are automatically available in all other files.

## Functions
### last()
```typescript
last(): T;
last(n: number): T[];
last(n: 1, predicateFn?: (value: T, index?: number, array?: T[]) => boolean): T;
last(n: number, predicateFn?: (value: T, index?: number, array?: T[]) => boolean): T[];
```
Returns the last element, or *n* last elements that fulfill the predicate function.

If the predicate function is not passed, last elements are chosen from **all** array elements.

#### Example
```typescript
const arr = [ 'Cat', 'Dog', 'Frog', 'Elephant', 'Bird', 'Bee', 'Pig', 'Duck', 'Sheep' ];

arr.last(); // -> 'Sheep'
arr.last(3); // -> [ 'Pig', 'Duck', 'Sheep' ]
arr.last(1, v => v.length <= 4); // -> 'Duck'
arr.last(2, v => v.length <= 3); // -> [ 'Bee', 'Pig' ]
```

### first()
```typescript
first(): T;
first(n: number): T[];
first(n: 1, predicateFn?: (value: T, index?: number, array?: T[]) => boolean): T;
first(n: number, predicateFn?: (value: T, index?: number, array?: T[]) => boolean): T[];
```
Returns the first element, or *n* first elements that fulfill the predicate function.

If the predicate function is not passed, first elements are chosen from **all** array elements.

#### Example
```typescript
const arr = [ 'Cat', 'Dog', 'Frog', 'Elephant', 'Bird', 'Bee', 'Pig', 'Duck', 'Sheep' ];

arr.first(); // -> 'Cat'
arr.first(3); // -> [ 'Cat', 'Dog', 'Frog' ]
arr.first(1, v => v.length >= 4); // -> 'Frog'
arr.first(2, v => v.length == 4); // -> [ 'Frog', 'Bird' ]
```

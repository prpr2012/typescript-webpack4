import { Pan } from './world';
// function log<T>(value: T): T {
//     return value;
// }
// log<number[]>([1, 2]);
interface Person {
    name: string;
}
function identity<T extends Person>(arg: T): T {
    return arg;
}
let output1 = identity({
    name: 'pan',
    age: 12,
});
console.log(output1);
let test: Pan = {
    show() {
        console.log(88);
    },
    eat() {
        console.log(99);
    },
};

test.show();

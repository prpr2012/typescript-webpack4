import { List } from './types';
type Add = (x: number) => number;
interface Result {
    data: List[];
}
const test: Add = (a: number) => a;

function apple(x: number) {
    return test(x);
}

//提交代码
function render(result: Result) {
    console.log(result);
}
export { render, apple };

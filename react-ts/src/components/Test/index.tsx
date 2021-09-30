import React from 'react';
let isDone: boolean = false;
let str: string = 'test'
let arr: number[] = [1, 2];
let list: Array<number> = [1, 2, 3, 4];
console.log(`arr`, arr);
console.log(`list`, list);

enum Color {Red, Green, Blue}  // 枚举
let c: Color = Color.Green;
console.log(`c`, c);


let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;

console.log(`strLength`, strLength);

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = [2, 3, 4];
// a = ro; // error!
a = ro as number[];
console.log(`a`, a)

interface SearchFunc {
  (source: string, subString: string): boolean;
}
let searchFunc: SearchFunc = (src, sub) => {
  let result = src.search(sub);
  return result > -1;
}
console.log(`searchFunc`, searchFunc('hello', 'world'))

function Test() {
  isDone = true;
  str = '修改的'
  return (<div>我是TEST组件{str + isDone}</div>)
}
export default Test;
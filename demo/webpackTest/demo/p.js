let a = [1, 2, 3, 4];
console.log(a);
console.log(...a);

let b = {
    name: "小明",
    age: 18,
    sex: 'm'
};
let c = () => {
    console.log(arguments)
};
c(...b);
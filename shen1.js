// 简单object
const a = {
    b: 1,
    // fun: () => {console.log(1)}
}

const c = JSON.parse(JSON.stringify(a));

c.b = 2;

console.log(a, c);
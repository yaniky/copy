// 带function
// 递归，深度遍历
const a = {
    arr: [1, {b: 1}, 3],
    obj: {b: 1},
    num: 1,
    fun: () => {console.log(1)}
}

function copy(obj) {
    const res = {};

    let arrObj = null;

    for(const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (obj[key] instanceof Array) {
                arrObj = copy(obj[key]) || {};
                arrObj.length = Object.keys(arrObj).length;
                res[key] = Array.from(arrObj);
            } else if (typeof obj[key] === "object") {
                res[key] = copy(obj[key]);
            } else {
                res[key] = obj[key];
            }
        }
    }

    return res;
}

const c = copy(a);

c.arr[1].b = 4;
c.obj.b = 2;
c.num = 3;

console.log(a, c);

// 问题：循环引用
const a = {
    b: 1
}

a.a = a;

const links = [];

function isCopy(obj) {
    for (const item of links) {
        if (item.source === obj) {
            return item.tag;
        }
    }
    return null;
}

function copy(obj) {
    const copyTag = isCopy(obj);
    if (copyTag) {
        return copyTag;
    }

    const res = {};

    links.push({
        source: obj,
        tag: res
    })

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

c.b = 2;

console.log(c, a);

// 拓展，对内存要求高的可以使用广度优先遍历方式，通过迭代来拷贝
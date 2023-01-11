// 数组去重
// 方法1 Set
// function uniqueArr(arr) {
//     return [...new Set(arr)]
// }

// 方法2 新数组 push
// function uniqueArr(arr) {
//     let array = []
//     arr.forEach(item => {
//         if (!array.includes(item)){
//             array.push(item)
//         }
//     });
//     return array
// }
// 方法3
function uniqueArr(arr) {
    return arr.reduce((pre, cur) => {
        if (!pre.includes(cur)) {
            return [...pre, cur];
        }
        return pre;
    }, []);
}

const arr = [1, 2, 3, 4, 3, 4];
console.log(uniqueArr(arr));

let input = [
    {
        id: 1,
        val: "id1",
        parentId: null,
    },
    {
        id: 2,
        val: "id2",
        parentId: 1,
    },
    {
        id: 3,
        val: "id3",
        parentId: 1,
    },
    {
        id: 4,
        val: "id4",
        parentId: 2,
    },
    {
        id: 5,
        val: "id5",
        parentId: 3,
    },
    {
        id: 6,
        val: "id6",
        parentId: 3,
    },
];
function convert(list) {
    let result = [];
    let map = new Map();
    list.forEach((item) => {
        map.set(item.id, item);
    });
    for (let item of map) {
        if (item.parentId === null) {
            result.push(item);
        } else {
            let parent = map.get(item.parentId);
            if (parent) {
                parent.children = parent.children || [];
                parent.children.push(item);
            }
        }
    }
    return result;
}
console.log(convert(input));

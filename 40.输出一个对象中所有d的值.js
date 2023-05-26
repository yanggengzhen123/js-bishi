let X = {
    y:{
        c:{
            d:1
        }
    },
    z:{
        e:{
            d:2
        }
    },
    q:{
        f:{
            d:3
        }
    },
    o:{
        m:{g:{h:{d:4}}}
    },
}
// 递归思想
const findX = (obj) => {
    let res = []
    const find = (obj) => {
        if(obj['d']){
            res.push(obj['d'])
        }
        for(let i in obj){
            find(obj[i])
        }
    }
    find(obj)
    return res
}

console.log(findX(X)) 
Function.prototype.myCall = (context,...args) => {
    context = context || window
    let fn = Symbol()
    context[fn] = this
    return context[fn](...args)
}
Function.prototype.myApply = (context,args) => {
    context = context || window
    let fn = Symbol()
    context[fn] = this
    return context[fn](...args)
}
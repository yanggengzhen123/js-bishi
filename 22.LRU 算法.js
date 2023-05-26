class LRUCache {
    capacity
    map = new Map()
    constructor(capacity) {
        this.capacity = capacity
    }
    get(key) {
        if(this.map.has(key)){
            let val = this.map.get(key)
            this.map.delete(key)
            this.map.set(key,val)
            return val
        }
        return -1
    }
    put(key, value) {
        if(this.map.has(key)) this.map.delete(key)
        this.map.set(key,value)
        if(this.capacity < this.map.size){
            this.map.delete(this.map.keys().next().value)
        }
    }
}
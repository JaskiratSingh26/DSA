let size = 10 ** 6
function getindex(key) {
    return key % size
}
var MyHashSet = function () {
    this.buckets = new Array(size).fill(null).map(() => [])
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    let index = getindex(key)
    let singlebucket = this.buckets[index]

    if (!singlebucket.includes(key)) {

        singlebucket.push(key)
    }

};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
   let index=getindex(key)
   let singlebucket=this.buckets[index]
   let keyinbucket=singlebucket.indexOf(key)

  if(keyinbucket!=-1){
    singlebucket.splice(keyinbucket,1)
  }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    let index=getindex(key)
    let singlebucket=this.buckets[index]
    return singlebucket.includes(key)


};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
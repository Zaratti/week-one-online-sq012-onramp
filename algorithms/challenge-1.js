function secondLargest(arr) {
    let arr = [71, 33, 3, 51, 18, 6];
    let max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    return Math.max.apply(null, arr);
}
console.log("secondLargest: ", secondLargest())
// module.exports = secondLargest
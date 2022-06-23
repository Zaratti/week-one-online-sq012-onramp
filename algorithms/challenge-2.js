function filterArray(arr) {
    let arr = [1, 2, "a", "b"];
    return arr.filter(Number);
}
console.log(Number(1, Number(2), Number("a"), Number("b")));
console.log(filterArray([1,2,"a","b"]));
module.exports = filterArray
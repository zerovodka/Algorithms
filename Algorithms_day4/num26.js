function solution(arr) {
    const min = Math.min(...arr)
    arr.splice(arr.indexOf(min), 1)
    return arr.length < 1 ? [-1] : arr
}
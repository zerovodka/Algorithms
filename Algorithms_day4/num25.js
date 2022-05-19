function solution(n) {
    // if(Number.isInteger(Math.pow(n, 1/2)) == true){
    //     return Math.pow((Math.pow(n, 1/2) + 1), 2)
    // }else {
    //     return -1
    // }
    return Number.isInteger(Math.pow(n, 1/2)) == true ? Math.pow((Math.pow(n,1/2) + 1), 2) : -1
}
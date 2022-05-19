function solution(x) {
    let arr =  (x + '').split('')
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i])
    }
    if(x % sum === 0){
        return true
    }else{
        return false
    }
}
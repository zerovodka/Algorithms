function solution(num) {
    let count = 0
    for(let i = 0; i < 500; i++){
        if(num % 2 === 0 && num !== 1){
            num = num / 2
            count++
        }else if(num % 2 === 1 && num !== 1){
            num = (num * 3) + 1
            count++
        }
    }
    if(count >= 500){
        return -1
    }else{
        return count
    }
    
}
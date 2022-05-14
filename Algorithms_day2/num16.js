function solution(s){
    let count = 0
    let str = s.toUpperCase()
    
    for(let i = 0; i < s.length; i++){
        if(str[i] === 'P'){
            count += 1
        }else if(str[i] === 'Y'){
            count -= 1
        }
    }
    return count === 0 ? true : false
    
    // return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
}
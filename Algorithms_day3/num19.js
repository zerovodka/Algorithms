function solution(n) {
    // let a = ''
    // a.length = n
    let a = new Array(n)
    
    if(n % 2 === 0){
        a = '수박'.repeat(n/2)
    }else{
        a = '수'+'박수'.repeat(n/2)
    }
    return a
}
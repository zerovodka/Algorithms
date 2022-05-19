function solution(n) {
    let answer = []
    let a = (n + '').split('').reverse()
    for(let i = 0; i < a.length; i++){
        answer[i] = parseInt(a[i])
    }
    return answer
}
function solution(phone_number) {
    var answer = '';
    
    const len = phone_number.length - 4
    answer = '*'.repeat(len) + phone_number.substr(-4) //slice
    return answer;
}
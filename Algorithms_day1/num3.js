// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
    //     var answer = '';
        
    //     if(s.length % 2 == 0){
    //         return s.substr(s.length/2 - 1, 2)
    //     }else {
    //         return s.substr(Math.floor(s.length/2), 1)
    //     }
        
    //     return answer;
        
        return s.length % 2 == 0 ? s.substr(s.length/2 - 1, 2) : s.substr(Math.floor(s.length/2), 1)
    }
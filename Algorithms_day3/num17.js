function solution(s) {
    //     Number, parseInt 속성 이용해서 풀어보기
    //     NaN === NaN false 출력
    //     answer = (s.length === 4 || s.length === 6) && Number(s) === parseInt(s)
        return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s)
        // test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 fal        se로 반환합니다.
        // /[0-9]/ /[a-z]/ /[A-Z]/ ...
        // ^ : 정규 표현식 시작을 뜻함
        // $ : 정규 표현식 끝을 뜻함
        // + : 반복해서 체크해라라는 명령
    }
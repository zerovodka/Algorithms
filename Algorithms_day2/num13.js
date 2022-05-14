function solution(a, b) {
    let answer = '';
    
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const year = 2016
    let month = a
    let day = b
    
    let dayOfWeek = week[new Date(year + '-' + month + '-' + day).getDay()]
    
    answer = dayOfWeek
    return answer;
}
function solution(price, money, count) {
    //     let answer = 0;
    //     let total = 0;
        
    //     for(let i = 1; i <= count; i++){
    //         total += price * i
    //     }
    //     answer = total - money > 0 ? total - money : 0
    //     return answer
        
        let total_price = 0
        
        for(let i = 1; i <= count; i++){
            total_price += price * i
        }
        return total_price > money ? total_price - money : 0
    }
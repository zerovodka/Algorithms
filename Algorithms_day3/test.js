// let s = 'a123'

// let change = parseInt(s)
// console.log(NaN === NaN)

// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.map(e => e * e)

// console.log(numbers)
// console.log(result)

// function solution(participant, completion) {
//     const map = new Map();

//     for(let i = 0; i < participant.length; i++) {
//         let a = participant[i], 
//             b = completion[i];

//         map.set(a, (map.get(a) || 0) + 1);
//         map.set(b, (map.get(b) || 0) - 1);
//     }

//     for(let [k, v] of map) {
//         if(v > 0) return k;
//     }

//     return 'nothing';
// }
////////////////////
// const participant = ["mislav", "stanko", "mislav", "ana"]
// const completion = ["stanko", "ana", "mislav"]

// function soulution(participant, completion){
//     const map = new Map()
    
//     for(let i = 0; i < participant.length; i++){
//         let a = participant[i]
//         let b = completion[i]

//         map.set(a, (map.get(a) || 0) + 1)
//         console.log(map)
//         map.set(b, (map.get(b) || 0) - 1)
//         console.log(map)
//     }

//     for(let [key, value] of map){
//         if(value > 0){
//             console.log(key) 
//         }
//     }
// }

// soulution(participant, completion)
////////////////////
// let a = 'try'
// console.log(a.indexOf('a'))

// let a = 'string'

let arr = [1, 2, 3]
console.log(Math.min(...arr))

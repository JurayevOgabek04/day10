//  // 1-vazifa

var numbers = [1,3,5,9]

function numbersSum(numbers){
    
    let i = 0;
    let summa = 0;
    for (let k = numbers[i]; i < numbers.length; i++ ){
        summa += numbers[i]
    }

    return summa
}

let result = numbersSum(numbers);

console.log(result);



//  // 2-vazifa



// var numbers = [1,-5,16,0,2]

// function numbersSum(numbers){
//     let i = 0;
//     let summa = 0;
//     for (let k = numbers[i]; i < numbers.length; i++ ){
//         if (numbers[i] > 0){
//             summa += numbers[i]
//         }
//     }

//     return summa
// }

// let result = numbersSum(numbers);

// console.log(result);




// // // 3- vazifa



// var numbers = [3.02,-3.65,5,-9]
// var numbers1 = []
// var numbers2 = []
// function normalizeNumbers(numbers){
//     let i = 0;
//     for (let k = numbers[i]; i < numbers.length; i++){
//         numbers1.push(Math.round(numbers[i]))

//         if (numbers1[i] < 0){
//             numbers2.push(-numbers1[i])
//         } else {
//             numbers2.push(numbers1[i])
//         }
//     }

//     return numbers2
// }

// let result = normalizeNumbers(numbers)

// console.log(result);
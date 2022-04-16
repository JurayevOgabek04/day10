//  // 1-vazifa

var numbers = [1,3,5,9]

function numbersSum(numbers){
    let summa = 0;
    for (let i in numbers){
        summa += +numbers[i];
    }

    return summa
}

let result = numbersSum(numbers)

console.log(result);


//  // 2-vazifa



// var numbers = [1,-5,16,0,2]

// function numbersSum(numbers){
//     let summa = 0;
//     for (let i in numbers){
//         if (numbers[i] > 0){
//             summa += +numbers[i]
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
//     for (let i in numbers){

//         if (numbers[i] < 0){
//             numbers1.push(Math.round(-numbers[i]))
//         } else {
//             numbers1.push(Math.round(numbers[i]))
//         }
//     }

//     return numbers1
// }

// let result = normalizeNumbers(numbers)

// console.log(result);
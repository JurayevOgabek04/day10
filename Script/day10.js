//  // 1-vazifa

// var numbers = [1,3,5,9]

// function numbersSum(numbers){
//     let summa = 0;
//     for (let i in numbers){
//         summa += +numbers[i];
//     }

//     return summa
// }

// let result = numbersSum(numbers)

// console.log(result);


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


// const list = [['anor',3],["olma", 5],["pamidor",8],["o'rik",10]]

// for (let i = 0; i < list.length ; i++){
//     for (let j = 0; j < list[i].length; j++){
//         console.log(list[i][j]);
//     }
// }
   







// let num = [1,2,3,4,5,6,7,8,9]

// let num2 = []

// while(num.length > 0){
//     let num3 = num.pop()
//     num2.push(num3)
//     console.log(num3);
// }

// console.log(num2);


const list3 = [1,2,3,4,5,6,7,8,9,10]
for (let i in list3){
    if (list3[i] % 2 === 0){
        let index = list3.indexOf(list3[i])
        console.log(index + "--");
        let n = list3.splice(index,1)[0]
        console.log(n);
        list3.push(n)

    } 
}

console.log(list3);
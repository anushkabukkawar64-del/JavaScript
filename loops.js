//For, while , do while, break, continue

// let string = "random values";
// for (let i = 0; i < string.length; i++) {
//     console.log(string[i]);
// }

// let var_name = "random values";
// let result = "";
// for (let i = 0; i < var_name.length; i++) {
//     // console.log(`${i} : ${var_name[i]}`);
//     result = result + `${i} - ${var_name[i]}`;
//     // console.log(i + " : " + var_name[i]); // var_name[1] = a
// }

// console.log(result);
// // 0 - r
// // 1 - a

// // 0-r 1-a

// //
// let result = "";
// for (i = 1; i < 6; i++) {
//     // console.log(i);
//     result += i;
// }
// console.log(typeof Number(result)); 

//
// let result = "";
// for (i = 1; i < 6; i++) {
//     // console.log(i);
//     // i = 2 break;
//     if (i == 2) break;
//     result += i;
// } 
// console.log(Number(result)); 

//
// let result = "";
// for (i = 1; i < 6; i++) {
//     // console.log(i);
//     // i = 2 break;
//     if (i == 2) continue;
//     result += i;
// } 
// console.log(Number(result)); 

let result = "";
let i = 1;
while (i <= 5) {
    result += i;
    i++;
}
console.log(Number(result));

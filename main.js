/////////////////////////////////////////////////////////////////////////////////////////////////////
// 1-misol///////////////////////////////////////////////////////////////////
// let arr = [1,2,3,4,5,6,7]
// let even_total = 0
// let odd_total = 0
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] % 2 === 0){
//     even_total++
//   }else{
//     odd_total++
//   }
// }
// console.log(`berilgan arrayda juft sonlar ${even_total} ta`)
// console.log(`berilgan arrayda toq sonlar ${odd_total} ta`)
/////////////////////////////////////////////////////////////////////////////////////
// 2-misol////////////////////////////////////////////////////////////////////
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let num = prompt(`Enter your number `);
// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//   total += arr[i];
// }
// let result = Math.abs(total - num);
// console.log(result);
// console.log(total);
/////////////////////////////////////////////////////////////////////////////////////////
// 4-misol /////////////////////////////////////////////////////////////////////////////
// function min_max_value(num){
//     let obj1 = {a:1,b:2,c:3}
//   let obj2 = {d:4,e:5,f:6}
//   let obj = Object.assign(obj1,obj2)
//   let values = Object.values(obj)
//   let max = Math.max(...values)
//   let min = Math.min(...values)
//   let diff_max = Math.abs(num - max)
//   let diff_min = Math.abs(num - min)
//   if(num > min){
//     console.log(`num min value dan ${diff_min} ga katta `)
//   }else{
//     console.log(`num min value dan ${diff_min} ga kichik  `)

//   }
//   if(num > max){
//     console.log(`num max value dan ${diff_max} ga katta `)
//   }else{
//     console.log(`num max value dan ${diff_max} ga kichik  `)

//   }
//   }
//   min_max_value(4)
/////////////////////////////////////////////////////////////////////////////////////////////
// 5-misol ///////////////////////////////////////////////////////////////////////////
// function get_keysAnd_values(){
//     let obj = {name: `Alisher `,age:20, adress:`Andijon`}
//     let values = Object.values(obj)
//     let keys = Object.keys(obj)
//     console.log(keys)
//     console.log(values)

//   }
//   get_keysAnd_values()
//////////////////////////////////////////////////////////////////////////////////////////////////
// 6-misol //////////////////////////////////////////////////////////////////////////////////////
// let arr = [1, 3, 2, 0, 4, 5]
// let max = Math.max(...arr)
// let min = Math.min(...arr)
// let max_index = 0
// let min_index = 0

// for(let i = 0; i < arr.length; i++){
//   if(arr[i]===max){
//     max_index = i
//   }else if (arr[i] === min){
//     min_index = i
//   }
// }
//   arr[max_index] = min
//   arr[min_index] = max
// console.log(arr )
/////////////////////////////////////////////////////////////////////////////////////////////////////
// 7-misol /////////////////////////////////////////////////////////////////////////////////////////
// function getInitialOdds(n) {
//     const result = [];
//     let oddNumber = 1;
//     for (let i = 0; i < n; i++) {
//       result.push(oddNumber);
//       oddNumber += 2;
//     }
//     return result;
//   }

//   const n = 3;
//   console.log(getInitialOdds(n));
///////////////////////////////////////////////////////////////////////////////////////////////////
// 9-misol ///////////////////////////////////////////////////////////////////////////////////////
// let arr = [1, 3, 2, 2, 3 ]
// let new_arr = []
// for( let i =0 ; i < arr.length; i++){
//   if(!new_arr.includes(arr[i])){
//     new_arr.push(arr[i])
//   }

// }
//  console.log(new_arr)
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10-misol /////////////////////////////////////////////////////////////////////////////////////////////////
// function getLevel(n) {
//     const result = [];
//     for (let i = 0; i < n; i++) {
//       result.push(Math.pow(2, i + 1));
//     }
//     return result;
//   }

//   console.log(getLevel(4));
//   console.log(getLevel(5));
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3-misol ///////////////////////////////////////////////////////////////////////////////////////////
// function sum_ofEvens(){
//     let num1 = prompt(`enter number for num1`)
//     let num2 = prompt(`enter number for num2`)
//     let total = 0
//       let small_num;
//     if(num1 < num2 ){
//       small_num = num1
//     }else{
//        small_num = num2
//     }
//     for(let i = small_num; i<= num1+ num2;i+=2){
//       total+=i
//     }
//     console.log(`oraliqdagi sonlar yigindisi `+total)
//   }
//   sum_ofEvens()
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8-misol ////////////////////////////////////////////////////////////////////////////////////////////
// function find_numberNine(num) {
//   let arr = [2, 7, 11, 15];
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[i] + arr[j] === num) {
//         result.push(arr[i], arr[j]);
//       }
//     }
//   }
//   console.log(result);
// }
// find_numberNine(9);

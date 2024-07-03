//1. write a script to print all array values in the console.
// let array = [23,34,54,0,4,7]
// console.log(array)

//2. For the Given array: [23,34,54,0,4,7] print all the Array values using a for loop. 
// Expected output: 23 34 54 0 4 7

// let array = [23,34,54,0,4,7]
// for (var i=0; i<array.length ; i++){
//     console.log(array[i])
// }
 
// 3.print all numbers in an array except the first element. Expected output: 34 54 0 4 7

// let array = [23,34,54,0,4,7]
// for (var i=1; i<array.length ; i++){
//     console.log(array[i])
// }

// // 4.Print all elements in an array except the last element Expected output: 23 34 54 0 4

// let array = [23,34,54,0,4,7]
// for (var i=0; i<array.length-1 ; i++){
//     console.log(array[i])
// }

//5.Print all the numbers from last index to first index Expected output: 7 4 0 54 34 23

// let array = [23,34,54,0,4,7]

// for(var i= array.length-1; i>=0; i--){
//     console.log(array[i])
// }

// 6.Print all the numbers from last index to first index except the first element Expected output: 4 0 54 34 23

// let array = [23,34,54,0,4,7]

// for(var i= array.length-2; i>=0; i--){
//     console.log(array[i])
// }

// 7.Print all the numbers from last index to first index except the last element Expected output: 7 4 0 54 34
// let array = [23,34,54,0,4,7];
// for(var i= array.length-1; i>0; i--){
//     console.log(array[i])
// }

// 8.Print only the last 4 elements of an array. Expected output: 54 0 4 7
// let array = [23,34,54,0,4,7];
// for(var i=array.length-4; i<=array.length-1; i++){
//     console.log(array[i])
// }


//9.For the Given array: [23,34,54,10,4,7] print the minimum number in an Array. Expected output: 4
// let array = [23,34,54,10,4,7];
// let res = Math.min(...array)
// console.log(res)

// let array = [23,34,54,10,4,7];
// let min = array[0]
// for(var i=1; i<array.length; i++){
//     if(array[i] < min ){
//         min = array[i]
//     }
// }
// console.log(min)

// 10. For the Given array: [23,34,54,10,4,7] print the Maximum number in an array. Expected output: 54
// let array = [23,34,54,10,4,7]
// let max = array[0];

// for(var i=0; i<array.length; i++){
//     if(array[i]> max){
//         max = array[i];
//     }
// }
// console.log(max)

// 11.For the Given array: [23,34,54,10,4,7] sum of all the numbers in an Array. Expected output: 132
// let array = [23,34,54,10,4,7]
// let sum = 0
// for(var i=0; i<array.length ; i++){
//     sum = sum + array[i]
// }
// console.log(sum)

// 12 For the Given array: [23,34,54,10,4,7] Average of all the numbers in an Array. Expected output: 22
// let array = [23,34,54,10,4,7]
// let sum = 0
// for(var i=0; i<array.length ; i++){
//     sum = sum + array[i]
// }
// let average = sum/array.length
// console.log(average)
// let array = [23,34,54,10,4,7]
// let res = array.reduce((a,b)=>a+b, 0)
// console.log(res)

//13.For the Given array: [23,34,54,10,4,7] print values that are greater than the given number. Given number: 20, Expected output: 23,34,54
// let array = [23,34,54,10,4,7]
// let num = 20
// let result = []
// for(var i=0; i<array.length; i++){
//     if(array[i]> num){
//         result.push(array[i])
//     }
// }
// console.log(result)

// let array = [23,34,54,10,4,7]
// let num = 20;
// let result = array.filter(value => value > num);
// console.log(result)


//14. For the Given array: [23,34,54,10,4,7] print all the even numbers in an Array. Expected output: 34,54,10,4
// let array = [23,34,54,10,4,7]
// // for(var i=0; i<array.length ; i++){
// //     if(array[i]%2 ===0){
// //         console.log(array[i])
// //     }
// // }
// let res = array.filter((a)=>{
//    if(a%2 ===0){
//     return a
//    }
// })
// console.log(res);

//15.For the Given array: [23,34,54,10,4,7] print all the odd numbers in an Array. Expected output: 23,7
// let array = [23,34,54,10,4,7]
// let res = array.filter((a)=> a%2 === 1)
// console.log(res);

// let array = [23,34,54,10,4,7]
// let res = array.filter((a)=> a%2 !== 0)
// console.log(res);

//16.For the Given array: [23,-34,-54,10,-4,7] print all the positive numbers in an array. Expected output: 23,10,7

// let array = [23,-34,-54,10,-4,7]
// let num = 0
// let res = array.filter(value => value > num)
// console.log(res)

// let array = [23,-34,-54,10,-4,7]
// for(var i=0; i<array.length ; i++){
//     if(array[i]>0){
//         console.log(array[i])
//     }
// }

//17.For the Given array: [23,34,54,10,4,7] search if the given number is there in an array or not. Given number: 34, Expected output: true Given number: 26, Expected output: false
// let array = [23,34,54,10,4,7]
// let num = +prompt("enter the number")
// // let found = array.find((a,b)=>{
// //     if(a === num){
// //         return true
// //     }else{
// //         return false
// //     }
// // });
// // let res = found !== undefined
// // console.log(res)
// let found= array.find((a)=> a === num)
// let res = found !== undefined;
// console.log(res)

// //  let array = [23,34,54,10,4,7]
// // let num = +prompt("enter the number")
// // let res = array.includes(num)
// // console.log(res);



// 18. For the Given array: [23,34,54,10,34,7,23,10,34] print the total number of times an element found in the array. Given number: 23, Expected output: 2 Given number: 34, Expected output: 3 Given number: 10, Expected output: 2 Given number: 54, Expected output: 1

// let array = [23,34,54,10,34,7,23,10,34]
// let res = array.reduce((acc, curr)=>{
//    if(acc[curr]){
//     acc[curr]= acc[curr] + 1
//    }else{
//     acc[curr]= 1
//    }
//    return acc;
// }, {})
// console.log(res)


// 19.For the Given array: [23,34,54,10,4,7] print index of a given element in an Array. Given number: 23, Expected output: 0 Given number: 34, Expected output: 1 Given number: 10, Expected output: 3 Given number: 54, Expected output: 2
// let array = [23,34,54,10,4,7]
// let result = array.reduce((acc, curr)=>{
//    acc[curr] = (acc[curr] || 0) + 1;
//    return acc;
// }, {});
// console.log(result);


// 20. For the Given array: [23,34,54,10,34,7,23,10,34] eliminate duplicates in a given array Expected output: 23,34,54,10,7
// let array =  [23,34,54,10,34,7,23,10,34]
// let res = array.reduce((acc, curr)=>{
//     if(!acc.includes(curr)){
//         acc.push(curr)
//     }
//     return acc;

// }, []);
// console.log(res)

// let array =  [23,34,54,10,34,7,23,10,34]
// let res =  array.filter((value, index, self)=>self.indexOf(value) === index)
// console.log(res);

// let array =  [23,34,54,10,34,7,23,10,34]
// let res = [...new Set(array)];
// console.log(res)


// 21. a program to store an array into another array var ar = [23,34,54,10,4,7] var br = [ ] Expected output: br = [23,34,54,10,4,7]

// let ar = [23,34,54,10,4,7] 
// let br = [...ar]
//let br = ar.slice();
// let br = Array.from(ar);
// console.log(br)

// 22 Sort an array in ascending order. Given array: [23,34,54,10,4,7] Expected output: 4,7,10,23,34,54
// let array =  [23,34,54,10,4,7] 
// let res = array.sort((a,b)=>a-b)
// console.log(res)

//24.Store only even and odd numbers of a given array in another array.

// let array =  [23,34,54,10,4,7] 
// let even=[];
// let odd =[];
// let res = array.filter((a)=>{
//   if(a%2 ===0){
//     even.push(a)
//   }else{
//     odd.push(a)
//   }
// });
// console.log(even, "even");
// console.log(odd, "odd")

// let array =  [23,34,54,10,4,7] 
// let even=[];
// let odd =[];
// array.forEach((a)=>{
//   if(a%2 ===0){
//     even.push(a)
//   }else{
//     odd.push(a)
//   }
// });
// console.log(even, "even");
// console.log(odd, "odd")

// let array =  [23,34,54,10,4,7] 
// let even = array.filter((a)=>a%2 === 0)
// console.log(even)

// 25. create a duplicate array for a given array [23,34,54,10,34,7,23,10,34] 
// let array = [23,34,54,10,34,7,23,10,34] 
// let unique = array.filter((value, index, self)=>self.indexOf(value) === index);
// let duplicate = array.filter((value, index, self)=>self.indexOf(value) !== index); 
// console.log(unique, "unique")
// console.log(duplicate, "duplicate")

// 27. print only the perfect squares in an array  array: [23,34,54,10,4,7] 
//    let  array = [23,34,54,10,4,7,9] 
//    for(var i=0; i< array.length; i++){
//       let res = Math.sqrt(array[i])
//       if(Number.isInteger(res)){
//          console.log(array[i])
//       }
//    }
//    let res = array.filter((num)=> Number.isInteger (Math.sqrt(num)))
//    console.log(res)
 
// 28. Print only the 2 digit numbers from an array

// let  array = [23,34,54,10,4,7,9] 
// let res = array.filter((num)=> num >=10 && num <=100)
// console.log(res)
// array.forEach((a)=>{
//    if(a >=10 && a <=100){
//     console.log(a)
//    }
// })

// //29. Print only multiples of 5 from an array
// let  array = [23,34,54,10,4,7,9] 
// array.forEach((a)=>{
//    if(a%5 === 0){
//     console.log(a)
//    }
// })
// let res = array.filter((num)=> num%5 === 0);
// console.log(res)

// 30. Print only multiples of 2 AND 3 from an array
// let  array = [23,34,54,10,4,7,9] 
// let res = array.filter((num)=> num%2 === 0 && num %3 === 0);
// console.log(res)

// 31.Print only multiples of 3 OR 5 from an array

// let  array = [23,34,54,10,4,7,9] 
// let res = array.filter((num)=> num%3 === 0 || num %5 === 0);
// console.log(res)

// 35. Print only those odd numbers in a given array which are divisible by 3.

// let  array = [23,34,54,10,4,7,9] 
// let odd = array.filter((num)=> num%2 !== 0 && num%3 ===0)
// console.log(odd)

// // //36 Insert first 10 odd numbers in an empty array(for and while).

// let odd = []

// for(var i=1; odd.length <=10; i= i+2){
//     odd.push(i)
// }
// console.log(odd)


 
//37. Print the elements present in the second half of the array.
// let array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20]
// for(var i= Math.floor(array.length/2) ; i<array.length; i++){
//     console.log(array[i])
// }

// 38.Print the greatest of all 2-digit numbers present in an array.

// let array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20]
// let res = array.filter((num)=> num >=10 && num <=100)
// let max = Math.max(...res)

// 39 Write a program to sort the array based on the number of occurrences of elements Ex: original array: [1,2,5,6,2,1,6,1,2,6,2,1,2]; After the logic: [5,6,6,6,1,1,1,1,2,2,2,2,2]; //5 occurred one time,6 three times,1 occurred 4 times, 2 occurred 5 times

// let array = [1,2,5,6,2,1,6,1,2,6,2,1,2]
// let count = array.reduce((acc, curr)=>{
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// }, {})

// console.log(count)
 
// let res = array.sort((a,b)=>{
//   let countA= count[a]
//   let countB = count[b]
//   if (countA !== countB) {
//     return countA - countB;  // Sort by count in descending order
// } else {
//     return a-b;  // Sort by value in ascending order if counts are equal
// }

// })

// console.log(res)

//40.Write a program to remove elements from an array which are not in the ascending order Ex: Original array: [12,34,11,56,37,98,23,67,109,45] Output : [12,34,56,98,109]

// let array = [12, 34, 11, 56, 37, 98, 23, 67, 109, 45];
// let result = [];

// // Initialize the result array with the first element if it's not empty
// if (array.length > 0) {
//     result.push(array[0]);
// }
 
// for (let i = 1; i < array.length; i++) {
//     // Check if the current element is greater than or equal to the last added element
//     console.log(result[result.length - 1],"'")
//     if (array[i] >= result[result.length - 1]) {
//         result.push(array[i]);
//     }
// }

// console.log(result)
//41.)Write script to merge array as the values of ar in the first and values of br next
//Write script to merge array as the values of ar in the first and values of br next
// var ar = [19,12,23,4,15];
// var br = [26,37,18,79,10];
// var cr = [...ar, ...br]
// let dr = [...br, ...ar]
// console.log(cr);
// console.log(dr)

// //42.Expected output: [1,2,3,4,5,6,7,8,9];
// var ar = [1,2,3,7,8,9];
// var br = [4,5,6];
// let cr = [...ar,...br].sort((a,b)=>a -b)
// console.log(cr)

//43.insert An Element Desired or Specific Position In An Array

// let  array = [23,34,54,10,4,7,9] 
//  array.push(10)
// console.log(array)
// 43.insert An Element Desired or Specific Position In An Array
// let  array = [23,34,54,10,4,7,9] 
// array.splice(2,0,143)
// console.log(array)

// //45.Delete Element From Array At Desired Or Specific Position
// let  array = [23,34,54,10,4,7,9] 
// array.splice(3,1)
// console.log(array)

//47.Convert All Input String Simultaneously Into Asterisk ( * )
//  let strings = ['sree', "virat", "dhoni"]
//  let res = strings.map((str)=> '*'.repeat(str.length))
 

//  function inputString(name){
//     return '*'.repeat(name.length)
//  }
//  console.log(inputString("sreekanth"))



// 52.Get the second largest element in an array.


// let array = [12, 34, 11, 56, 37, 98, 23, 67, 109, 45];
// let res = Math.max(...array)
// let res1 = array.filter((value)=> value !==res)
// let secondLarget = Math.max(...res1)
// console.log(secondLarget)

 
 //65.Search an element in an array.
//  let num = +prompt("enter the number")
//  let array = [12, 34, 11, 56, 37, 98, 23, 67, 109, 45];
//  let res = array.find((a)=>a === num)
//  if(res !== undefined){
//     console.log(`${num} found in the array.`);
//  }else{
//     console.log(`${num} not found in the array.`);
//  }

//67.Sort even and odd elements of the array separately.

// let array = [12, 34, 11, 56, 37, 98, 23, 67, 109, 45];
// let even =[];
// let odd = []
// let asending = array.sort((a,b)=>a-b).forEach(a => a%2 ===0 ? even.push(a): odd.push(a))
// console.log(even)
// console.log(odd)

//69. Print the firstname.
// Print the lastname.
// Print the fullname("Harry Potter").
// If the age is less than 18, then print "false". If the age is more than 18, then print "true".

// var person = {
//     "firstName" : "Harry",
//     "lastName" : "Potter",
//     "age": 30,
//     "gender": "male",
//     "skill" : "ReactJS",
//     "expertise": "Beginner"
// };

// console.log(person.firstName)
// console.log(person.lastName)
// console.log(`full name is : ${person.firstName} ${person.lastName}`);
// if(person.age > 18){
//     console.log("true")
// }else{
//     console.log("false")
// }

//70.//Print the marks of all the subjects.

// var marks = {
//     "maths" : 34,
//     "english" : 56,
//     "science": 32,
//     "hindi" : 75,
//     "social science": 65
// };

//Print the marks of all the subjects.
// for (var i in marks){
//     console.log(marks[i])
// }

//Print the names of all the subjects from the given object.
// for (var i in marks){
//     console.log(i)
// }

//Count the number of subjects from the given object.
// let noOfSub = Object.keys(marks).length
// console.log(noOfSub)

// Print the percentage of the marks of the student.
// let sum = 0;
// let noOfSub = Object.keys(marks).length
// for(var i in marks){
//     sum = sum + marks[i]
// }
// let res = sum /noOfSub
// console.log(res)

// /Print only those subjects where the student scored more than 35.

// for (var i in marks){
//     if(marks[i] > 35){
//         console.log(i)
//     }
// }

// Print the pass/fail status of the subjects provided 35 is the pass mark.

// for (var i in marks){
//     if(marks[i] > 35){
//         console.log(marks[i], "pass")
//     }else{
//         console.log(marks[i], "fail")
//     }
// }

// Print only the passed subjects.
// for (var i in marks){
//     if(marks[i] > 35){
//         console.log(i, "pass")
//     }
// }

// Count the number of passed subjects.

// let pass = Object.keys(marks).filter((a)=>marks[a]>35)
// let fail = Object.keys(marks).filter((a)=>marks[a]<35)

// console.log(pass.length, "pass")
// console.log(fail.length, "fail")

// Print only the failed subjects. and Count the number of failed subjects.
// let failSubject = Object.keys(marks).filter((a)=>marks[a]<35)
// let failSubjectLen = Object.keys(marks).filter((a)=>marks[a]<35)
// console.log(failSubject, "fail")
// console.log(failSubjectLen.length, "length")


// Print the least scored subject.
// Print the highest scored subject.

// let highest = Object.keys(marks).reduce((a,b)=> marks[a]> marks[b] ? a : b)
// let least = Object.keys(marks).reduce((a,b)=> marks[b]> marks[a] ? a : b)
// console.log(least, "least")
// console.log(highest, "highest")

 
//Take the subject name from the student through prompt box and print the subject marks and pass/fail status.

// let name = "maths"

// let res = Object.keys(marks).find((a)=>{
//       if(a === name && marks[name] > 35){
//         console.log(marks[a] , "pass the subject")
//       } 

//       if(a === name && marks[name]  < 35){
//         console.log(a , "fail the ubject")
//       }
// })

// let res = Object.keys(marks).find((a)=>{
//       if(a === name){
//           if( marks[name] > 35){
//              console.log( marks[a],"pass")
//           }else{
//             console.log( marks[a],"fail")
//           }
//       } 
   
//     return a
       
// });
//  console.log(res)

//71. Print all the product names.

var products = [
    {
        "name": "Duracell - AAA Batteries (4-Pack)",
        "type": "HardGood",
        "price": 5.49,
        "category": "Household Batteries",
        "manufacturer": "Duracell",				
    },
    {
        "name": "Hard Rock TrackPak - Mac",
        "type": "Software",
        "price": 29.99,
        "category": "Recording Equipment",
        "manufacturer": "Hal Leonard",				
    },
    {
        "name": "Duracell - AA 1.5V CopperTop Batteries (4-Pack)",
        "type": "HardGood",
        "price": 5.62,
        "category": "Household Batteries",
        "manufacturer": "Duracell",				
    },
    {
        "name": "Energizer - MAX Batteries AA (4-Pack)",
        "type": "HardGood",
        "price": 5.32,
        "category": "Household Batteries",
        "manufacturer": "Energizer",				
    },
    {
        "name": "METRA - Antenna Cable Adapter - Black",
        "type": "HardGood",
        "price": 13.99,
        "category": "Antennas & Adapters",
        "manufacturer": "Metra",				
    },
    {
        "name": "WipeDrive Six - Mac|Windows",
        "type": "Software",
        "price": 23.99,
        "category": "Maintenance Software",
        "manufacturer": "White Canyon",				
    }
];

// //Print all the product names.
// // for (var i of products){
// //      console.log(i.name) 
// // }
// //Print all the hardgoods & Print all the softwares
// // for (var product of products){
// //     if(product.type === "HardGood"){
// //         console.log(product.type, product.name)
// //     }
// // }

// // for (var product of products){
// //     if(product.type === "Software"){
// //         console.log(product.type, product.name)
// //     }
// // }
// //Print all the categories
// // for (var product of products){
// //      console.log(product.category)
// // }
// //Print only the products manufactured by Duracell.

// // for (var product of products){
// //     if(product.manufacturer === "Duracell"){
// //         console.log(product.manufacturer, product.name)
// //     }
// // }

// // Print the product names in ascending order of their prices.
// // products.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase())).filter((value)=>console.log(value.name))

// //Print only those products whose price is more than 14.99.
// // products.filter((product)=> product.price >=14.99).forEach((product)=>console.log(product.name))
 
// // Print only those products whose price is less than 9.99.
// // products.filter((product)=> product.price <=9.99).forEach((product)=>console.log(product.name))

// // Print the total price of all the hardgoods.

// // let sum = 0;
// // products.forEach((product)=>{
// //    sum = sum + product.price
// // })
// // console.log(Math.round(sum))

// //Print the average price of the softwares.
// let abc =[];
// let sum = 0
// products.forEach((product)=>{
//   if(product.type === "Software"){
//     abc.push(product.price)
//   }
// })

// let abcLength = abc.length
// for(var i in abc){
//     sum = sum + abc[i];  
// }
// console.log(sum)
// console.log(avg = sum/abcLength)
// let softwarePrices = products.filter((product)=>product.type ==="Software").map((product)=>product.price)
// let totalPrice = softwarePrices.reduce((a,b)=>a+b, 0)
// let avgPrice = totalPrice /softwarePrices.length
// console.log(avgPrice)

//72.
var peoples = [
    {
    "firstname": "praveen",
    "lastname": "gubbala",
    "age": 36,
    "gender": "male",
    "city": "hyd",
    "salary": 10000
    },
    {
    "firstname": "srikanth",
    "lastname": "gubbala",
    "age": 32,
    "gender": "male",
    "city": "bengaluru",
    "salary": 20000
    },
    {
    "firstname": "pradeep",
    "lastname": "reddy",
    "age": 21,
    "gender": "male",
    "city": "hyd",
    "salary": 30000
    },
    {
    "firstname": "mounika",
    "lastname": "mudiraj",
    "age": 20,
    "gender": "female",
    "city": "nalgonda",
    "salary": 30000
    },
    {
    "firstname": "nikhil",
    "lastname": "m",
    "age": 22,
    "gender": "male",
    "city": "guntur",
    "salary": 2000
    },
    {
    "firstname": "riya",
    "lastname": "bhadouria",
    "age": 14,
    "gender": "female",
    "city": "indore",
    "salary": 40000
    }
    ];

//Print all the firstnames.
// peoples.forEach((people)=>{
//     console.log(people.firstname)
// })

//Print all the full names.
// peoples.forEach((people)=>{
//     console.log(`${people.firstname} ${people.lastname}`)
// })

//Print only those names whose age is more than 25
// peoples.filter((people)=> people.age > 25).map((people)=>console.log(people.firstname))

//Print all female names.
//  peoples.filter((people)=> people.gender ==="female").map((people)=>console.log(people.firstname))

 //Print only those names whose salary is more than 30000 and increase their salaries by 15%.
//  peoples.filter((people)=> people.salary >30000).map((people)=>console.log(people.firstname, people.salary * 0.15) )


//Using prompt, print only those names whose city is "hyd".
// let cityName = prompt("enter the name")
// peoples.find((a)=>{
//   if(a.city === cityName){
//      console.log(a.firstname)
//   }
// })

//Print the total salary of all the people.
// let sum = 0
// peoples.forEach((a)=>{
//    sum = sum + a.salary
// })
// console.log(sum);

//Print all the fullnames in the alphabetical order.
// let fullname = peoples.sort((a,b)=>a.firstname.toLowerCase().localeCompare(b.firstname.toLowerCase())).map((people)=> `${people.firstname} ${people.lastname}`)
// console.log(fullname)

//Print all the fullnames in the increasing order of their age.
// let fullname = peoples.sort((a,b)=>a.age -b.age).map((people)=> `${people.firstname} ${people.age}`)
// console.log(fullname)

//Print all the fullnames in the decreasing order of their salaries.
// let fullname = peoples.sort((a,b)=>a.salary -b.salary).map((people)=> ` ${people.salary}  ${people.firstname} ${people.lastname}`)
// console.log(fullname)

//Print all the cities in which the people live. There should not be any duplicate cities.

// let res = peoples.filter((people)=>people.city).map((people)=> people.city).filter((value,index, self)=>self.indexOf(value) === index)
// console.log(res)

//Print all names that starts with "p" and the firstname should be in UPPERCASE. e.g. PRAVEEN gubbala.

// let res = peoples.filter((people)=>people.firstname.startsWith("p")).map((people)=> console.log(people.firstname.toUpperCase()))
 

// function person(name, age, gender){
//   this.name = name
//   this.age = age
//   this.gender = gender
// }
// let person1 = new person("sree", 31, "male")
// let person2 = new person("sree", 32, "female")

// console.log(person1, person2)

 
  let arr = ["bmw", "suxuki", "auto"]
   let[car, bike, auto] = arr
   console.log(car)
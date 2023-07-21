console.log("Deepak");
//  I  loops
//     1. for loop
//     2. for in loop
//     3. for each loop
//     4. for of loop
//     5. while loop
//     6. do while loop

// II. Nested Loop
// III. Break Statement
// IV. Continue Statement
// V. Question


// 1. for loop  
// for(initialization; condition; increment/decrement) {
//         execution block
// }


for (let i=0; i<5; i++) {
    console.log("Deepak");
    console.log(i);
    //Execution
}
   
// most important to mave an array

var asia = ['India', 'Singapore', 'Thailand', 'Indonesia',
'Philipines', 'Cambodia', 'Malaysia', 'UAE', 'Qatar','Nepal'];

for (let i=0; i<asia.length;i++) {
    console.log(asia[i]);
}
//console.log(asia.length);   // to know the size of an array



// 2. For in Loop
// for(exp1 in) {
//    Execution
// }

const capitals = {      //define an object, where capitals is an object
    India: "New Delhi",
    Singapore: "Singapore City",
    Monaco: "Monte Carlo",
    VaticanCityState: "Vatican City State",
    France: "Paris"
};


for (let i in capitals) {
    console.log(i);    //we can also use console.log(capitals[i])
    console.log(i + " ------------> " +  capitals[i]);   //Mapping the value
}

// In order to take the particular value of the element then 
//eg. we want to take the value of the India

console.log(capitals['India']);


// 3. for each Loop 

// used for call back    : means calls the function
// function fun(sum()) {
//  sum();   one function calls the another function
//}

pnum = [2,3,5,7,11,13,17,19];
pnum.forEach(somefunction)

function somefunction(val){
    console.log(val);
}
 //same thing can be written in this normal way
for (let x in pnum) {
    console.log(pnum[x]);
    // to implement the function we can use directly 
    somefunction(pnum[x]);
}


// 4. For of Loop

for (let i of asia) {
    console.log(i);
}

console.log("------------------ for starts--------");
for (let i in asia) {
    console.log(i);
}


// now let's do for String

const str = "Deepak";
for (let x of str) {
    console.log(x);
}

console.log("-------for starts-------")
for (let x in str) {
    console.log(x);
}


// 5. While loop

// while(exp) {
//     execution;
//     exp2; -----> increment/decrement -------> optional
// }
let i = 0;
while(i<10){
    console.log(i);  
    i++;
}

let j = 1;
while(j<1){
    console.log(j);  
    j++;
}
// No output

// 6. Do while Loop

let l = 1;
do {
    console.log("First Inside do while loop");
    console.log(l);
    l++;
}while(l<1);


let k = 0;
do {
    console.log(" Second Inside do while loop " + k);
    k++;
}while(k<10);


 
// II. Nested Loop
let num = 1;
for (let i=0; i<10; i++){
    for(let k=0; k<10; k++) {
        console.log(num);
        num++;
    }
}

// Class2 Advance
// III. Break Statement

for (let i=0; i<10; i++) {
    if(i==5) {
        break;
    }
    console.log(i);
}
num = 1;
for (let i=0; i<10; i++) {
    for(let k=0; k<10; k++) {
        if(k==5) {
            break;
        }
        console.log(num);
        num++;
    }
}



// IV. Continue Statement

for (let i=0; i<10; i++) {
    if(i==5) {
        continue;
    }
    console.log(i);
}

for (let i=0; i<10; i++) {
    console.log("Up " + i);
    if(i==5) {
        continue;
    }
    console.log("Down " + i);
}
num = 1
for(let i=0; i<10; i++) {
    for (let k=0; k<10; k++) {
        if(k==5) {
            continue;
        }
        console.log(num);
        num++;
    }

}


//  QUESTION
// arr1 = [1,2,3,5,7,9,11,13,17,19];
// arr2 = [1,1,2,3,5,8,13,21,34,55];


console.log("Question solution");

arr1 = [1,2,3,5,7,9,11,13,17,19];
arr2 = [1,1,2,3,5,8,13,21,34,55];

for (let i=0; i<=arr1.length && i<=arr2.length; i++) {
    console.log(arr1[i]*arr2[i]);
}


// 1//ways to print in javascript
// //console.log("hello world 6+7=", 6 + 7, "another world");
// //document.write("this is document");

// 2//javascript Console api
// // console.log("hello world 6+7=", 6 + 7, "another world");
// // console.warn("this is warning");
// // console.error("this is error");

// //3 javascript variable
// var num1=32;
// var num2=23;
// console.log(num1+num2);

// //4 data types in javascript
// //Number
// var num1=23;
// var num2=22.4;
// console.log(num1);
// //String
// var str1="this is string";
// var str2='this is string';
// console.log(str1);
// console.log(str2);
// //object
// var marks={
//     ali:37,
//     aftab:67,
//     hammad:85
// }
// console.log(marks);

// //boolean
// var a=true;
// var b=false;
// console.log(a,b);

// //undefine
// var a;  //undefined
// var b=undefined;
// console.log(a);
// console.log(b);

// /*there two high level data types in javascipt
// 1 primitive data type undefine,number ,string,null,boolean and symbol.
// 2 Reference Datatype 
// */


// //5 Arrays

// var a=[1,3,4,5,3];

// console.log(a);
// console.log(a[1]);
// console.log(a[3]);
// console.log(a[2]);

// //6 arithmetic Operators
// var a=2;
// var b=3;
// console.log("this is a+b=",a+b);
// console.log("this is a*b=",a*b);
// console.log("this is a/b=",a/b);
// console.log("this is a&b=",a&b);

// //assignment operator
// var a=b;  //now in a=3  
// a+=b;    
// a+=a;
// a*=b;
// console.log(a);

// //comparison operator
// var x=33;
// var y=45;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y); 

// //function
// function greet() {
//     console.log("Hello Hammad!");
// }

// greet();  // Function call


// function multiply(x, y) {
//     return x * y;
// }

// let result = multiply(4, 6);
// console.log(result);

// //Conditional Statement

// let age = 18;

// if (age >= 18) {
//     console.log("You are eligible to vote.");
// }
// else{
//      console.log("You are note eligible to vote.");
// }



// let marks1 = 75;

// if (marks1 >= 80) {
//     console.log("Grade A");
// } else if (marks1 >= 60) {
//     console.log("Grade B");
// } else if (marks1 >= 40) {
//     console.log("Grade C");
// } else {
//     console.log("Fail");
// }

// //LOOPS in Javascript

// for (let i = 1; i <= 5; i++) {
//     console.log("Number:", i);
// }


// //let i = 1;

// // while (i <= 5) {
// //     console.log(i);
// //     i++;
// // }


// let i = 1;

// do {
//     console.log(i);
//     i++;

// } while (i <= 5);




// let fruits = ["Apple", "Banana", "Mango"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }



// let person = {
//     name: "Hammad",
//     age: 22
// };

// for (let key in person) {
//     console.log(key + ":", person[key]);
// }

// //BREAK And CONTINUE

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         break;
//     }
//     console.log(i);
// }


// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }


// //ARRAY Methods

// let fruit = ["Apple", "Banana", "Mango"];
// fruit.push("Orange");
// console.log(fruit);


// fruit.pop();
// console.log(fruit);

// fruit.shift();

// fruit.unshift("Grapes");
// console.log(fruit);

// console.log(fruit.length);

// console.log(fruit.indexOf("Mango"));

// //STRING METHODS
// let name = "hammad";
// console.log(name.toUpperCase());

// let text = "I love JavaScript";
// console.log(text.includes("love"));

// let word = "JavaScript";
// console.log(word.slice(0, 4));


// let message = "Hello World";
// console.log(message.replace("World", "Hammad"));

// let now = new Date();
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMonth());


// //DOM document object variable
// // let btn = document.getElementById("click");

// // btn.addEventListener("click", function() {
// //     alert("Button clicked!");
// // });

// // let containers = document.getElementsByClassName("container");

// // containers[0].style.backgroundColor = "lightblue";


// // let para = document.querySelector("p");

// // para.innerText = "Text changed using querySelector!";




// // let allContainers = document.querySelectorAll(".container");

// // allContainers.forEach(function(item){
// //     item.style.border = "2px solid red";
// // });


// // let newPara = document.createElement("p");
// // newPara.innerText = "New paragraph added by JS";

// //document.body.appendChild(newPara);

// // let elem=document.getElementById('click');
// // console.log(elem);


// let elemclass=document.getElementsByClassName('container');
// console.log(elemclass);

// //elemclass[0].style.backgroundColor='red';

// elemclass[0].classList.add("bg-primary");
// elemclass[0].classList.add('a');

// //EVENTS in  Javascript

// document.addEventListener("DOMContentLoaded", function () {

//     let containers = document.querySelectorAll(".container");

//     let prevHTML = containers[1].innerHTML;

//     // Mouse Down
//     containers[0].addEventListener("mousedown", function () {
//         containers[1].innerHTML = "<b>We have clicked</b>";
//         console.log("Mouse down when clicked on Container");
//     });

//     // Mouse Up
//     containers[0].addEventListener("mouseup", function () {
//         containers[1].innerHTML = prevHTML;
//         console.log("Mouse up when clicked on Container");
//     });

//     // Mouse Out
//     containers[0].addEventListener("mouseout", function () {
//         console.log("Mouse out of Container");
//     });

// });

//Callback ,Asymchronous js,web api,event,task queue

// console.log("1");
// setTimeout(function() {
//     console.log("A");
    
// }, 3000);
// console.log("2");
// setTimeout(function() {
//     console.log("b");   
// }, 1000);
// console.log("3");
// console.log("4");
// setTimeout(function() {
//     console.log("c");  
// }, 2000);
// console.log("5");


// again Dom concept

/*let e=document.querySelector("h1");
console.log(e);

//function  

let x=10;
var a=20;

f2();
f1("Amit");
f1("Anubhav");
f1("Arjun");

function f1(username){
    let b=2;
    console.log(`Hello, ${username}`);
    function f2(){
        console.log("f2 function");
    }

}

*/

/*
//Control Instructions
1) Decision Control
2) Iterative Control
3) Switch case control

Decision Control
1) if
2) if else
3) if else if
4) ?:

switch case control

Iterative Control (Loop)
1) while 
2) do while
3) for 
4) for in 
5) for of

*/

// let i=1;
// while (i<=5)
// {
//     console.log(i);
//     i++;
// }

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while (i<=5);

// let x=25313;
// let sum=0;
// do{
//     sum=sum+x%10;
//     x=Math.trunc(x/10);
// }while(x);
// console.log(sum);

// for(initilization;condition;flow)
// {
//     code
// }

// let sum=0;
// for(let i=1;i<=10;i++){
//     sum+=i;
// }
// console.log(sum);

// for( variable in object){

//     code
// }


// const p1={
//     name:"Santosh",
//     age:25
// };

// for(let key in p1){
//     console.log(key,p1[key]);
// }

// let a=[11,22,33,44];

// for(let key in a){
//     console.log(key,a[key]);
// }

// for(variable of iterable){
//     code
// }

// const cars = ["BMW","Audi","Hyundai","Maruti"];
// for(let car of cars){
//     console.log(car);
// }

/*
Jump Statements (Transfer control statements)
1) break
2) continue
3) return

*/

// const a=[23,45,67,89,22,11,43];
// let i=0;
// while(i<a.length){
//     console.log(i,a[i]);
//     if(a[i]%2==0)
//         break;
//     i++;
// }

// const a=[23,44,67,89,22,11,43];
// let i=0;
// while(i<a.length){
//     if(a[i]%2==0){
//         i++;
//         continue;
//     }
//     console.log(i,a[i]);
//     i++;
// }

// function f1(){
//     return "Hello";
// }

// x=f1();
// console.log(x);




//Example| Nested Callback | synchronous

// function f1(i,f){
//     console.log(i);
//     if(f){
//         f(i+1,()=>{
//             f(i+2);
//         });
//     }
// }
// f1(1,f1);


//Example-| Nested Callback | asynchronous
// Callback Hell
// Callback hell is a situation in JS where callbacks are nested within other callbacks
// Pyramid of doom


//  function f1(i,f){
//     setTimeout(()=>{
//         console.log(i);
//         if(f){
//             f(i+1,()=>{
//                 f(i+2,()=>{
//                     f(i+3);
//                 });
//             });
//         }
//     },2000);
    
// }
// f1(1,f1);



//Promise


// Three possible states of a Promise
// Pending, Fulfilled, Rejected
// Two aspects of a Promise:
// Producer of a Promise
// Consumer of a Promise

/*
//Producer code
let p=new Promise(function(resolve,reject){
    console.log("Mein Sarkar hun");
    let x=Math.round(Math.random()*10+1);
    if(x%2==0)
        resolve("Even number "+x); //on success
    else
        reject("Error due to odd number "+x); //on error
});

//Consumer Code
// p.then(()=>{
//     console.log("Resolve ho gaya");
// });
// p.catch(()=>{
//     console.log("Error aayi hai");
// });
p.then(()=>{
    console.log("Resolve ho gaya");
},()=>{
    console.log("Error aayi hai");
});
*/

/*
//Example-7 | someAPI
//Producer Code
function someAPI(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },5000);
    });
    return p1;
}

//Consumer Code
let p=someAPI();
p.then((result)=>{
    console.log(result);
},(msg)=>{
    console.log(msg);
});
*/
/*
//Example-8 | 
function someAPI1(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 1");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },4000);
    });
    return p1;
} 
function someAPI2(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 2");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },3000);
    });
    return p1;
} 

let p1=someAPI1();
p1.then((result)=>{
    console.log("p1",result);
},(msg)=>{
    console.log("p1",msg);
});
let p2=someAPI2();
p2.then((result)=>{
    console.log("p2",result);
},(msg)=>{
    console.log("p2",msg);
});
*/
/*
//Example-9 | Promise Chain
function someAPI1(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 1");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },4000);
    });
    return p1;
} 
function someAPI2(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 2");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },3000);
    });
    return p1;
} 

let p1=someAPI1();
p1.then((result)=>{
    console.log("p1",result);
    let p2=someAPI2();
    p2.then((result)=>{
        console.log("p2",result);
    },(msg)=>{
        console.log("p2",msg);
    });
},(msg)=>{
    console.log("p1",msg);
});
*/
/*
//Example-10 | Promise Chain | Better way to write code
function someAPI1(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 1");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },4000);
    });
    return p1;
} 
function someAPI2(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 2");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },3000);
    });
    return p1;
} 

someAPI1()
    .then((result)=>{
            console.log("p1",result);
            return someAPI2();
        },(msg)=>{
            console.log("p1",msg);
    })
    .then((result)=>{
            console.log("p2",result);
        },(msg)=>{
            console.log("p2",msg);
    });

*/
/*
//Example-11 | async and await
// async keyword makes a normal function asynchronous and it always return a promise.
async function f1(){
    console.log("Hello");
}
let p1=f1();
*/
/*
// Example-12 | async and await
//await can only be used inside an async function
//The await makes the function pause the execution and wait for a resolved promise before it continues.

function someAPI1(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 1");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },4000);
    });
    return p1;
} 
function someAPI2(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 2");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },3000);
    });
    return p1;
} 
async function f1(){
    await someAPI1().then((result)=>{
        console.log("p1",result);
    },
    (msg)=>{
        console.log(msg);
    });
    
    await someAPI2().then((result)=>{
        console.log("p2",result);
    },
    (msg)=>{
        console.log(msg);
    }); */
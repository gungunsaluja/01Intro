
// console.log(greetings);
// const ac = "hello";
// let ah = "world";
// var oh = "content";
// let ab = 12;
// console.table([ac,ah,oh,ab]);
// // by using this u can simply use all the variables at same time 
// // alert(3+2); we are using node not browser so that we can not use this ;
// let score = "a124";
// let score1 = Number(score);
// console.log(typeof score1); // type will be converted but it will be not a number 

// console.log(score1);
// let b = 1;
// let c = Boolean(b);
// console.log(c);

// 1 true 0 false; 
// boolean = "hii"
// console.log(Number);
// console.log(boolean)
// ;
// console.log(null>0);
// console.log(null==0);
// console.log(null!=0);
// console.log(undefined==0);
// console.log(undefined!=0);
// console.log("2"===2);
// primitive data type are those where we have only copy not actual reference of memory
// there are 7 types string,Number,BigInt,null, undefined,Boolean,Symbol
//non primitive data types are those where we have actual reference of memory  arrays,object,functions;

// let id = Symbol('123');
// let anoid = Symbol('123');
// console.log(id==anoid);
// console.log(id);
// console.log(typeof anoid);
// const nobo = function(){
//     console.log("hello ba");
// }
//const nobo = ()=>{
    // console.log("hello ba");
// }
// static memory is primitive and dynamic memory is heap memory 

// console.log(typeof nobo);;
// const app = {
//     name:"gungun",
//     rollno:35
// };
// console.log(typeof app);
// console.log(app);

// nobo();
// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random()*(max-min+1))+min);// generating numbers from 10 - 20 randomly

// const user = {
//     username:"Gungun",
//     price:999,
//     welcomeMessage:function()
//     {
//         console.log(`${this.username},welcome to website`);

//     }
// }
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chat(){
//     console.log(this);
// }
// chat();
// const chai = function()
// {
//     let username = "hitesh";
//     console.log(this.username);
// }
// chai();
// const chai = () =>{
//     let username = "gungun";
//     console.log(this.username);
// }

// chai(); 
// iife
(function chai()
{
    console.log(`DB Connected`);
})();

(()=>{
    console.log(`DB Connected to`);
})();
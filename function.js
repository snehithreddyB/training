
// function ispPalindrome(str){
//     let revStr=" ";
//     for (let i=str.length-1;i>=0;i--){
//         revStr += str[i];
//     }
//     if(str == revStr){
//         console.log("Palindrome");
//     }else{
//         console.log("Not a palindrome");
//     }
// }
// isPalindrome("sir");
// isPalindrome("madam");
// isPalindrome("malayalam");


// let x=function(){
//     console.log("function experession");
//     console.log(x);
// }


// function demo(){
//     console.log("function expression");
// }demo();


// let x=(a,b) =>console.log(a+b)
//     x(10,5);


// let x=_ =>{ console.log("hi");
//     console.log("world");
//     console.log("Bye");}
//     x();


// let x=(a,b)=> a+b;
// console.log(x(a,b));//implict 


// function hof(a){
//     return a;
// };
// let x=hof([1,2,3,4,5]);
// console.log(x)


// let users=['sai','siddu','shankar'];
//     // console.log(user)
// let x = users.map((user)=>{
//     return users;
// });console.log(x);


// let x=users.forEach((user)=>{
//     return (user);
// });
// console.log(x);
// var a=10;
// let b=20;
// function x(){
//     var user="siddu";
//     const sal=123456;
//     let company="Amazon";
//     console.log(user);
//     console.log(sal);
//     console.log(company);
//     console.log(a,b);
// }
// x(); 


// let userDetails={
//     Name : 'snehith',
//     age : 21,
//     city : 'Hyderabad',
// }
// console.log(userDetails);
// console.log(typeof(userDetails));
// console.log(userDetails.Name);

// localStorage.setItem("user1" , "Raghu");
// localStorage.setItem("user2" , "Rahul");
// localStorage.setItem("user3" , "Sunny");

// let user3=localStorage.getItem("user3");
// console.log(user3);
// localStorage.remove("user1");

// sessionStorage.setItem("user1" , "ramu");
// sessionStorage.setItem("user2" , "shiv");
// sessionStorage.setItem("user3" , "Snehith");

// let user2=sessionStorage.getItem("user2");
// console.log(user2);

// let p1 = new Promise((resolve,reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve,reject)=>{
//     resolve("Success");
// });
// console.log(p2);
// p2.then((response)=>{
//     console.log(response);
// }).finallycatch((error)=>{
//     console.log(error);
// }).finally(()=>console.log("finally printing for both"))

// let p3 = new Promise((resolve,reject)=>{
//     reject("Failures");
// });
// console.log(p3);

// function fetchUsers(){
//     let x=fetch("https://jsonplaceholder.typicode.com/users");
//     x
//     .then((response)=>{
//         return response.json().then(data=>{
//             console.log(data);
//             let store=document.getElementById("store");
//             data.map((user)=>{
//                 store.innerHTML +=
//                 <tr>
//                     <td>${user.id}</td>
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td>${user.company}</td>
//                 </tr>
//             })
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers();

// let ele=document.getElememtByClassName("test");
// // console.log(ele);
// // console.log(Array.isArray(ele));
// ele[0].style.backgroundcolor="yellow";
// let x=[...ele];
// console.log(x ,Array.isArray(x));

// x.map((element)=>{
//     element.style.backgroundcolor="teal";
// })



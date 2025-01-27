// let x=document.createElement("h1");
// x.innerText="Dynamic creation of html element from Js";
// // x.id="demo"
// x.setAttribute("id","demo");
// console.log(x);

// document.body.appendChild(x);
// let image=document.createElement("img");
// image.src="./3606208.jpg";
// console.log(image);
// document.body.appendChild(image);

let mainEle = document.createElement("div");
mainEle.setAttribute("class" , "mainBlock");
console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class" , "topBlock");
// console.log(topEle);

let image = document.createElement("img");
image.src="https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0&h=220";
image.width="300"
image.height="300"

let bottomEle = document. createElement("div");
bottomEle.setAttribute("class" , "bottomBlock");

let h1 = document.createElement("h1");
h1.innerText="snehith reddy";
let btn = document.createElement("button");
btn.innerText="view.more";


bottomEle. appendChild(h1);
bottomEle.appendChild(btn);
topEle.appendChild(image)
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body. appendChild(mainEle);
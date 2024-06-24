let div = document.createElement("div");
div.classList.add('todolist');
let body = document.querySelector("body");
body.appendChild(div);

let heading = document.createElement("h1");
heading.style.color="white";
heading.style.textAlign="center";
heading.textContent="Todolist";
div.appendChild(heading);

let para = document.createElement("p");
para.style.color="white";
para.style.textAlign="center";
para.textContent="Each day I will accomplish one thing on my todo list."
div.appendChild(para);

let heading2 = document.createElement("h4");
heading2.style.color = "white";
heading2.textContent="Read a book";
div.appendChild(heading2);

let para2 = document.createElement("p");
para2.style.color="white";
para2.style.fontSize="large";
para2.textContent="I don't think that the human race will survive the next thousand years, unless we spread into space. There are too manny accidents that can befall life on a single planet. But i'm an optimist..."
div.appendChild(para2);

let div2=document.createElement("div");
div2.classList.add("buttonDiv");
div2.style.display="flex";
div2.style.justifyContent="center"
div.appendChild(div2);

let btn = document.createElement("button");
btn.style.backgroundColor="yellow";
btn.style.color="white"
btn.style.padding="5px 10px"
btn.textContent="Start";
div2.appendChild(btn);

let para3=document.createElement("p");
para3.textContent="skip introduction";
para3.style.color="white";
para3.style.textDecoration="underline";
para3.style.textAlign="center";
div.appendChild(para3);
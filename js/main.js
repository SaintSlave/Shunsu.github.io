'use script';

{

const t = document.querySelector("textarea");
const num = document.getElementById("num");
const shif = document.getElementById("shif");
let shift = 0;
let string = [];
string[0] = 0;

document.querySelector("textarea").addEventListener("keydown", (e) =>{
  if(e.keyCode === 32 || e.keyCode === 229){
    shift++;
    string[t.value.length] = 1;
  } else if(e.keyCode !== 8 && e.keyCode !== 13){
    string[t.value.length] = 0;
  }

  if(e.keyCode === 8 && string[t.value.length -1] === 1){
    
   if(shift>0)shift--;
  }
  });

document.addEventListener("input", () =>{
num.textContent = (t.value.length);
shif.textContent = shift;
});




document.querySelector("button").addEventListener("click", () =>{
  const li = document.createElement("li");
  const ul = document.querySelector("ul");
  
  if(t.value.length !== 0){
    li.textContent = t.value;
    ul.appendChild(li);
    
    li.classList.add("outcol");
  }
 
  console.log(shift);
});

}
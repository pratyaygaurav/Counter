
const num = document.getElementById("number");
const dec = document.getElementById("decrease");
const rst = document.getElementById("reset");
const inc = document.getElementById("increase");
let score=0;


dec.addEventListener("click",function(){
    score--;
    
    num.innerHTML=score;
    if(score<0)
    num.style.color = "red";
})

rst.addEventListener("click",function(){
    score=0;
    num.innerHTML = score;
    num.style.color = "black";
})

inc.addEventListener("click",function(){
    score++;
    num.innerHTML=score;
    if(score>0)
    num.style.color = "green";
})




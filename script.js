const counter=document.getElementById("counter");
const DecrementBtn=document.getElementById("Decrement");
const ResetBtn=document.getElementById("Reset");
const IncrementBtn=document.getElementById("Increment");
let counterValue=0;
DecrementBtn.addEventListener('click',function(event){
    if(counterValue>0){
    counterValue -=1;
    counter.innerHTML=counterValue;}
    else{
        alert("Counter Can't go below ")

    }
})
IncrementBtn.addEventListener('click',function(event){
    counterValue +=1;
    counter.innerHTML=counterValue;
})
ResetBtn.addEventListener('click',function(event){
    counterValue =0;
    counter.innerHTML=counterValue;
})
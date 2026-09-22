let counterElement=document.getElementById("value")
function onDecrement(){
    let contervalue=counterElement.textContent;
    let updatedCounterValue=parseInt(contervalue)-1;
    counterElement.textContent=updatedCounterValue;
    console.log(updatedCounterValue)
    
    if (updatedCounterValue>0){
        counterElement.style.color="green";
        }
    else if (updatedCounterValue<0){
        counterElement.style.color="red";
        }
    else{
        counterElement.style.color="black";
    }
}
function onReset(){
    let updatedCounterValue=0;
    counterElement.textContent=updatedCounterValue;
        counterElement.style.color="black";
}
function onIncrement(){
    let contervalue=counterElement.textContent;
    let updatedCounterValue=parseInt(contervalue)+1;
    counterElement.textContent=updatedCounterValue;
    console.log(updatedCounterValue)
    
    if (updatedCounterValue>0){
        counterElement.style.color="green";
        }
    else if (updatedCounterValue<0){
        counterElement.style.color="red";
        }
    else{
        counterElement.style.color="black";
    }
}
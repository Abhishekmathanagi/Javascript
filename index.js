let saveEl = document.getElementById("save-El");
let ageElement = document.getElementById("age");
let count = 0;

function increment() {
    console.log("Button clicked");
    count++;
    ageElement.innerText = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;   
    count = 0;                        
    ageElement.innerText = count;     
}

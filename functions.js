//functions
function countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown()
countdown()

function num(){
    console.log(42)
}
num()


let lap1=34
let lap2=33
let lap3=35

function laptime(){
    let total_laptime=lap1+lap2+lap3
    console.log(total_laptime)
}

laptime()



let lapsCompleted=0

function lapcount(){
    lapsCompleted++
}

lapcount()
lapcount()
lapcount()
lapcount()
console.log(lapsCompleted)


//strings
let username="abhi"
let message="you have three notifications "
let messagetouser =username+" "+message+"!"
console.log(messagetouser)

let name ="abhishek" //lets think we declared a value to this variable "20" output will be "hi my name is 20 " 
let greeting= "Hi , my name is "// caues in the battle of both integer and string string always WINS 
myGreeting= greeting+" "+name 
console.log(myGreeting)

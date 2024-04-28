const buttons = document.querySelectorAll("button");
const CLEAR = document.getElementById("clear");
const DEL = document.getElementById("delete");
const DIVIDE = document.getElementById("divide");
const TIMES = document.getElementById("times");
const PLUS = document.getElementById("plus");
const MINUS = document.getElementById("minus");
const EQUALS = document.getElementById("equals");
const DECIMAL = document.getElementById("decimal");
const ONE = document.getElementById("number1");
const TWO = document.getElementById("number2");
const THREE = document.getElementById("number3");
const FOUR = document.getElementById("number4");
const FIVE = document.getElementById("number5");
const SIX = document.getElementById("number6");
const SEVEN = document.getElementById("number7");
const EIGHT = document.getElementById("number8");
const NINE = document.getElementById("number9");
const ZERO = document.getElementById("number0");
let currentop = document.getElementById("current__operand");
let previousOp = document.getElementById("previous__operand");
let currentOperand = [];

let previousOperand =[];
let clickedButtons = [];
let display = [];
let previousDisplay = [];


let Secondoperand = []
let divided = false;
let times = false;
let plus = false;
let minus = false;
//   Prints display
let computation 


const getDisplay = () => {
    display = clickedButtons.join("")
    console.log("Current operand = " + display)
    document.getElementById("current__operand").innerHTML = display
}

const getPreviousDisplay = () => {
    let previousDisplay = clickedButtons.join("")
    let UpdatedPreviousDisplay = previousDisplay.slice(0, -1)
    document.getElementById("previous__operand").innerHTML = UpdatedPreviousDisplay;
    console.log("Previous operand = " + UpdatedPreviousDisplay)
    currentOperand =[];
    display =[];
    clickedButtons =[];
    Secondoperand = UpdatedPreviousDisplay
}



//   Checks button clicked
buttons.forEach(button => {
    button.addEventListener('click' , (e) => {
        currentOperand =  e.target.innerHTML
        clickedButtons.push(currentOperand)
        document.getElementById("current__operand").innerHTML = currentOperand
        getDisplay()
    })
})

// Event listeners for Computations

CLEAR.addEventListener('click' , () => {
    console.log("The current operand is " + currentOperand)
    document.getElementById("previous__operand").innerHTML = "";
    clickedButtons = [];
    newPrevDisplay = [];
    Secondoperand = [];
    clickedButtons =[];
    currentOperand =[];
    display =[];
    getDisplay()
})

DEL.addEventListener('click' , () => {
    clickedButtons = clickedButtons.slice(1)
    display= clickedButtons.join("").slice(-1)
   
    getDisplay()
})


 // Work on meeee

 // IF A CALCULATE FUNCTION IS CALLED IT MUST RESET THE CURRENT OPERAND TO 0 

DIVIDE.addEventListener('click' , () => {
    let previousDisplay = clickedButtons
    previousOperand  = previousOperand.concat(previousDisplay)
    getPreviousDisplay();
    document.getElementById("current__operand").innerHTML = ""
    divided = true
})

TIMES.addEventListener('click' , () => {
    let previousDisplay = clickedButtons
    previousOperand  = previousOperand.concat(previousDisplay)
    getPreviousDisplay();
    document.getElementById("current__operand").innerHTML = ""
    times = true
})

PLUS.addEventListener('click' , () => {
    let previousDisplay = clickedButtons
    previousOperand  = previousOperand.concat(previousDisplay)
    getPreviousDisplay();
    document.getElementById("current__operand").innerHTML = ""
    plus = true;
})

MINUS.addEventListener('click' , () => {
    let previousDisplay = clickedButtons
    previousOperand  = previousOperand.concat(previousDisplay)
    getPreviousDisplay();
    document.getElementById("current__operand").innerHTML = ""
    minus = true;
})

EQUALS.addEventListener('click' , () => {
    let previousDisplay = clickedButtons
    previousOperand  = previousOperand.concat(previousDisplay)
    currentOperand = display  
    compute()
})

DECIMAL.addEventListener('click' , () => {
    console.log("This is the slice " + newPrevDisplay)
    console.log("This is the previous operand " + previousOperand)
    getPreviousDisplay();
    currentOperand = "DECIMAL";
    console.log("The current operand is " + currentOperand)
})

compute = () => {
   
 
    console.log("Final current operand is " + currentOperand)
    console.log("Final previous Operand  is " + Secondoperand)
    let prev = parseFloat(Secondoperand)
    let current =parseFloat(currentOperand)
  
    
    if (divided === true){
        computation = prev / current
        console.log("Divided result = " + computation)
    } else if (times === true){
        computation = prev * current
        console.log("times result = " + computation)
    } else if (plus === true){
        computation = prev + current
        console.log("plus result = " + computation)
    } else if (minus === true){
        computation = prev - current
        console.log("minus result = " + computation)
    }
     console.log("these are the clicked buttons " + clickedButtons)

   currentOperand = computation
   document.getElementById("current__operand").innerHTML = currentOperand
   document.getElementById("previous__operand").innerHTML =  "";
    previousOperand = [];
    console.log(computation)



   console.log("After computation current operand is " + currentOperand)
   console.log("After computation second operand is " + Secondoperand)

    divided = false;
    times = false;
    plus = false;
    minus = false;
  }


  // Need to seperate into more functions
  // Each operand function should just give a switch to a case that is refered to into compute
  // Need a function purely to append numbers to 1st Input and 2nd Input (when an operand button is clicked shift the joined numbers in an array to 1st input
  // when enter is hit joined the sequence of numbers in the array to a another input)
  // equals with then check the operand and 
  // Calculations will be only called upon when pressing equals 
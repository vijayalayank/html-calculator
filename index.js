let isCalculationDone = false;

console.log("vijay's calculator");


function update(value){
    if (isCalculationDone) {
        document.myform.display.value = ""; // Clear the display for a new calculation
        isCalculationDone = false;
    }
    document.myform.display.value += value;
}

function performOperation(operator) {
    if (isCalculationDone) {
        document.myform.display.value = ""; // Clear display if new operation after calculation
        isCalculationDone = false;
    }
    document.myform.display.value += operator;
}

function result(){
    try {
        document.myform.display.value = eval(document.myform.display.value);
        isCalculationDone = true; // Mark the calculation as done
    } catch (e) {
        document.myform.display.value = "Error";
        isCalculationDone = true; // Mark calculation as done even in case of error
    }
};


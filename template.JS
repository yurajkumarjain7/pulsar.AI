function getTextboxValue() {
    // 1. Select the Element by its ID
    const inputElement = document.getElementById('myInput');

    // 2. Get the Value
    const inputValue = inputElement.value; 

if(value === que1)

else(

)

function getTextboxValue() {
    // 1. Select the Element by its ID
    const inputElement = document.getElementById('myInput');

    // 2. Get the Value
    const inputValue = inputElement.value; // <--- FIX: Added .value to get the string

    // 3. Comparison Logic
    if (inputValue === que1) { // <--- FIX: Changed 'value' to 'inputValue' and added {}
        // Code to execute if the values match
        console.log("Values match!");
    } else { // <--- FIX: Correct 'else' syntax with { }
        // Code to execute if the values do not match
        console.log("Values do not match.");
    }
}

    
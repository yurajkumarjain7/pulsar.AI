function getTextboxValue() {
    // 1. Select the Element by its ID
    const inputElement = document.getElementById('myInput');

    // 2. Get the Value
    const inputValue = inputElement.value; // This is the text the user typed

    // 3. Use the Value (Example: Displaying it on the page)
    const outputParagraph = document.getElementById('outputMessage');
    if (inputValue) {
        outputParagraph.textContent = 'Hello, ' + inputValue + '! Thanks for submitting.';
    } else {
        outputParagraph.textContent = 'Please enter a value.';
    }

    // You can now use the 'inputValue' variable just like a prompt result
}

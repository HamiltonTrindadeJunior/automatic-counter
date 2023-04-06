# javascript counter

This is a simple project of a counter in JavaScript with a web interface that counts from a starting number to an ending number with a specified step. The counter is implemented in a single JavaScript function called "count" that is triggered by an HTML button. The project also includes an HTML page and a CSS file for styling.

Functionality:

The "count" function takes three inputs (start, end, and step) and one output (res) as HTML elements. The function checks if all the inputs are filled and not empty. If any of the inputs are empty, the function returns "Cannot count! Missing data!" in the response box. Otherwise, the function proceeds with the execution.

Next, the function sets the start, end, and step variables with the values of the corresponding inputs, converting them to numbers using the "Number()" function. The function checks if the step value is greater than zero. If the step value is less than or equal to zero, the function emits an alert informing that the step is invalid and assigns a default value of 1 to the step.

The function then checks if the start value is less than the end value. If it is the case, the function starts a for loop that counts from the start to the end with the specified step and adds each number to the response box. The response box is formatted to show each number on a new line. At the end, the response box displays a confetti emoji to indicate that the counting has been successfully completed.

If the start value is greater than the end value, the function starts a for loop that counts from the start to the end with the specified step and subtracts each number from the response box. The response box is formatted to show each number on a new line. At the end, the response box displays a confetti emoji to indicate that the counting has been successfully completed.

How to use:

To use the counter, download all the files in the same folder and open the "index.html" file in a web browser. The HTML page includes the necessary inputs and a "Count" button that triggers the "count" function when clicked. The result of the counting is displayed in a formatted text box.

Contributions:

This is a simple project, but feel free to contribute and improve the code. If you find any bugs or have any ideas to improve the code, feel free to open an issue or a pull request.

License:

This project is licensed under the MIT License. Feel free to use and modify the code as you wish. See the LICENSE file for more information.

Author:
This project was created by Hamilton T. J.

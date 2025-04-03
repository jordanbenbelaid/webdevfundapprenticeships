function deleteTasks(){
    document.getElementById("task-list").replaceChildren();
}

function convertCelsiusToFahrenheit(temp){
    let result = 9/5*temp+32
    return result;
}

let celsius = prompt("Enter a temp to convert")
alert(convertCelsiusToFahrenheit(celsius))

// let result = number1 + number2
function addNumbers(num1, num2){
    let result = num1 + num2
    
    return result
}

alert(addNumbers(2,5))

let number1 = parseInt(prompt("Enter first number"))
let number2 = parseInt(prompt("Enter second number to add to first number"))

alert(addNumbers(number1, number2))

//what is a conditional
//if, else if, else
let num = 10;
let fakeNum = "10";

if (num > 4) {
  alert("this number is more than 4");
} else if (num > 8) {
  alert("this num is more than 8");
} else if (num > 12) {
  alert("this num is more than 12");
} else {
  alert("this is anything else");
}

if (num >= 3 && num <= 6) {
  alert("this num is greater than 3 and less than 6");
} else if (num >= 7 && num <= 10) {
  alert("this number is greater than 6 and less than 11");
} else {
  alert("This number is less than 3 and greater than 10");
}

//switch statement
let colour = prompt("What is your favourite colour?");

let message;
switch (colour.toLowerCase()) {
  case "red":
    message = "Red is a danger colour";
    break;
  case "blue":
    message = "Blue is a sky colour";
    break;
  case "green":
    message = "Green is a nature colour";
    break;
  default:
    message = colour + " is a nice colour!";
}

alert(message);


//This is the above code converted into a function

function chooseColour(colour){
  let message;
  switch (colour.toLowerCase()) {
    case "red":
      return message = "Red is a danger colour";
    case "blue":
      return message = "Blue is a sky colour";
    case "green":
      return message = "Green is a nature colour";
    default:
      return message = colour + " is a nice colour!";
  }
  }
  
  
  let userColour = prompt("What is your favourite colour?");
  alert(chooseColour(userColour))

//while

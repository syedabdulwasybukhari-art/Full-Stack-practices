
// myFunction = () => {
//      "use strict";
//     alert("I’m JavaScript!");
// }   
myFunction_2 = () => {
        "use strict";
        let admin , name;
        name = "Abdulwasy";
        admin = name;
        alert(admin);
}

// const BIRTHDAY = '18.04.1982'; // make birthday uppercase this velue is a constant and cannot be changed

// const age = someCode(BIRTHDAY); // variable age well change its value so we use smallcase latter for age variable
     
pracFunction = () => {
    console.log(NaN + 1); // NaN
    alert(NaN + 1); // NaN
    let name = "Ilya";
alert( `hello ${1}` );
alert( `hello ${"name"}` );
alert( `hello ${name}` ); 
    
}

secpractFunction = () => {
        let age = prompt("How old are you?");
        alert(`You are ${age} years old!`);

        let boss = confirm("Are you the boss?");
        alert(boss);
        
}
// this function for typeof operator
thirdpractFunction = () => {
        let name = "Abdulwasy";
        alert(typeof name);

        let value = true;
        alert(typeof value);

        value = String(value);
        alert(typeof value);

}
//  this function for type conversion
fourthpractFunction = () => {
     let n =   Number("") + 1 + 0;
     alert(n); 
     let n1 = "" - 1 + 0;
     alert(n1);
     let n2 = true + false;
     alert(n2);
     let n3 = 6 / "3";
     alert(n3);
     let n4 = "2" * "3";
     alert(n4);   
     let n5 = 4 + 5 + "px";
     alert(n5);
     let n6 = "$" + 4 + 5;
     alert(n6);
     let n7 = "4" - 2;
     alert(n7);
     let n8 = "4px" - 2;
     alert(n8);
     let n9 = "  -9  " + 5;
     alert(n9);
     let n10 = "  -9  " - 5;
     alert(n10);     
     let n11 = null + 1;
     alert(n11);
     let n12 = undefined + 1;
     alert(n12);
     let n13 = "\t \n" - 2;
     alert(n13);

}
// this function for condition ? value1 : value2
fifthpractFunction = () => {
    let age = prompt("How old are you?", 21);
    let message = (age < 3) ? 'Hi, little baby!' :
      (age < 18) ? 'Hello!' :
      (age < 100) ? 'Greetings!' :
      'What an unusual age!';
    alert( message );
}
// this function for simple if else condition
sixthpractFunction = () => {
    let name = prompt("What is official name of JavaScript?", "");
    if (name === "ECMAScript") {
        alert("Right!");
    } else {
        alert("You don't know? ECMAScript!");
    }
}
// this function for task
seventhpractFunction = () => {
        let number = prompt("Enter a number");
        number = Number(number);
        if(number > 0){
            alert(1);
        }
        else if(number < 0){
            alert(-1);
        }
        else{
            alert(0);
        }
}
//  this function for switch case
eighthpractFunction = () => {
        let num = + prompt("Enter a number");
        switch(num){
                case 0:
                        alert(0);
                        break;
                case 1:
                        alert(1);
                        break;
                case 2:
                case 3:
                        alert("2,3");
                        break;
                default:
                        alert("please enter only 0,1,2,3");  
                        break;      
}
}
function checkAge() {
    let age = prompt("How old are you?", 21);
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
ninthpractFunction = () => {
let age = prompt("What is your age?", 18);
// conditionally declare a function
if (age < 18) {
  function welcome() {
    alert("Hello!");
  }
} else {
  function welcome() {
    alert("Greetings!");
  }
}
welcome();
}
tenthpractFunction = () => {
        let age = prompt("What is your age?", "enter your age here");
        while (age < 18) {
            age = prompt("this facilate use only person which are 18 or older?", 18);
}
alert("You are now eligible!");
}
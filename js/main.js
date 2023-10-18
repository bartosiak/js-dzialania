let number1 = 5;
let number2 = 10;

function calc(num1, num2) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let multiply = num1 * num2;

    if (sum >= 0) {
        console.log("Wynik dodawania wynosi: " + sum);
    } else {
        console.log("Wynik dodawania jest nieprawidłowy");
    }

    if (difference >= 0) {
        console.log("Wynik odejmowania wynosi: " + difference);
    } else {
        console.log("Wynik odejmowania jest nieprawidłowy");
    }

    if (multiply >= 0) {
        console.log("Wynik mnożenia wynosi: " + multiply);
    } else {
        console.log("Wynik mnożenia jest nieprawidłowy");
    }
}
calc(number1, number2);

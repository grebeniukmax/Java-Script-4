// N1 //
function checkTextFields() {
    const text1 = document.getElementById("text1").value
    const text2 = document.getElementById("text2").value
    const result1 = document.getElementById("textResult")
    if (text1 && text2 >= 1) {
        result1.textContent = "Обидва поля заповненні"
    } else {
        result1.textContent = "Не всі поля заповненні"
    }
}
// N2 //
function checkNumberFields() {
    const num1 = Number(document.getElementById("number1").value)
    const num2 = Number(document.getElementById("number2").value)
    const result2 = document.getElementById("numberResult")
    if (num1 + num2 > 10) {
        result2.textContent = "Сумма більше 10"
    } else {
        result2.textContent = "Сумма меньша 10"
    }
}
// N3 //
function checkingJs() {
    const jsText = document.getElementById("jsText").value
    const result3 = document.getElementById("jsResult")
    if (jsText.includes("JavaScript")) {
        result3.textContent = "Є слово JavaScript"
    } else {
        result3.textContent = "Не має слова JavaScript"
    }
}
// N4 //
function checkRange() {
    const rangeNum = Number(document.getElementById("numbernumber").value)
    const result4 = document.getElementById("numberResult")
    if (rangeNum >= 10 && rangeNum <= 20) {
        result4.textContent = "Число входить в діапазон"
    } else {
        result4.textContent = "Число не входить в діапазон"
    }
}
// N5 //
function checkingForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const result5 = document.getElementById("resultatik");
    if (username.length >= 3 && email.includes('@') && password.length >= 6) {
        result5.textContent = "Дякую за форму,бай бай";
    } else {
        result5.textContent = "Перевірте усі умови";
    }
}
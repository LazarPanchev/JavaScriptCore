function subtract() {
    let firstNumber=document.getElementById('firstNumber').value;
    let secondNumber=document.getElementById('secondNumber').value;
    let result=Number(firstNumber)-Number(secondNumber);
    let divResult=document.getElementById('result');
    divResult.textContent=result.toString();
}
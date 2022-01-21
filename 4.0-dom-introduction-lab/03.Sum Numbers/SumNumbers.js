function calc() {
    const numOne = document.getElementById('num1');
    const numTwo = document.getElementById('num2');
    const sum = document.getElementById('sum');

    let result = Number(numOne.value) + Number(numTwo.value);
    sum.value = result;
}

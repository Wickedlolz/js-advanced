function calculator() {
    let firstSelector;
    let secondSelector;
    let result;

    function init(selector1, selector2, resultSelector) {
        firstSelector = document.querySelector(selector1);
        secondSelector = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    }

    function add() {
        result.value =
            Number(firstSelector.value) + Number(secondSelector.value);
    }

    function subtract() {
        result.value =
            Number(firstSelector.value) - Number(secondSelector.value);
    }

    return {
        init,
        add,
        subtract,
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');

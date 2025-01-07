let num1, num2;
let result = document.getElementById("result");


const getData = () => {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
};

const calculate = (operation) => {
    getData();
    switch (operation) {
        case 'add':
            
            result.textContent = 'SUM = '+(num1 + num2);
            break;
        case 'sub':
            result.textContent = 'DIFFERENCE = '+(num1 - num2);
            break;
        case 'mul':
            result.textContent = 'PRODUCT = '+(num1 * num2);
            break;
        case 'div':
            result.textContent = 'QUOTIENT = '+(num1 / num2);
            break;
    }
};

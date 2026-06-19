
function calc(a,b, operator){
    switch (operator){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            if (b===0){
                return 'на 0 не делят'
            }
            return a/b;
        default:
            return 'ты что-то не то ввёл'
    }
}


const button = document.querySelector('.calc');
button.addEventListener('click', () => {
    const a = +prompt('Первое число');
    const b = +prompt('Второе число');
    const operator = prompt('Оператор (+, -, *, /)');
    const result = calc(a, b, operator);
    console.log(result);
})


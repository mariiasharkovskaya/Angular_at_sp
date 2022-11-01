let number1 = prompt("Введите первое слагаемое");
let number2 = prompt("Введите второе слагаемое");
let sum = Number(number1) + Number(number2); 
//alert(sum);
if (sum < 20) {
    alert('Сумма меньше 20 \u{1f600}')
} else {
    alert('Сумма не меньше 20 \u{1F61E}')
}


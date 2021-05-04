let a = +prompt("Введите первое значение: ");
let b = +prompt("Введите второе значение: ");

if (!isNaN(a) && !isNaN(b)) {
    console.log(a.toString(b));
} else {
    console.log(`"Некорректный ввод!"`);
}


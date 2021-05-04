function calc() {
    let a = +prompt("Введите первое значение: ");
    if (!isNaN(a)) {
        let b = +prompt("Введите второе значение: ");
        if (!isNaN(b)) {
            console.log(`"Ответ: ${a + b}, ${a / b}."`);
        } else {
            console.log(`"Некорректный ввод!"`);
        }
    } else {
        console.log(`"Некорректный ввод!"`);
    }
}

calc();
//Задание 1. Задача 1. Определить день недели по дате ДД.ММ.ГГГГ
//     // (указание: используйте формулу Зеллера для решения задачи)
// function weekday (id) {
//             let arrD = k.split('.');
//             let d = parseInt(arrD[0]), m = parseInt(arrD[1]), y = parseInt(arrD[2]);
//             if (m<3) { m+=12; y--; }
//             let n = y%100, c = Math.floor(y/100);
//             dday= (Math.floor((m+1)*26/10)+d+n+Math.floor(n/4)+Math.floor(c/4)-2*c) % 7;
//             let wday = ['Суббота','Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница'];
//             function pad (n,size) { return String(Array(size-1).fill('0').join('')+n).slice(-size); }
//             return pad(arrD[0],2)+'.'+pad(arrD[1],2)+'.'+pad(arrD[2],4)+'='+wday[dday];
//         }
//     let k = prompt("Введите дату");
//     alert(weekday(k))



//Задание 1. Задача 2. Найти арифметическое среднее элементов числового массива
// function average(arr) {
//  let arrN = arr.split(",").map(v => parseInt(v))
//     if(arrN.length === 0)
//         return 0;
//     let sum = 0;
//     for(let i = 0; i < arrN.length; i++) {
//         sum += arrN[i];
//     }
//     return ("Среднее арифметическое чисел = " +sum / arrN.length);
//     }

// var k = prompt("Введите числа через запятую:");
// alert(average(k));



// Задание 2.  Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)».
// Если аргументы не заданы, считать их равными нулю.
// function rgb(r, g, b) {
//     return `rgb(${r ? r : 0}, ${g ? g : 0}, ${b ? b : 0})`;
// }
// let r = prompt("r:");
// let g = prompt("g:");
// let b = prompt("b:");
// alert(rgb(r,g,b))

//Задание 3. Разработайте форму, заполняемую пользователем, на выбранную тематику.
// При этом должны быть использованы все виды элементов, которые могут присутствовать на форме.
// Разработайте скрипт, проверяющий правильность заполнения полей формы (не пустые ли они, соответствуют ли типы и диапазоны данных и др.)
// При неправильном заполнении сообщить, какие поля надо исправить. Если всё заполнено верно, сообщить, что данные отправлены.





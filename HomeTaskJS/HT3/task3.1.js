/*-- створити об'єкт (не меньше 5ти властивостей) який описує
- собаку
- людину
- автомобіль
- квартиру
- книгу*/
// let dog={
//     nickname:'Luky',
//     breed: 'buldog',
//     age: 1,
//     fur: 'red',
//     tail: 'folse'
// }
// let man ={
//     sex:'male',
//     hair: 'red',
//     age: 23,
//     height: 180,
//     profession: 'developer'
// }
// let car ={
//     brand: 'vv',
//     model: 'caddy',
//     color: 'green',
//     drive: 'front-wheel',
//     maxSpeed: 300
// }
// let flat ={
//     price: 100,
//     rooms: 5,
//     level: 2,
//     squer: 150,
//     windowsOriented: 'South',
// }
// let book ={
//     author: 'famous',
//     genre: 'action',
//     country: 'Ukrain',
//     volumes:10,
//     edition:10000
// }
//
// /*    -- Створити масив та вивести його в консоль:
//     - з 5 собак
//     - 3 5 людей
//     - з 5 автомобілів*/
// let keys = [ dog, dog, dog, dog, dog, man, man, man, man, man, man,car,car,car,car,car ];
// // console.log(keys);

/*-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна
 бути об'єктом,ще одна - масивом
- будинок
- водій
- іграшку
- стіл
- сумка*/
//
// let house = {
//     price: 1000,
//     levels: 2,
//     squareMeters: arr= [15, 20, 25, 60, 100,12,13 ],
//     rooms: {
//         bigRoom: 2,
//         smoleRoom:3,
//         kitchen:2
//     },
// }
// let driver={
//     name:'Deer',
//     sex: 'mail',
//     age: ag= [100, 50, 25 ,18 ],
//     hair: 'red',
//     sober: {
//         fistTime: 'folse',
//         secondTime: 'true',
//         thirdTime: 'whithout licens'
//     }
// }
// let toy ={
//     forChildren:'true',
//     forAge: 'from2 to 10',
//     weight: 18,
//     name: 'developer',
//     material: ['plastic', 'fur'],
//     color: {
//         pow: 'green',
//         legs: 'orange',
//         head: 'red'
//     }
// }
// let table ={
//     legs: 5,
//     prise: 1000,
//     model: 'for kitchen',
//     color: {
//         legs: 'green',
//         top: 'orange'
//     },
//     size: si=['big', 'smole']
//     }
// let bag = {
//     size: 'big',
//     madeFrom: 'laser',
//     color: {
//         handls: 'green',
//         body: 'orange'
//     };
//     volumes: 10,
//     edition: 10000
// }

/*Дан массив:
- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
- статус Андрія
- статус Максима
- ім'я передостаннього об'єкту
- ім'я третього об'єкта
- вік Олега
- вік Олі
- вік + ім'я 5го об'єкта
- вік + сатус Анни
Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні!
4й об'єкт має індес 3!*/
// let users = [
//     {name: 'vasya', age: 31, status: false},                  // как-то просто)
//     {name: 'petya', age: 30, status: true},                   //может я неправильно задание понял?
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// /*- статус Андрія*/
// console.log (users [7].status);
// /*- статус Максима*/
// console.log (users [4] .status);
// /*- ім'я передостаннього об'єкту*/
// console.log (users [users.length-1] .name);
// /*- ім'я третього об'єкта*/
// console.log (users [2] .name);
// /*- вік Олега*/
// console.log (users [7] .age);
// /*- вік Олі*/
// console.log (users [9] .age);
// /*- вік + ім'я 5го об'єкта*/
// console.log (users [4] .age + users [4] .name);
// /*- вік + сатус Анни*/
// console.log (users [5] .age + users [5] .status);



 /*-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.*/

/*-- Напишіть код,  який за допомоги
document.getElementById або document.getElementsByClassName або document.getElementsByTagName :*/
/* - отримує текст з параграфа з id "content"*/
//  let element = document.getElementById("content")
// console.log(element.innerText)
// document.write(element.innerText)

/*- отримує текст з блоку з id "rules"*/
//  let element = document.getElementById("rules")
// console.log(element.innerText)
// document.write(element.innerText)

/*- замініть текст параграфа з id 'content' на будь-який інший*/
//  let element = document.getElementById("content")
// console.log(element.innerText= 'замініть текст параграфа з id content')
// document.write(element.innerText)

/* - замініть текст параграфа з id 'rules' на будь-який інший*/
//  let element = document.getElementById("rules")
// console.log(element.innerText= 'замінив текст параграфа з id rules ')
// document.write(element.innerText)

/*- змініть кожному елементу колір фону на червоний*/
// let arr= document.getElementsByClassName('fc' );
// console.log(arr);
// for(let i=0;i<arr.length;i++){
//     arr[i].style.backgroundColor='red'
// }


/*- змініть кожному елементу колір тексту на синій*/
document.getElementById("content").style.color='blue'
document.getElementById("rules").style.color='blue'
let a= document.getElementsByClassName('fc_rules')

for(let i=0;i<a.length;i++){
    a[i].style.color='blue'
        }

/*- отримати весь список класів елемента з id=rules і вивести їх в console.log*/
// console.log(document.getElementById('rules').classList)

/*- отримати всі елементи з класом fc_rules*/
// console.log(document.getElementsByClassName('fc_rules'))


/*- поміняти колір тексту у всіх елементів fc_rules на червоний*/
// let arr= document.getElementsByClassName('fc_rules');
// console.log(arr);
// for(let i=0;i<arr.length;i++){
//     arr[i].style.color='red'
// }

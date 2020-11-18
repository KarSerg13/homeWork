/*1- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
(Т.е поле name  должно присутствовать только 1 раз в одном объекте )*/

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


/*2- создать 5 объектов с полностью разным набором полей. В каждом объекте
должен присутсвовать массив и внутренний объект. Опишите что угодно, машину,
картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };*/

// let house = {
//     price: 1000,
//     levels: 2,
//     squareMeters: arr= [15, 20, 25, 60, 100,12,13 ],
//     rooms: {
//         bigRoom: 2,
//         smoleRoom:3,
//         kitchen:2
//     }
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
//     },
//     volumes: 10,
//     edition: 10000
// }

/*3- При помощи for in вывести все ключи всех объектов из задания 1 и 2*/
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
// let dog={
//     nickname:'Luky',
//     breed: 'buldog',
//     age: 1,
//     fur: 'red',
//     tail: 'folse'
// }
//
// for (k in dog){
//     console.log( k)              //получаю ключи объекта(названия полей)
// }
//
// for (i in driver){
//     console.log(i)                 //получаю ключи объекта(названия полей)
// }

/*4- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2*/

// let arr1 = [ dog, man, car, flat, book];
// let arr2 = [ house, driver, toy, table, bag ];
//    console.log(Object.keys(dog))
//    console.log(Object.keys(man))
//    console.log(Object.keys(car))
//    console.log(Object.keys(flat))
//    console.log(Object.keys(book))
//    console.log(Object.keys(house))
//    console.log(Object.keys(driver))
//    console.log(Object.keys(toy))
//    console.log(Object.keys(table))
//    console.log(Object.keys(bag))

/*5- Создать массив из 10 объектов cars и заполнить его машинами с полями модель,
год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)*/
    // let cars1 = [
    //     {model: 'as', Year: 2020, power: 200, color: 'green' },
    //     {model: 'sd', Year: 2022, power: 300, color: 'red' },
    //     {model: 'df', Year: 2023, power: 400, color: 'blue' },
    //     {model: 'fg', Year: 2025, power: 500, color: 'ivory' },
    //     {model: 'gh', Year: 2028, power: 600, color: 'yellow' },
    //     {model: 'hj', Year: 2030, power: 700, color: 'black' },
    //     {model: 'jk', Year: 2035, power: 750, color: 'orange' },
    //     {model: 'kl', Year: 2048, power: 850, color: 'violet' },
    //     {model: 'lk', Year: 2050, power: 900, color: 'grey' },
    //     {model: 'kj', Year: 2051, power: 950, color: 'whight' },
    // ]

/*6- Создать массив объектов cities и заполнить его объектами с полями название,
популяция, страна, регион. (Значаения полей могу быть выдуманными)*/
// let cities =[
//     {name: 'city1', population: 1, country: 1, region: 1},
//     {name: 'city2', population: 2, country: 2, region: 2},
//     {name: 'city3', population: 3, country: 3, region: 3},
//     {name: 'city4', population: 4, country: 4, region: 4},
//     {name: 'city5', population: 5, country: 5, region: 5},
// ]

/*7- Создать массив объектов cars и заполнить его машинами с полями модель,
год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.*/
// let cars2 = [
//     {model: 'as', Year: 2020, power: 200, color: 'green', driver:{ name: 'q', age: 20, sex: 'male', experience: 2}},
//     {model: 'sd', Year: 2022, power: 300, color: 'red' , driver:{ name: 'w', age: 21, sex: 'female', experience: 3}},
//     {model: 'df', Year: 2023, power: 400, color: 'blue' , driver:{ name: 'e', age: 22, sex: 'male', experience: 4}},
//     {model: 'fg', Year: 2025, power: 500, color: 'ivory' , driver:{ name: 'r', age: 23, sex: 'female', experience: 5}},
//     {model: 'gh', Year: 2028, power: 600, color: 'yellow' , driver:{ name: 't', age: 24, sex: 'male', experience: 6}},
// ]

/*8- проитерировать каждый массив из задания 5,6,7 при помощи while.*/
// let i=0;
// while (i<cars1.length){
//     console.log(cars1[i]);     //// выводит в консоль каждый Object
//     i++;
// }
//
// let j=0;
// while (j<cities.length){
//     console.log(cities[j]);     //// выводит в консоль каждый Object
//     j++;
// }
//
// let k=0;
// while (k<cars2.length){
//     console.log(cars2[k]);     //// выводит в консоль каждый Object
//     k++;
// }

/*9- проитерировать каждый массив из задания 5,6,7 при помощи for .*/
// for (let i =0; i<cars1.length; i++){
//     console.log(cars1[i]);     //// выводит в консоль каждый Object полностью
//
// }
//
// for (let j =0; j<cities.length; j++){
//     console.log(cities[j]);     //// выводит в консоль каждый Object полностью
//
// }
//
// let k=0;
// for (let k =0; k<cars1.length; k++) {
//     console.log(cars2[k]);     //// выводит в консоль каждый Object полностью
// }

/*10- проитерировать каждый массив из задания 5,6,7 при помощи  for of.*/
// for (const i of cars1){
//     console.log(i);     //// выводит в консоль каждый Object полностью
//
// }
//
// for (const j of cities){
//     console.log(j);     //// выводит в консоль каждый Object полностью
//
// }
//
//
// for (const k of cars2) {
//     console.log(k);     //// выводит в консоль каждый Object полностью
// }

/*11- взять объекты из задания 1 и превратить каждый в json.*/
// let arr1 = [ dog, man, car, flat, book];
// let jdog = JSON.stringify(dog);
// console.log(jdog);
// let jman = JSON.stringify(man);
// console.log(jman);
// let jcar = JSON.stringify(car);
// console.log(jcar);
// let jflat = JSON.stringify(flat);
// console.log(jflat);
// let jbook = JSON.stringify(book);
// console.log(jbook);
//
// /*12- взять json из задания 11 и превратить их обратно в объекты.*/
// let jdogC = JSON.parse(jdog);
// console.log(jdogC);
// let gmanC = JSON.parse(jman);
// console.log(gmanC);
// let jcarC = JSON.parse(jcar);
// console.log(jcarC);
// let jflatC = JSON.parse(jflat);
// console.log(jflatC);
// let jbookC = JSON.parse(jbook);
// console.log(jbookC);

/*13- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .*/
// for (const i of cars1){
//     let l= JSON.stringify(i);
//     console.log(l)
// }

/*14- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .*/
// for (const i of cities){
//     let l= JSON.stringify(i);
//     console.log(l)
// }

/*15- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.*/
// let arr=[];
// for (const i of cars2){
//     let l= JSON.stringify(i);
//     console.log(l)
//     arr[i]=JSON.parse(l)
// }
// console.log(arr)

/*16- Создать массив пользователей. У каждого пользователя обязательно должено быть
поле skills которое является массивом. Проитерировать массив пользователей и в
 каждом пользователе проитерировать его массив skills*/
/*17- Создать массив пользователей. У каждого пользователя обязательно должено
быть поле skills которое является массивом. Проитерировать массив пользователей и в
каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив*/
// let users0 = [
//     {name: 'as', age: 2020, skills: [ 'q',  20, 'male', 2] },
//     {name: 'sd', age: 2022, skills: [  'w', 21,'female', 3]},
//     {name: 'df', age: 2023, skills: [ 'e',  22,'male', 4]},
//     {name: 'fg', age: 2025, skills: [ 'r',  23,'female', 5]},
//     {name: 'gh', age: 2028, skills: [ 't',  24,'male', 6]},
// ]
// console.log(users0)
// let arrU=[];
// for (const use of users0){
//     console.log(use);
//     for (const skill of use.skills) {
//         let k = JSON.stringify(skill);
//         arrU[skill]=JSON.parse(k);
//     }
// }
// console.log(arrU)

/*18- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.*/

//same as 17

/*19- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.*/
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// },
//     {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }]
//
//
// let newAadrress=[];
// for (const user of users){
//     let p =JSON.stringify(user.address);
//     newAadrress.push(JSON.parse(p))
// }
// console.log(newAadrress)

/*20- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
Всі данні в одному блоці.*/

// for ( const user of users){
//     let div = document.createElement("div");
//     div.innerText = user.name +' '+ user.age +' '+ user.status +' '+ user.address;
//         document.body.appendChild(div);
// }

/*21- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
розділивши всі властивості по своїм блокам (div>div*4)  */
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// },
//     {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }]
//
//
// for (let user of users) {
//     let k = JSON.stringify(user);
//     let blockObj=document.createElement('div');
//     blockObj.innerText=k;
//     document.body.appendChild(blockObj);
// }
// for (us of users){
//     let k = JSON.stringify(user);
//     let blockObj=document.createElement('div');
//     blockObj.innerText=k;
//     document.body.appendChild(blockObj);
// }

    // let div = document.createElement("div")
    //     document.body.appendChild(div);

//      for (const el of user) {
//         let div1 = document.createElement("div");
//          div1.innerText = el.name;
//          document.body.appendChild(div1);
//         let div2 = document.createElement("div");
//          div2.innerText = el.age;
//          document.body.appendChild(div2);
//         let div3 = document.createElement("div");
//          div3.innerText = el.status;
//          document.body.appendChild(div3);
//         let div4 = document.createElement("div");
//         div4.innerText = el.address;
//         document.body.appendChild(div4);
//
// }
// }

/*22- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості*/


// 23- Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//
//
//
//
//
// 24- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// 25- змінити цей текст використовуючи селектори id, class,  tag
// 26- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// 27- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// 28- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// 29- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// 30- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками
// всередені.n та m отримати з prompt
//
// 31--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
// У файлі прописати наступні доступи та дії
// 32- знайти всі елементі, які мають class
// 33- знайти всі параграфи ,та змінити текст на hello oktenweb!
//   34  - знайти всі div та змінити ім колір на червоний

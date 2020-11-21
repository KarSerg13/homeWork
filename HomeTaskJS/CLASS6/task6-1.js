// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================


// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

/*1-Відфільтрувати масив за наступними крітеріями :*/
/* - двигун більше 3х літрів*/
// let a= cars.filter(car=>( car.volume > 3))
// console.log(a)

/*- двигун = 2л*/
// let b= cars.filter(car=>car.volume == 2)
// console.log(b)

/*- виробник мерс */
// let b= cars.filter(car=>car.producer ==='mercedes')
// console.log(b)

/* - двигун більше 3х літрів + виробник мерседес*/
// let b= cars.filter(car=> {car.producer ==='mercedes'&& car.volume>3 })
// console.log(b)

/* - двигун більше 3х літрів + виробник субару */
// let b= cars.filter(car=>{ car.producer ==='subaru'&& car.volume>3})
// console.log(b)

/*- сили більше ніж 300 */
// let b= cars.filter(car=>{car.power>300})
// console.log(b)

/* - сили більше ніж 300 + виробник субару*/
// let b= cars.filter(car=>{car.power>300 && car.producer==='subaru'})
// console.log(b)

/*- мотор серіі ej */
// let b= cars.filter(car=>car.engine.startsWith('ej'))
// console.log(b)

/* - сили більше ніж 300 + виробник субару + мотор серіі ej */
// let b= cars.filter(car => {car.power>300 && car.producer === 'subaru' && car.engine.startsWith('ej')})
// console.log(b)

/* - двигун меньше 3х літрів + виробник мерседес */
// let b= cars.filter(car => {car.volume< 3 && car.producer === 'mercedes'})
// console.log(b)

/* - двигун більше 2л + сили більше 250 */
// let b= cars.filter(car => {car.volume> 2 && car.power > 250})
// console.log(b)

/* - сили більше 250  + виробник бмв */
// let b= cars.filter(car => {car.power> 250 && car.producer === 'bmw'})
// console.log(b)



/*-2- взять слдующий массив */
/* let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}]; */

// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

/* -- отсортировать его по id пользователей */
// let a = usersWithAddress.sort((userA, userB)=> {
//     if  (userA.id>userB.id){
//         return -1;
//
// }}
// );
// console.log(a);

/* -- отсортировать его по id пользователей в обратном опрядке */
// то же что и в предидущем

/* -- отсортировать его по возрасту пользователей */
// let a = usersWithAddress.sort((userA, userB)=> {
//     if  (userA.age>userB.age){
//         return -1;
// }}
// );
// console.log(a);

/* -- отсортировать его по возрасту пользователей в обратном порядке */
// let a = usersWithAddress.sort((userA, userB)=> {
//     if  (userA.age<userB.age){
//         return -1;
// }}
// );
// console.log(a);

/* -- отсортировать его по имени пользователей */
// let a = usersWithAddress.sort((userA, userB)=> {
//     if  (userA.name<userB.name){
//         return -1;
// }}
// );
// console.log(a);

/*-- отсортировать его по имени пользователей в обратном порядке */
// let a = usersWithAddress.sort((userA, userB)=> {
//     if  (userA.name>userB.name){
//         return -1;
// }}
// );
// console.log(a);

/*-- отсортировать его по названию улицы  в алфавитном порядке */
// let a = usersWithAddress.sort((userA, userB)=> {
//     if  (userA.address.street>userB.address.street){
//         return -1;
// }}
// );
// console.log(a);
/*-- отсортировать его по номеру дома по возрастанию */
// let a = usersWithAddress.sort((userA, userB)=> {
//     if  (userA.address.number>userB.address.number){
//         return -1;
//     }}
// );
// console.log(a);

/* -- отфильтровать (оставить) тех кто младше 30 */
// let b = usersWithAddress.filter((user )=> {
//     if (user.age<30){return user}
// })
// console.log(b);

/* -- отфильтровать (оставить) тех у кого отрицательный статус */
// let c = usersWithAddress.filter((user )=> {
//     if (!user.status){return user}
// })
// console.log(c);

/* -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет */
// let a = usersWithAddress.filter((user )=> {
//     if (!user.status && user.age<30 ){return user}
// })
// console.log(a);

/* -- отфильтровать (оставить) тех у кого номер дома четный */
// let a = usersWithAddress.filter((user )=> {
//     if (user.address.number % 2== 0 ){return user}
// })
// console.log(a);





// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================


/*1 Створити обєкт автомобіля з полями:
    Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
    Власник автомобіля теж має бути обєкт, у якого є поля
Імя, вік, стаж водіння.
    Створити не менше 7 та не більше 20 машинок.*/

// let cars  = [
//     {producer:"subaru",power: 100, year: 2010, price:111,ownwr:{ name:'Roman' , age:25 , expirience: 2}},
//     {producer:"subaru",power: 400,year: 2007, price:222,ownwr:{ name: 'Angelika', age: 20, expirience: 1}},
//     {producer:"subaru",power: 250,year: 2011, price:333,ownwr:{ name: 'Anton', age:26, expirience: 5}},
//     {producer:"subaru",power: 300,year: 1998, price:999,ownwr:{ name: 'Julia', age: 13, expirience: 0}},
//     {producer:"subaru",power: 140,year: 2014, price: 555,ownwr:{ name: 'Serhii', age: 22, expirience: 1}},
//     {producer:"subaru",power: 200,year: 2014, price: 7777,ownwr:{ name: 'Anna', age:20 , expirience: 5}},
//     {producer:"bmw",power: 165,year: 2013, price: 112325,ownwr:{ name:'Yriy' , age:28 , expirience: 9}},
//     {producer:"bmw",power: 120,year: 2010, price:5555,ownwr:{ name: 'Nataly', age:36 , expirience: 6}},
//     {producer:"bmw",power: 120,year: 2009, price:323232,ownwr:{ name: 'Kolya', age:23 , expirience: 7}},
//     {producer:"bmw",power: 350,year: 2012, price:9898,ownwr:{ name: 'Karina', age: 37, expirience: 10}},
//     {producer:"mercedes",power: 180,year: 1990, price:6545,ownwr:{ name: 'Andrii', age:45 , expirience:25 }},
//     {producer:"mercedes",power: 180,year: 2017, price: 852,ownwr:{ name:'Irka' , age: 56, expirience: 5}},
//     {producer:"mercedes",power: 400,year: 2017, price:100,ownwr:{ name: 'Ivan', age: 19, expirience: 1}}
//     ];

/*  2  Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності) */
// let repared = cars.map((car, index)=>{if(!car[index]%2){car.power=car.power+(car.power*0.1)}
// return car});
// console.log(repared);


/* 3 На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій). */
// let repared = cars.map((car, index)=>{
//     if(!car[index]%2){
//         //ремонт для половины ( через одну)//
//         car.power=car.power+(car.power*0.1);
//         // новые одители на отремонтированые машины//
//         car.ownwr.name += 'sssss';
//         car.ownwr.age+=2;
//         car.ownwr.expirience +=2;
//         ////////////////////////////////////////
// }
//     return car});
// console.log(repared);


/* 4 Для початку вкладіть всі наші створені автомобілі в масив cars. */
// let cars  = [
//     {producer:"subaru",power: 100, year: 2010, price:111,ownwr:{ name:'Roman' , age:25 , expirience: 2}},
//     {producer:"subaru",power: 400,year: 2007, price:222,ownwr:{ name: 'Angelika', age: 20, expirience: 1}},
//     {producer:"subaru",power: 250,year: 2011, price:333,ownwr:{ name: 'Anton', age:26, expirience: 4}},
//     {producer:"subaru",power: 300,year: 1998, price:999,ownwr:{ name: 'Julia', age: 13, expirience: 0}},
//     {producer:"subaru",power: 140,year: 2014, price: 555,ownwr:{ name: 'Serhii', age: 22, expirience: 1}},
//     {producer:"subaru",power: 200,year: 2014, price: 7777,ownwr:{ name: 'Anna', age:20 , expirience: 5}},
//     {producer:"bmw",power: 165,year: 2013, price: 112325,ownwr:{ name:'Yriy' , age:28 , expirience: 9}},
//     {producer:"bmw",power: 120,year: 2010, price:5555,ownwr:{ name: 'Nataly', age:36 , expirience: 6}},
//     {producer:"bmw",power: 120,year: 2009, price:323232,ownwr:{ name: 'Kolya', age:23 , expirience: 7}},
//     {producer:"bmw",power: 350,year: 2012, price:9898,ownwr:{ name: 'Karina', age: 37, expirience: 10}},
//     {producer:"mercedes",power: 180,year: 1990, price:6545,ownwr:{ name: 'Andrii', age:45 , expirience:25 }},
//     {producer:"mercedes",power: 180,year: 2017, price: 852,ownwr:{ name:'Irka' , age: 56, expirience: 5}},
//     {producer:"mercedes",power: 400,year: 2017, price:100,ownwr:{ name: 'Ivan', age: 19, expirience: 1}}
// ];
//
// /*     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5% */
// cars.map((car, index)=>{
//     if(!car[index]%2){
//         //ремонт для половины ( через одну)//
//         car.power=car.power+(car.power*0.1);
//         // увеличить цену для отремонтированых авто на 5%//
//         car.price += (car.price*1.05);
//         // новые одители на отремонтированые машины//
// }
// return car});
// // console.log(cars);
//
// /*  Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік. */
//
// cars.map(driver=> {
//     if (driver.ownwr.expirience<5 && driver.ownwr.age>=25){
//         console.log('учиться, учиться, учиться');
//         driver.ownwr.expirience+=1;
//     }
//     return driver;
// } )
// console.log(cars)
// /*    Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі */
// let acc=0
// for (const car of cars) {
//    acc +=car.price;
// }
// console.log(`amount price is ${acc}`)




/* 5- Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
 Пример:
  Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
 1. Key = 1
 Answer: MinIndex = 0, MaxIndex = 0.
 2. Key = 4
 Answer: MinIndex = 3, MaxIndex = 6. */


// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// // Необходимо вернуть наименьший и наибольший индекс заданного элемента
//
// function firstLast(element, array){
//     let minIndex = null;
//     let maxIndex = null;
// debugger
//         for (let i = 0; i < array.length; i++) {
//          if(array[i]===element){
//                if(!minIndex)
//                 minIndex = i;     ////непонял как тут остаётся 3-ка? первое "вхождение "на третьем элементе- если minIndex не "0" то minIndex= индексу элемента который обрабатывается...
//                 maxIndex=i;       ///оно работает))) только я непонял как. и во второй конструкции  if( ){} - нет скобок{}
//          }
//         }
//
//     if (minIndex!== null){
//         console.log(`minIndex = ${minIndex},  maxIndex = ${maxIndex}`)
//     }
//     else{
//         console.log(-1)}
// }
// firstLast(4,arr)
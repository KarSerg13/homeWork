/*- створити функцію яка виводить масив*/
// let names=['Kolya', 'Irina', 'Alina', 'Oleg' , 'Roman'];
// function printArr(arr) {
//      console.log(arr);
//    }
// printArr(names)

/*- створити функцію яка заповнює масив рандомними числами та виводить його.
    Для виведення використати попвередню функцію.*/
// let names=[];
// function printArr(arr) {
//     for (let i = 0; i < 50; i++) {
//         arr[i]= Math.round(Math.random()*(100-0)+0);
//     }
//      console.log(arr);
//    }
// printArr(names)

/*- створити функцію яка приймає три числа та виводить та повертає найменьше.*/
// let a= prompt('enter FIRST number');
// let b= prompt('enter SECOND number');
// let c= prompt('enter THIRD number');
//
// function compareMin(x, y, z) {
//      let temp;
//     if (x<y){
//         temp=x
//     }else {
//         temp=y
//     }
//     if ( temp> z){
//         console.log(z)
//     }else {
//         console.log(temp)
//     }
// }
// compareMin(a,b,c)

/*- створити функцію яка приймає три числа та виводить та повертає найбільше.*/
// let a= prompt('enter FIRST number');
// let b= prompt('enter SECOND number');
// let c= prompt('enter THIRD number');
//
// function compareMin(x, y, z) {
//     let temp;
//     if (x>y){
//         temp=x
//     }else {
//         temp=y
//     }
//     if ( temp< z){
//         console.log(z)
//     }else {
//         console.log(temp)
//     }
// }
// compareMin(a,b,c)


/*- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше*/
// function compareMin() {
//     let tempMin=arguments[0];
//     let tempMax=tempMin;
//     {
//         for (let i = 1; i < arguments.length; ++i)
//             if (arguments[i] > tempMax)
//                 tempMax = arguments[i];
//             else if (arguments[i] < tempMin) tempMin = arguments[i];
//     }
// console.log(arguments)
// console.log(tempMax)
// console.log(tempMin)
// return tempMin
// }
// compareMin(2,5425,55855,5545,544,662,3,7)


/*- створити функцію яка виводить масив*/
// let names=[2,5425,55855,5545,544,662,3,7];
// function printArr(arr) {
//     printArr(arr)
// }
// printArr(names)

/*- створити функцію яка повертає найбільше число з масиву*/
// function compareMin() {
//     let tempMin=arguments[0];
//     let tempMax=tempMin;
//         for (let i = 1; i < arguments.length; ++i){
//             if (arguments[i] > tempMax)
//                 tempMax = arguments[i];
//             else if (arguments[i] < tempMin) tempMin = arguments[i];
//     }
//     console.log(tempMax)
// return tempMax;
// }
// compareMin(2,5425,55855,5545,544,662,3,7)

/*- створити функцію яка повертає найменьше число з масиву*/
// function compareMin() {
//     let tempMin=arguments[0];
//     let tempMax=tempMin;
//
//         for (let i = 1; i < arguments.length; ++i){
//             if (arguments[i] > tempMax)
//                 tempMax = arguments[i];
//             else if (arguments[i] < tempMin) tempMin = arguments[i];
//     }
//     console.log(tempMin)
// return tempMin;
// }
// compareMin(2,5425,55855,5545,544,662,3,7)

/*- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.*/
// function summArr() {
//     let summ = arguments[0];
//     for (let i = 1; i < arguments.length; ++i) {
//         summ = summ + arguments[i];
//     }
//         console.log(summ)
//         return summ;
// }
// summArr(2,5,6,8,12);

/*- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/
// function avarage() {
//     let k = 0;
//     let av;
//     let summ = 0;
//         for (let i = 0; i < arguments.length; ++i){
//             summ = summ + arguments[i];
//         k++;
//     }
//     console.log(k);
//     av=summ/k;
//         console.log(av);
//         return av;
//     }
// avarage(1,2,3,4,5);

/*- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві*/
// function countArrElements(arr) {
//     console.log(arr.length);
//     }
//   countArrElements([1,'folse',3,'Kolya',5]);

/*- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


/*- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.*/
   /* Приклад:     [1,2,3,4] + [2,3,4,5] результат = [3,5,7,9]*/
// function summArrElementBySameIndex(arr1, arr2) {
//     let summArr=[];
//         for (let i=0; i<arr1.length; i++){
//             for (let i=0; i<arr2.length; i++) {
//                 summArr[i] = arr1[i] + arr2[i];
//             }
//     }
//         console.log(summArr);
//     return;
// }
// let x=[3,2,5,51,5,4]
// let y=[3,2,5,51,5,4]
// summArrElementBySameIndex(x, y)

/*- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"*/
// let arr=[5,12,true, null,38];
// function strange(arr, number) {
//      let temp=arr[number]
//             arr[number]=arr[number+1];
//                 arr[number+1]= temp;
//         console.log(arr)
// }
// strange(arr, 2)

/*- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
    Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100         ///что значит?? нужно ограничить дляну массива? как получать/передавать массив?///
Приклад
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0]       */

// function nullToEnd(array) {
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === 0) {
//         array.push(array.splice(i, 1)[0])
//     }
// }
// console.log(array);
// }
// let arr=[1,0,6,0,3];
// nullToEnd(arr)


/*Створити функцію яка :
- Додає в боді блок з текстом "Hello owu"*/
// function addElAndText(typeEl) {
// // for ( const user of users){}
//     let el = document.createElement("typeEl");
//    el.innerText = 'Hello owu';
//         document.body.appendChild(el);
// }
// addElAndText('h1','asdfghjkkkkllllllllllllllllllll' )

/*- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи*/
// function addElAndText(typeEl, text) {
// // for ( const user of users){}
//     let el = document.createElement("typeEl");
//    el.innerText = text;
//         document.body.appendChild(el);
//
// }
// addElAndText('h1','asdfghjkkkkllllllllllllllllllll' )

/*- приймає масив автомобілів (можна взяти з попередніх дз ),
та  індентифікатор елемнту в який потрібно додати список цих автомобілів.*/
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// let cars = [
//     {model: 'MB', Year: 2020, power: 200, color: 'green', driver:{ name: 'q', age: 20, sex: 'male', experience: 2}},
//     {model: 'B', Year: 2022, power: 300, color: 'red' , driver:{ name: 'w', age: 21, sex: 'female', experience: 3}},
//     {model: 'M', Year: 2023, power: 400, color: 'blue' , driver:{ name: 'e', age: 22, sex: 'male', experience: 4}},
//     {model: 'AM', Year: 2025, power: 500, color: 'ivory' , driver:{ name: 'r', age: 23, sex: 'female', experience: 5}},
//     {model: 'f', Year: 2028, power: 600, color: 'yellow' , driver:{ name: 't', age: 24, sex: 'male', experience: 6}},
// ]
//
//
// // function arrAdd(arr, id){
// // document.body.appendChild(divCar);
// // divCar.id='58'
// for (let el of cars){
//     let divCar = document.createElement("div",);
//     divCar.innerText = el.model +'     '+ el.Year +'     '+ el.power +'     '+ el.color+'     '+ el.driver;
//     document.body.appendChild(divCar);
//     console.log(el)
// }



/*Для кожного автомобіля створити свій блок, та додати його в елемент,
    індентифікатор якого ви отримали. Всі властивості авто в обному блоці*/
// let cars2 = [
//     {model: 'MB', Year: 2020, power: 200, color: 'green', driver:{ name: 'q', age: 20, sex: 'male', experience: 2}},
//     {model: 'B', Year: 2022, power: 300, color: 'red' , driver:{ name: 'w', age: 21, sex: 'female', experience: 3}},
//     {model: 'M', Year: 2023, power: 400, color: 'blue' , driver:{ name: 'e', age: 22, sex: 'male', experience: 4}},
//     {model: 'AM', Year: 2025, power: 500, color: 'ivory' , driver:{ name: 'r', age: 23, sex: 'female', experience: 5}},
//     {model: 'f', Year: 2028, power: 600, color: 'yellow' , driver:{ name: 't', age: 24, sex: 'male', experience: 6}},
// ]

/*- приймає масив автомобілів (можна взяти з попередніх дз ),
та  індентифікатор елемнту в який потрібно додати список цих автомобілів.*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.*/

/*Для кожної властивості створити всередені блока автомоблія свій блок*/

/*(на основі минулого ДЗ)
**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
та повертає масив цих з'єднаних об'єктів.
Приклад масивів:
            let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
            let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
Частковий приклад реультату:  */



/* ***- беремо завдання з правилами з укроку №3 :
Та робимо це функцією.При цьому правила отримувати через аргумент.
"Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html*/

			// let rules = [
			// 	{
			// 		title: 'Первое правило Бойцовского клуба.',
			// 		body: 'Никому не рассказывать о Бойцовском клубе.'
			// 	},
			// 	{
			// 		title: 'Второе правило Бойцовского клуба.',
			// 		body: 'Никогда никому не рассказывать о Бойцовском клубе.'
			// 	},
			// 	{
			// 		title: 'Третье правило Бойцовского клуба.',
			// 		body: 'В схватке участвуют только двое.'
			// 	},
			// 	{
			// 		title: 'Четвертое правило Бойцовского клуба.',
			// 		body: 'Не более одного поединка за один раз.'
			// 	},
			// 	{
			// 		title: 'Пятое правило Бойцовского клуба.',
			// 		body: 'Бойцы сражаются без обуви и голые по пояс.'
			// 	},
			// 	{
			// 		title: 'Шестое правило Бойцовского клуба.',
			// 		body: 'Поединок продолжается столько, сколько потребуется.'
			// 	},
			// 	{
			// 		title: 'Седьмое правило Бойцовского клуба.',
			// 		body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
			// 	},
			// 	{
			// 		title: 'Восьмое и последнее правило Бойцовского клуба.',
			// 		body: 'Новичок обязан принять бой.'
			// 	},
            //
			// ];
/*    1-  Створити функцію конструктор для об'єкту який описує теги
Властивості
-назва тегу
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru

Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select
Приклад результату
{
    titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    attrs: [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {/!*some props and values*!/},
    {/!*...*!/},
    {/!*...*!/},
]
}*/

//--------не додумал----------------------------------------------------------//

// function tagDiscription(titleOfTag, action,attrs) {
// this.titleOfTag = titleOfTag;
// this.action = action;
// this.attrs = attrs;
// }
//     let titleOfTag = 'a';
//     let action ='Тег < a > предназначен для создания ссылок.';
//     let attrs= [
//         {name:'Устанавливает имя якоря внутри документа.'},
//         {rel:'Отношения между ссылаемым и текущим документами.'}
//     ];
//
// let a = new tagDiscription(titleOfTag,action, attrs )
// console.log(a)
//
// let tagsArr = [ {
//     titleOfTag:'a',
//     action:'Тег < a > предназначен для создания ссылок.',
//     attrs:[
//         {name:'Устанавливает имя якоря внутри документа.'},
//         {rel:'Отношения между ссылаемым и текущим документами.'}
//     ]
// },
// // console.log(a);
//     {
//     titleOfTag:'div',
//     action:'Элемент < div > является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//     attrs:[
//     {align:'Задает выравнивание содержимого тега'},
//     {title: 'Добавляет всплывающую подсказку к содержимому'}
// ]
// },
// // console.log(div);
//
// {
//     titleOfTag:'h1',
//     action:'тег < h1 > представляет собой наиболее важный заголовок первого уровня,',
//         attrs: [ {align: 'Определяет выравнивание заголовка.'},
//             { hidden:'Скрывает содержимое элемента от просмотра.'}
//         ]
// },
// // console.log(h1);
//
// {
//         titleOfTag: 'span',
//         action: 'Тег < span > предназначен для определения строчных элементов документа.',
//         attrs: [
//             {accesskey: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
//             {contextmenu: 'Устанавливает контекстное меню для элемента.'}
//         ]
// },
// // console.log(span);
//
// {
//     titleOfTag:'input',
//     action: 'Главнім образом тег < input > предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.',
//     attrs: [
//         {accept: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {alt: 'Альтернативный текст для кнопки с изображением.'}
//     ]
// },
// // console.log(input);
//
// {
//         titleOfTag: 'form',
//         action: 'Тег < form > устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
//         attrs: [
//             {enctype: 'Способ кодирования данных формы.'},
//             {method: 'Метод протокола HTTP.'}
//         ]
// },
// // console.log(form);
//
// {
//         titleOfTag: 'option',
//         action: 'Тег < option > определяет отдельные пункты списка, создаваемого с помощью контейнера < select >',
//         attrs: [
//             {disabled: 'Заблокировать для доступа элемент списка.'},
//             {label: 'Указание метки пункта списка.'}
//         ]
// },
// // console.log(option);
//
//     {
// titleOfTag:'select',
// action:'Тег < select > позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором,',
//     attrs: [
//         {accesskey:'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//         {autofocus:'Устанавливает, что список получает фокус после загрузки страницы.'}
//     ]
// }
// ]
//------------------------------------------------------------------//


/*==============================================
   2 -  Створити класс  для об'єкту який описує теги
Властивості
-назва тегу
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru

Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select
Приклад результату
{
    titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    attrs: [
    {titleOfAttr: 'accesskey', actionOfAttr: actionOfAttr:'Переход к области с помощью комбинации клавиш'},
    {/!*some props and values*!/},
    {/!*...*!/},
    {/!*...*!/},
]
}
==============================================*/
//----------------- переписал---------------------//

// class tagDiscription {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
//     let titleOfTag = 'a';
//     let action ='Тег < a > предназначен для создания ссылок.';
//     let attrs= [
//         {natitleOfAttr: 'name', actionOfAttr:'Устанавливает имя якоря внутри документа.'},
//         {natitleOfAttr:'rel',actionOfAttr:'Отношения между ссылаемым и текущим документами.'}
//     ];
// let a = new tagDiscription(titleOfTag,action, attrs )
// console.log(a)


/*==============================================
    3- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
==============================================*/

//----------------- переписал---------------------//

// let car ={
//    model : 'jjjjj',
//    brand : 'vv',
//    year : 2020,
//    maxVelosity : 100 ,
//    engineVolume : 4 ,
//     driver : 'no',
//     drive : function (){
//        console.log(`їдемо зі швидкістю ${this.maxVelosity} км на годину`)
//     },
//     info : function (){
//        console.log(
//            `model : ${this.model },
//    brand : ${this.brand },
//    year : ${ this.year},
//    maxVelosity : ${this.maxVelosity },
//    engineVolume : ${ this.engineVolume},
//    driver : ${ this.driver}`
//        )
//     },
//     increaseMaxSpeed : function (newSpeed){
//        this.maxVelosity+= newSpeed
//     },
//     changeYear : function (newValue){
//        this.year= newValue
//     },
//     addDriver : function (human){
//        this.driver = human
//     }
// }
// let human = {name : 'smbdy', age: 150}
//
// car.info()
// car.drive()
// car.increaseMaxSpeed(300)
// car.drive()
// car.changeYear(2050)
// car.info()
// car.addDriver(human.name)
// car.info()


/*==============================================
   4- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
==============================================*/

//----------------- переписал-вдумчиво-------------------//

// function Car(model, brand, year, maxVel, engineVolume) {
//     this.model = model || 'jjjjj';
//     this.brand = brand || 'vv';
//     this.year = year || 2020;
//     this.maxVel = maxVel || 100;
//     this.engineVolume = engineVolume || 5;
//     // this.driver = driver || 'no';
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxVel} км на годину`)
//     };
//     this.info = function () {
//         if (this.driver) {
//             console.log(
//                 `model : ${this.model},
//                  brand : ${this.brand},
//                  year : ${this.year},
//                  maxVelosity : ${this.maxVel},
//                  engineVolume : ${this.engineVolume},
//                  driver : ${this.driver.name}`
//             );
//         } else {
//             console.log(
//                 `model : ${this.model},
//                  brand : ${this.brand},
//                  year : ${this.year},
//                  maxVelosity : ${this.maxVel},
//                  engineVolume : ${this.engineVolume}`
//             );
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxVel += newSpeed
//     };
//
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     };
//
//     this.addDriver = function (human) {
//         this.driver = human
//     };
// }
//
// let car = new Car();
// car.changeYear(2050);
// car.increaseMaxSpeed(300);
// let human = {name: 'smbdy', age: 150};
// car.addDriver(human.name);
// car.info();
// car.drive();

/*==============================================
 5- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
==============================================*/

//----------------- переписал---------------------//

// class Car{
//     constructor(model, brand, year, maxVel, engineVolume) {
//         this.model = model || 'jjjjj';
//         this.brand = brand || 'vv';
//         this.year = year || 2020;
//         this.maxVel = maxVel || 100;
//         this.engineVolume = engineVolume || 5;
//     }
//     // this.driver = driver || 'no';
//
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxVel} км на годину`)
//     };
//     info() {
//         if (this.driver) {
//             console.log(
//                 `model : ${this.model},
//                  brand : ${this.brand},
//                  year : ${this.year},
//                  maxVelosity : ${this.maxVel},
//                  engineVolume : ${this.engineVolume},
//                  driver : ${this.driver.name}`
//             );
//         } else {
//             console.log(
//                 `model : ${this.model},
//                  brand : ${this.brand},
//                  year : ${this.year},
//                  maxVelosity : ${this.maxVel},
//                  engineVolume : ${this.engineVolume}`
//             );
//         }
//     };
//   increaseMaxSpeed (newSpeed) {
//         this.maxVel += newSpeed
//     };
//
//    changeYear (newValue) {
//         this.year = newValue
//     };
//
//     addDriver (human) {
//         this.driver = human
//     };
// }
//
// let car = new Car();
// car.changeYear(2050);
// car.increaseMaxSpeed(300);
// let human = {name: 'smbdy', age: 150};
// car.addDriver(human.name);
// car.info();
// car.drive();


/*==============================================
 6-створити класс попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
==============================================*/

//----------------- переписал--осознанно-------------------//

// class Human {
//     constructor(name, age) {
//         this.name = name ||  'no name';
//         this.age = age || 'no age';
//     }
// }
//
// class Sinderella extends Human{
//     constructor(name, age, footSize){
// super(name,age);
// this.footSize=footSize ||'no footSize';
//     }
//     }
//
// class Prince extends Human{
//     constructor(name, age, shue){
//         super(name,age);
//         this.shue=shue ||'no size';
//     }
//
// findPrinces (array){
//     let theOne = null;
//     for (let item of array) {
//         if (item.footSize === this.shue) {
//             theOne= item;
//         }
//     }
//     if (theOne) {
//         console.log('name  ' + theOne.name)
//     } else {
//         console.log(' not find')
//     }
// }
// }
//
// let Sinderella1 = new Sinderella('Alice',16,56)
// let Sinderella2 = new Sinderella('Marry', 25, 35);
// let Sinderella3 = new Sinderella('Nicol', 21, 46);
// let Sinderella4 = new Sinderella('Kristin', 30, 36);
// let Sinderella5 = new Sinderella('Ann ', 28, 26);
// let Sinderella6 = new Sinderella('Ira', 31, 48);
// let Sinderella7 = new Sinderella('Lesiya', 32, 34);
// let Sinderella8 = new Sinderella('Ivanka', 35, 20);
// let Sinderella9 = new Sinderella('Nataly', 19, 34);
// let Sinderella10 = new Sinderella('Jull', 18, 32);
// let arrSinderells = [Sinderella1,Sinderella2,Sinderella3,Sinderella4,Sinderella5,Sinderella6,Sinderella7,Sinderella8,Sinderella9,Sinderella10]
//
// let Princ= new Prince('Roman',19,34)
//
// Princ.findPrinces(arrSinderells)
/*==============================================
 7-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
==============================================*/

//----------------- переписал---(интересно про find)------------------//

// function Sinderella (name, age, footSize){
//     this.name= name ||'no name';
//     this.age=age || 'no age';
//     this.footSize=footSize ||'no footSize';
//     }
//
// function Prince (name, age, shue){
//     this.name= name ||'no name';
//     this.age=age || 'no age';
//     this.shue=shue ||'no shue';
//
// this.findPrinces = function (array){
//     let theOne = null;
//     // for (let item of array) {
//     //     if (item.footSize === this.shue) {
//     //         theOne= item;
//     //     }
//     // }
//     theOne = array.find(item=>item.footSize ===this.shue)
//     // if (theOne) {
//     //     console.log('name  ' + theOne.name)
//     // } else {
//     //     console.log(' not find')
//     // }
//     theOne? console.log(`her name is ${theOne.name}`):console.log('not find')
// }
// }
//
// let Sinderella1 = new Sinderella('Alice',16,56)
// let Sinderella2 = new Sinderella('Marry', 25, 35);
// let Sinderella3 = new Sinderella('Nicol', 21, 46);
// let Sinderella4 = new Sinderella('Kristin', 30, 36);
// let Sinderella5 = new Sinderella('Ann ', 28, 26);
// let Sinderella6 = new Sinderella('Ira', 31, 48);
// let Sinderella7 = new Sinderella('Lesiya', 32, 34);
// let Sinderella8 = new Sinderella('Ivanka', 35, 20);
// let Sinderella9 = new Sinderella('Nataly', 19, 34);
// let Sinderella10 = new Sinderella('Jull', 18, 32);
// let arrSinderells = [Sinderella1,Sinderella2,Sinderella3,Sinderella4,Sinderella5,Sinderella6,Sinderella7,Sinderella8,Sinderella9,Sinderella10]
//
// let Princ= new Prince('Roman',19,34)
//
// Princ.findPrinces(arrSinderells)
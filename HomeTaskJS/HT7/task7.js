/* 1- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
чтобы при клике на кнопку исчезал элемент с id="text". */

// const btn = document.getElementById('BTN');
// const text = document.getElementById('text');
//
// btn.onclick = event => {
//     text.hidden
//     ? text.hidden =false
//     : text.hidden = true
// }

/* 2- Создайте кнопку, при клике на которую, она будет скрывать сама себя.*/
// const btn = document.getElementById('BTN');
// btn.onclick = event => {btn.style.display = 'none'}

/* 3 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
При натисканні на кнопку зчитати інформацію з інпуту
та перевірити вік чи меньше він ніж 18, та повідомити про це користувача */
// const btnConfirm = document.getElementById('confirmBtn');
// btnConfirm.onclick = event => {
//     const inputAge = document.getElementsByName('inputAge');
//     const val = inputAge.value;
// if (val <18 && val>0){
//     alert('you are so yang')
// } if (val<=0 || val >110){alert('input again')}
// alert('ok')
// }

/* 4 - Создайте меню, которое раскрывается/сворачивается при клике */
// const a1 = document.getElementById('a1');
// const  subMenu = document.getElementById('subMenu');
// let flag = false;
// a1.onclick= event => {
//     if (flag) {
//         subMenu.style.display = 'block';
//         flag = false;
//     }else{
//         subMenu.style.display='none';
//         flag = true;
//     }
// }

/* 5 - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    Вывести список комментариев в документ, каждый в своем блоке.
    Добавьте каждому комментарию по кнопке для сворачивания его body.*/
// let commentArray =[
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ];
// const content =document.getElementById('content');
// commentArray.forEach(item=>{
//     const div =document.createElement('div');
//     const h2 =document.createElement('h2');
//     const p =document.createElement('p');
//     const button =document.createElement('button');
//
//     button.innerText= 'Hide'
//     h2.innerText= item.title;
//     p.innerText= item.body;
//
//    button.onclick= () =>{
//        p.hidden
//        ? p.hidden =false
//        :p.hidden =true
//    }
// div.appendChild(h2);
// div.appendChild(p);
// div.appendChild(button);
//     content.appendChild(div);
// })

/* 6- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
та виводиться на консоль інформація з цих 2х форм.
    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути. */
// const btn= document.getElementById('btn');
// const input1= document.getElementById('input1');
// const input2= document.getElementById('input2');
// const input21= document.getElementById('input21');
// const input22= document.getElementById('input22');
// btn.onclick = ev=>{
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input21.value);
//     console.log(input22.value);
// }

/* 7- Створити функцію, яка генерує таблицю.
    Перший аргумент визначає кількість строк.
    Другий параметр визначає кліькіть ячеєк в кожній строці.
    Третій параметр визначає елемент в який потрібно таблицю додати. */
//  const content = document.getElementById('content')
// function createTable(rows,columns,tag) {
//     const table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             const td = document.createElement('td');
//             td.innerHTML= i.toString()+j.toString();
//             tr.appendChild(td);
//             }
//         table.appendChild(tr);
//
//     }
//     tag.appendChild(table)
// }
// createTable(4,5,content)


/* 8 - Створити 3 инпута та кнопку.
-  Один визначає кількість рядків,
-  другий - кількість ячеєк, третій вмиіст ячеєк.
-  При натисканні кнопки, вся ця інформація зчитується і формується табличка,
з відповідним вмістом. */
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////



//(Додаткова частина для завдання)

/* 9 - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки. */
// let imgArr= [
//     {
//         id: 1,
//         img_url: ' Глазастый лемур-1.jpg'
//     },
//     {
//         id: 2,
//         img_url: ' Глазастый лемур-2.jpg'
//     },
//     {
//         id: 3,
//         img_url: ' Глазастый лемур-3.jpg'
//     },
//     {
//         id: 4,
//         img_url: ' Глазастый лемур-4.jpg'
//     },
//     {
//         id: 5,
//         img_url: ' Глазастый лемур-5.jpg'
//     },
//
// ]
// const content = document.getElementById('content');
// const  img = document.createElement('img');
// const  btn1 = document.createElement('button');
// const  btn2 = document.createElement('button');
//
// btn1.innerText = 'Left';
// btn2.innerText = 'right';
// let index = 0;
// img.width = 300 ;
// img.src = imgArr[index].img_url;
// content.appendChild(img);
// content.appendChild(btn1)
// content.appendChild(btn2);
// btn1.onclick = () => {
//     index-1<0
//     ? index = imgArr.length-1
//         : index = index-1
//     img.src = imgArr[index].img_url
// }
// btn1.onclick = () => {
//     index+1<imgArr.length-1
//         ? index = 0
//         : index = index+1
//     img.src = imgArr[index].img_url
// }

/* 10- Сворити масив не цензцрних слів.
 -   Сворити інпут текстового типу.
 -  Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
  * Перевірку робити при натисканні на кнопку */
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/* 11 - Сворити масив не цензцрних слів.
   - Сворити інпут текстового типу.
   - Потрібно перевіряти чи не містить ціле речення в собі погані слова.
   - Кинути алерт з попередженням у випадку якщо містить.
   * Перевірку робити при натисканні на кнопку */

///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/* 12 -- создать скрипт, который берет считывает на странице (rules.html) текст и
- делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
- При клике на пункт оглавления вы должны отправляться к этому пункту в тексте */
// const arrH2 = document.getElementsByTagName('h2');
// const content = document.getElementById('content');
// const wrap = document.getElementById('wrap');
// const ul = document.createElement('ul');
// for (let i = 0; i < arrH2.length; i++) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     let ancor = 'ancor'+i;
//     a.href= '#'+ancor;
//     arrH2[i].setAttribute('id',ancor);
//     a.innerHTML=arrH2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content.appendChild(ul);
// content.style.width='30%';
// wrap.style.width='70%';
// content.style.float='left'
// wrap.style.float = 'left'


/* 13 -- взять массив пользователей
/* - Создать три чекбокса.
- Каждый из них активирует фильтр для вышеуказаного массива.
- Фильтры могут работать как вместе так и по отдельности.
* 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
* 2й - оставляет старше 29 лет включительно
* 3й - оставляет тех у кого город киев
Данные выводить в документ */
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
//
// const content= document.getElementById('content');
// const userDiv = document.createElement('div');
// userDiv.className='user';
// userDiv.appendChild(renderContent(usersWithAddress));
//
// const input1=document.createElement('input');
// const input2=document.createElement('input');
// const input3=document.createElement('input');
//
// const lable1=document.createElement('label');
// const lable2=document.createElement('label');
// const lable3=document.createElement('label');
//
// const button =document.createElement('button');
//
// lable1.innerText ='статус false';
// lable2.innerText ='старше 29 лет включительно';
// lable3.innerText ='киев';
// button.innerText ='filter On';
//
// input1.type='checkbox';
// input2.type='checkbox';
// input3.type='checkbox';
//
// content.appendChild(userDiv);
//
// content.appendChild(lable1);
// content.appendChild(input1);
//
// content.appendChild(lable2);
// content.appendChild(input2);
//
// content.appendChild(lable3);
// content.appendChild(input3);
//
// content.appendChild(button);
//
// button.onclick= event =>{
//     let myArray =JSON.parse(JSON.stringify(usersWithAddress))
//     if(input1.checked) myArray=myArray.filter(value => !value.status);
//     if(input2.checked) myArray=myArray.filter(value => value.age>= 29);
//     if(input3.checked) myArray=myArray.filter(value => value.address.city==='Kyiv');
//
//     userDiv.innerHTML ='';
//     userDiv.appendChild(renderContent(myArray));
// }
//
// function renderContent(array) {
//     const main =document.createElement('div');
//     array.forEach(item => {
//         const div = document.createElement('div');
//         div.innerHTML=JSON.stringify(item);
//         main.appendChild(div);
//     })
//     return main;
// }

/* 14
*****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
Функция создает в боди 2 кнопки (назад/вперед)
при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед",
вы переходите к следующему дочернему элементу
(лежащему на одном уровне) НО если у (какого-либо)дочеренего элемента есть дети,
то нажатие "вперед" позволяет нам войти внутрь элемента
и  выводит первого ребенка. и тд.
    Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему,
    лежащему с ним на одном уровне */

/* 15*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або
якось іншим способом змінює свій стан */

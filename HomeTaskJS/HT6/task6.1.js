/*1- создать массив с 20 числами.*/
// let numbers = [2, 56 ,48 ,55, 13 ,25, 78, 1, 36, 52, 48, 960,14625,3 ,55,66,89,77,66,22]

/* 2 -- при помощи метода sort и колбека  отсортировать массив.*/
// let numbers = [2, 56 ,48 ,55, 13 ,25, 78, 1, 36, 52, 48, 960,14625,3 ,55,66,89,77,66,22]
// let sortNumbers = numbers.sort((a, b)=>{
//     return a-b;
// });                   // меняет исходный массив?
// console.log(sortNumbers);

/* 3 -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении. */
// let numbers = [2, 56 ,48 ,55, 13 ,25, 78, 1, 36, 52, 48, 960,14625,3 ,55,66,89,77,66,22]
// let sortNumbers = numbers.sort((a, b)=>{
//     return b-a;
// });
// console.log(sortNumbers);

/* 4 -- при помощи filter получить числа кратные 3 */
// let numbers = [2, 56 ,48 ,55, 13 ,25, 78, 1, 36, 52, 48, 960,14625,3 ,55,66,89,77,66,22]
// let f= numbers.filter((value)=>{
//         if (value%3==0) {
//             return value;
//         }
// })
// console.log(f)


/*5 -- при помощи filter получить числа кратные 10*/
// let numbers = [2, 56 ,48 ,55, 13 ,25, 78, 1, 36, 52, 48, 960,14625,3 ,55,66,89,77,66,22]
// let f= numbers.filter((value)=>{
//         if (value%10==0) {
//             return value;
//         }
// })
// console.log(f)


/*6-- перебрать (проитерировать) массив при помощи foreach()*/
// let numbers = [2, 56 ,48 ,55, 13 ,25, 78, 1, 36, 52, 48, 960,14625,3 ,55,66,89,77,66,22]
// numbers.forEach(value => {
//     console.log( value);
// })


/* 7-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше*/
// let numbers = [2, 56 ,48 ,55, 13 ,25, 78, 1, 36, 52, 48, 960,14625,3 ,55,66,89,77,66,22]
// let arr= numbers.map((a)=>{
//     return a*3;
// })
// console.log(arr);


/*8- создать массив со словами на 15-20 элементов.*/
// //let a= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa esse facere id incidunt itaque laborum, nihil non, numquam officiis quas repellendus sapiente soluta, sunt tempora temporibus vero. Inventore, porro."
// //let f = a.split(' ')
// //console.log( f)

// let arr = ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipisicing", "elit.", "Assumenda", "culpa",
//     "esse", "facere", "id", "incidunt", "itaque", "laborum,", "nihil", "non,", "numquam",
//     "officiis", "quas", "repellendus", "sapiente", "soluta,", "sunt", "tempora", "temporibus", "vero.", "Inventore,", "porro."]

/*9-- отсортировать его по алфавиту в восходящем порядке.*/
// let arr = ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipisicing", "elit.", "Assumenda", "culpa",
//     "esse", "facere", "id", "incidunt", "itaque", "laborum,", "nihil", "non,", "numquam",
//     "officiis", "quas", "repellendus", "sapiente", "soluta,", "sunt", "tempora", "temporibus", "vero.", "Inventore,", "porro."]
//
// let sortArr = arr.sort((a, b)=>{
//     if (a>b) {return -1}
// });                   // меняет исходный массив?
// console.log(sortArr);

/*10-- отсортировать его по алфавиту  в нисходящем порядке.*/
// let arr = ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipisicing", "elit.", "Assumenda", "culpa",
//     "esse", "facere", "id", "incidunt", "itaque", "laborum,", "nihil", "non,", "numquam",
//     "officiis", "quas", "repellendus", "sapiente", "soluta,", "sunt", "tempora", "temporibus", "vero.", "Inventore,", "porro."]
//
// let sortArr = arr.sort((a, b)=>{
//     if (a<b) {return -1}
// });                   // меняет исходный массив?
// console.log(sortArr);



// 11-- отфильтровать слова длиной менее 4х символов

/*12-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце*/
// let arr = ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipisicing", "elit.", "Assumenda", "culpa",
//     "esse", "facere", "id", "incidunt", "itaque", "laborum,", "nihil", "non,", "numquam",
//     "officiis", "quas", "repellendus", "sapiente", "soluta,", "sunt", "tempora", "temporibus", "vero.", "Inventore,", "porro."]
//
// let a = arr.map(c=>{
//     return c.concat('!')    // // или можно += '!'
// } )
// console.log(a)


/*Все робити через функції масивів (foreach, map ...тд). Дан масив :*/
/*let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];*/


/*13- відсортувати його за  віком (зростання , а потім окремо спадання)*/
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
//     ];


/* 14- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)*/
// increase//
// let sortArr = users.sort((a, b)=>{
//     if (a.name.length<b.name.length) {return -1}
// });
// console.log(sortArr);

// decrease//
// let sortArr = users.sort((a, b)=>{
//     if (a.name.length>b.name.length) {return -1}
// });
// console.log(sortArr);

/* 15- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
(По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін) */
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
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
// let newUss = users.map((el, i) =>{
//     el.id= Math.round(Math.random()*150) ;
//      return el;
// });
// console.log(newUss);


/*16- відсортувати його за індентифікатором*/
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
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
// let newUss = users.map((el, i) =>{
//     el.id= Math.round(Math.random()*150) ;
//     return el;
// });
// console.log(newUss);
// // decrease//
// let sortArr = newUss.sort((a, b)=>{
//     if (a.id>b.id) {return -1}
// });
// console.log(sortArr);

/*17-- наисать функцию калькулятора с 2мя числами и колбеком*/
// function calc2(a, b , callback){
// return callback (a,b)
// }
//
// let res = calc2(2,3, (a,b)=>{
//     return a+b;
// })
//
// console.log(res)

/*18-- наисать функцию калькулятора с 3мя числами и колбеком. */
// function calc3(a, b, c, callback){
//     return callback (a,b,c)
// }
// let res = calc3(2,3,5, (a,b,c)=>{
//     return a+b+c;
// })
// console.log(res)
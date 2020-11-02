/*1.Определите переменные str, num, flag и txt
со значениями «Привет», 123, true, «true».
При помощи оператора typeof убедитесь,
что значения переменных принадлежат типам: string, number и  boolean.*/
// let str ="hi";
// let num = 123;
// let flag =true;
// let txt = "true";
//
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

/*2. Создайте переменные a1, a2, a3, a4, a5.
    При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
    5 + 3,
    5 - 3,
    5 * 3,
    5 / 3,
    5 % 3
поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.*/
// console.log('5 + 3 =', 5+3);
// console.log('5 - 3 =', 5 - 3);
// console.log('5 * 3 =', 5*3);
// console.log('5 / 3 =', 5/3);
// console.log('5 % 3 =', 5%3);

/*3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
    5 % 3,
    3 % 5,
    5 + '3',
    '5' - 3,
    75 + 'кг'*/
// console.log('5 % 3 =', 5%3);
// console.log('3 % 5 =', 3 % 5);
// console.log('5 + "3" = ', 5+'3');
// console.log('"5" - 3 = ', '5'-3);
// console.log('75 + "kg" = ', 75 +'kg');

/*4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.*/
// let height = 23;
// let width = 10;
// let s= height*width;
// console.log(s+ 'cm2');

/*5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC)
и диаметром основания 4м (dC), результат поместите в переменную v.*/
// let heightC = 10;
// let dC = 4;
// let pi = 3.14
// let v= heightC*pi*dC;
// console.log(v+ 'm3');

/*6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
Найдите гипотенузу k по теореме Пифагора (нужно использовать
функцию Math.pow(число, степень) или оператор возведения в степень ** ).*/
// let n = 3;
// let m = 4;
// let k= Math.sqrt( Math.pow(n,2) + Math.pow(m,2));
// console.log(k);

/*7. Напишите скрипт, который выводит "Hello world",
    создавши переменную str и выводить спомощью document.write, alert и console.log*/
// let str = "Hello World";
// document.write(str);
// alert(str);
// console.log(str);


/*8. Вывести в окно браузера при
помощи метода alert() следующие
данные: Ваше ФИО, возраст, хобби
 (каждой на новой строки спомощью \n).*/
// let name = 'Ivan ';
// let ser = 'Egorov ';
// let otch = 'Stepanovich';
// let age = 20;
// let hobby ="Java";
//
// alert (name+'\n'+ ser+'\n'+ otch+'\n'+ age+'\n'+ hobby);


/*9. Создать 4 переменные с использованием ключевого
 слова let с именами str1, str2, str3, concatenation.
  Переменной str1 присвоить фразу
  ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
  Локальной переменной concatenation присвоить
  результат конкатенации 3-х строк: str1, str2, str3.
  Вывести в документ содержимое переменной
  concatenation спомощью document.write*/
// let str1 = "Кто";
// let str2 = "ты";
// let str3 = "такой ?";
// let concatenation = str1+'\n'+str2+'\n' +str3;
// document.write(concatenation);

/*10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?*/
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

/*11. Какие значения выведет в окно консоли
следующий фрагмент кода если его поместить
в console.log?*/
// console.log(parseInt("3.14"));
// console.log(parseInt("-7.875"));
// console.log(parseInt("435"));
// console.log(parseInt("Вася"));

/*12.  С помощью окна ввода, вызываемого методом
 prompt, пользователь может ввести данные, которые
 будут использоваться далее, повторите код ниже*/
// let str = prompt("Enter something", "ho-ho");
// console.log(str);

/*13. С помощью окна ввода, вызываемого методом
prompt, сделать сложение двух чисел, а вывод
результата при помощи метода alert*/
// let a= parseInt(prompt("введи число1")) ; /*?- зачем необходимо второе поле в параметрах, */
// let b= parseInt(prompt("введи число2")) ;  /*?- почему при установке 2-го параметра 2 выдаёт NaN*/
// alert(a+b);

/*14. С помощью окна ввода, вызываемого методом
prompt, пользователь последовательно выводит имя,
 фамилию и возраст, а вам необходимо вывести
  строку такого вида
Доброго вечера Иван Иванов,мои поздравления что вам32 ,
   а вывод результата при помощи метода alert*/

// let name = prompt("input name");
// let sirname = prompt("input sirname");
// let age = prompt("input age");
//
// alert(name+' '+sirname+ ", мои поздравления что вам "+age);



/*ADD Class2.Все параматры получаем с клавиатуры!!!!
Имитируем поведение пешехода на перекстке.
Если светофор зеленый - вывести "иди".
Если светофор желтый - вывести "подожди".
Если светофор красный - вывести "стой".
Если светофор в аварийном режиме вывести
"делай что хочешь"!*/

// let color = prompt("input traffic light: green, yellow, red or blinking");
// switch(color){
//     case "green":alert("иди"); break;
//     case "yellow":alert("подожди"); break;
//     case "red":alert("стой");break;
//     case "blinking":alert("делай что хочешь");break;
//     default: alert("Светофор выключен");
// }


/*ADD Class3
Все параметры получаем с клавиатуры!!!!(prompt , confirm)
Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
Улучшаем предыдущее задание.
Если светофор зеленый и машин нет - вывести "иди".
Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
Если светофор желтый и машины есть - вывести "жди".
Если светофор желтый и машин нет - вывести "все рано жди".
Если светофор красный и машин нет- вывести "стой все рано".
Если светофор красный - и машины есть вывести "стой и жди".
Если светофор в аварийном режиме вывести "делай что хочешь"! */


// let color = prompt("input traffic light: green, yellow, red ore blinking");
// let isRoadClear = confirm("is Road clear? \n OK-yes  Cancel-no");
//
// switch(color){
//     case "green":if (isRoadClear) {alert("иди")} alert("подожди пока нарушители проедут"); break;
//      case "yellow":if(isRoadClear) {alert("жди")} alert("все рано жди"); break;
//       case "red":if(isRoadClear){alert("стой все рано")} alert("стой и жди");break;
//         case "blinking":alert("делай что хочешь");break;
//     default: alert("Светофор выключен");
// }
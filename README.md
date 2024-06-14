<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ<br>
РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Безруков Никита Валерьевич</p>
<br><br><br>
<p align = "center"><br><strong>Лабораторная работа №5.«JavaScript»</strong><br>01.03.02 Прикладная математика и информатика</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<p align = "right">Научный руководитель<br>
Соболев Евгений Игоревич</p>
<br><br><br>
<p align = "center">г. Южно-Сахалинск<br>2024 г.</p>
<br><br><br><br><br><br><br><br><br><br><br><br>

<h1 align = "center">Введение</h1>
<p><b>JavaScript</b>- мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.</p>

<h1 style="text-align: center">Задачи</h1>
<ol>
  <li>Создайте переменную str и присвойте ей значение 'hdfgv'. Обращаясь к отдельным символам этой строки выведите на экран символ 'h', символ 'd', символ 'v'</li>
  <li>Напишите скрипт, который считает количество секунд в часе</li>
  <li>Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться. </li>
  <li>Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert</li>
  <li>Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления)</li>
  <li>Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result</li>
  <li>Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму</li>
  <li>Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result</li>
  <li>Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце</li>
  <li>Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'</li>
  <li>Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран</li>
  <li>Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива</li>
  <li>Яблоко стоит 1.15, апельсин стоит 2.30. Сколько они стоят вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?</li>
  <li>Какое будет выведено значение: let x = 5; alert(x++); ?</li>
  <li>Чему равно такое выражение: [ ] + false - null + true ?</li>
  <li>Что выведет этот код: let y = 1; let x = y = 2; console.log(x); ?</li>
  <li>Чему равна сумма [ ] + 1 + 2?</li>
  <li>Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений</li>
  <li>Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v</li>
  <li>Даны размер ипотечного кредита (S — 2 млн.руб), процентная ставка (p  — 10%), кол-во лет (years — 5). Найти переплату по кредиту, значение переплаты должно содержаться в переменной perepl</li>
  <li>Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true». При помощи оператора определения типа убедитесь, что переменных принадлежат типам: string, number, boolean</li>
  <li>Дано число, необходимо вернуть противоположное число</li>
  <li>Решить задачи Codewars</li>

  <h1 style="text-align: center">Решения Задач</h1>

  <h2 style="text-align: center">Файл с кнопками, выполняющими функции </h2>

  ```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab5</title>
</head>
<body>
    <button onclick="task1()">task1</button>
    <button onclick="task2()">task2</button>
    <button onclick="task3()">task3</button>
    <button onclick="task4()">task4</button>
    <button onclick="task5()">task5</button>
    <button onclick="task6()">task6</button>
    <button onclick="task7()">task7</button>
    <button onclick="task8()">task8</button>
    <button onclick="task9()">task9</button>
    <button onclick="task10()">task10</button>
    <button onclick="task11()">task11</button>
    <button onclick="task12()">task12</button>
    <button onclick="task13()">task13</button>
    <button onclick="task14()">task14</button>
    <button onclick="task15()">task15</button>
    <button onclick="task16()">task16</button>
    <button onclick="task17()">task17</button>
    <button onclick="task18()">task18</button>
    <button onclick="task19()">task19</button>
    <button onclick="task20()">task20</button>
    <button onclick="task21()">task21</button>
    <button onclick="task22()">task22</button>
    <button onclick="task23()">task23</button>
    <script src="script.js"></script>
</body>
</html>
```
  <h2 style="text-align: center">использованный файл script.js </h2>

  ```JavaScript
function task1()
{
    let str='hdfgv';
    console.log("-----task1-----");
    console.log(str[0]);
    console.log(str[1]);
    console.log(str[4]);
}

function task2()
{
    let a=60*60;
    console.log("-----task2-----");
    console.log("there are ${a} seconds in an hour");
}

function task3()
{
    var num = 1;
    num =+ 12;
    num =- 14;
    num *= 5;
    num /= 7;
    num =+ 1;
    num =- 1;
    alert(num);

}

function task4()
{
    var num = 3;
    alert(num);
}

function task5()
{
    let a=10;
    let b=2;
    console.log("-----task5-----");
    console.log(`a+b= ${a+b}`);
    console.log(`a-b= ${a-b}`);
    console.log(`a*b= ${a*b}`);
    console.log(`a/b= ${a/b}`);
}

function task6()
{
    let c=15;
    let d=2;
    var result=c+d;
    console.log("-----task6-----");
    console.log(`c+d= ${result}`);
}

function task7()
{
    let a=10, b=2,c=5;
    console.log("-----task7-----");
    console.log(`a+b+c= ${a+b+c}`);
}

function task8()
{
    let a=17, b=10;
    var c=a-b;
    var d=7;
    var result=c+d;
    console.log("-----task8-----");
    console.log(`a-b+d= ${result}`);
}

function task9()
{
    let seconds = 60;
    let minutes = 60;
    let hours= 24;
    let days = 30; 
    let secondsinhour = seconds * minutes;
    let secondsinday = secondsinhour * hours;
    let secondsinmonth = secondsinday * days;
    console.log("-----task9-----");
    console.log(`in hour = ${secondsinhour} seconds`);
    console.log(`in day = ${secondsinday} seconds`);
    console.log(`in month = ${secondsinmonth} seconds`);
}

function task10()
{
    var rn=new Date();
    let hour=rn.getHours();
    let minutes=rn.getMinutes();
    let seconds=rn.getSeconds();
    console.log("-----task10-----");
    console.log(`time right now: ${hour}:${minutes}:${seconds}`);
}

function task11()
{
    let num=14;
    let res=Math.pow(num,2);
    console.log("-----task11-----");
    console.log(`${num}^2= ${res}`);
}

function task12()
{
    var rootich=arr=>arr.filter(num=>num%2===0).reduce((sum,num)=>sum+Math.sqrt(num),0);
    var numbers=[1,2,3,4,5];
    var res=rootich(numbers);
    
    console.log("-----task12-----");
    console.log(`result: ${res}`);
}

function task13()
{
    let apple=1.15;
    let orange=2.30;
    console.log("-----task13-----");
    console.log(`result: ${apple+orange}$`);
}

function task14()
{
    let x=5;
    alert(x++);
}

function task15()
{
    let fifteen=[]+false-null+true;
    console.log("-----task15-----");
    console.log(`result: ${fifteen}`);
}

function task16()
{
    let y=1;
    let x=y=2;
    console.log("-----task16-----");
    console.log(x);
}

function task17()
{
    var sum=[]+1+2;
    console.log("-----task17-----");
    console.log(`result: ${sum}`);
}

function task18()
{
    let a6=5%3,a7=3%5,a8=5+'3',a9='5'-3,a10=75+'кг';
    console.log("-----task18-----");
    console.log(`a6= ${a6}`);
    console.log(`a7= ${a7}`);
    console.log(`a8= ${a8}`);
    console.log(`a9= ${a9}`);
    console.log(`a10= ${a10}`);
}

function task19()
{
    let height=23;
    let width=10;
    let s=height*width;
    console.log("-----task19-----");
    console.log(`if height is ${height}cm & width is ${width}cm then square = ${s}sm`);
}

function task20()
{
    let heightc=10;
    let dc=4;
    let v=Math.PI*Math.pow((dc/2),2)*heightc;
    console.log("-----task20-----");
    console.log(`if height is ${heightc}m & diameter is ${dc}m then volume = ${v}m`);
}

function task21()
{
    let s=2000000;
    let p=0.1;
    let years=5;
    var perepl=s*p*years;
    console.log("-----task21-----");
    console.log(`perpeplata is ${perepl}rubles`)
}

function task22()
{
    let str="Привет"; 
    let num = 123; 
    let flag = true; 
    let txt="true";
    console.log(`type str: ${typeof str}`);
    console.log(`type num: ${typeof num}`);
    console.log(`type flag: ${typeof flag}`);
    console.log(`type txt: ${typeof txt}`);
}

function task23()
{
    let num=5;
    console.log("-----task23----");
    console.log(`-num: ${num}`);
}
```
<h2 style="text-align: center">решение задач на CodeWars </h2>

<img src="https://github.com/qnrcrd/lab5/blob/main/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-06-14%20192002.png"></img>

<img src="https://github.com/qnrcrd/lab5/blob/main/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-06-14%20193159.png"></img>

<img src="https://github.com/qnrcrd/lab5/blob/main/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-06-14%20194056.png"></img>

<img src="https://github.com/qnrcrd/lab5/blob/main/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-06-14%20194755.png"></img>

<img src="https://github.com/qnrcrd/lab5/blob/main/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-06-14%20195450.png"></img>

<img src="https://github.com/qnrcrd/lab5/blob/main/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-06-14%20195739.png"></img>

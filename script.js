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
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");

btn1.style.color = '#00BCD5';
para1.style.display = 'block';

function fun1() {
    btn1.style.color = '#00BCD5';
    btn2.style.color = 'black';
    btn3.style.color = 'black';
    para1.style.display = 'block';
    para2.style.display = 'none';
    para3.style.display = 'none';
}
function fun2() {
    btn1.style.color = 'black';
    btn2.style.color = '#00BCD5';
    btn3.style.color = 'black';
    para1.style.display = 'none';
    para2.style.display = 'block';
    para3.style.display = 'none';
}
function fun3() {
    btn1.style.color = 'black';
    btn2.style.color = 'black';
    btn3.style.color = '#00BCD5';
    para1.style.display = 'none';
    para2.style.display = 'none';
    para3.style.display = 'block';
}
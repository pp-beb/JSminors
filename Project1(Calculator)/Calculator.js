let num1=null;
let num2=null;
let num3;
let op;
function fun9(){
document.getElementById("output").innerText=9;
if(num1===null)
{num1=9;}
else if(num2===null)
{num2=9;}
else
        alert("This calculator can only add 2(single digit) numbers.");
}
function fun8(){
    document.getElementById("output").innerText=8;
    if(num1===null)
        {num1=8;}
        else if(num2===null)
        {num2=8;}
        else
        alert("This calculator can only add 2, single digit numbers.");
    }
function fun7(){
    document.getElementById("output").innerText=7;
    if(num1===null)
        {num1=7;}
        else if(num2===null)
        {num2=7;}
        else
        alert("This calculator can only add 2, single digit numbers.");
        }
function fun6(){
    document.getElementById("output").innerText=6;
    if(num1===null)
        {num1=6;}
        else if(num2===null)
        {num2=6;}
        else
        alert("This calculator can only add 2, single digit numbers.");
            }
 function fun5(){
    document.getElementById("output").innerText=5;
    if(num1===null)
        {num1=5;}
        else if(num2===null)
        {num2=5;}
        else
        alert("This calculator can only add 2, single digit numbers.");
                }
function fun4(){
    document.getElementById("output").innerText=4;
    if(num1===null)
        {num1=4;}
        else if(num2===null)
        {num2=4;}
        else
        alert("This calculator can only add 2, single digit numbers.");
                }
function fun3(){
    document.getElementById("output").innerText=3;
    if(num1===null)
        {num1=3;}
        else if(num2===null)
        {num2=3;}
        else
        alert("This calculator can only add 2, single digit numbers.");
                }
function fun2(){
    document.getElementById("output").innerText=2;
    if(num1===null)
        {num1=2;}
        else if(num2===null)
        {num2=2;}
        else
        alert("This calculator can only add 2, single digit numbers.");
             }
function fun1(){
    document.getElementById("output").innerText=1;
    if(num1===null)
        {num1=1;}
        else if(num2===null)
        {num2=1;}
        else
        alert("This calculator can only add 2 (single digit) numbers.");
                }
function fun0(){
    document.getElementById("output").innerText=0;
    if(num1===null)
        {num1=0;}
        else if(num2===null)
        {num2=0;}
        else
        alert("This calculator can only add 2, single digit numbers.");
                }
function funDiv(){
    document.getElementById("output").innerText="/";
op="/";
                }
function funMul(){
    document.getElementById("output").innerText="*";
op="*";
                 }
function funAdd(){
    document.getElementById("output").innerText="+";   
  op="+";             }
 function funMin(){
    document.getElementById("output").innerText="-";
    op="-";
                }
function funEq()
{
    switch(op){
        case "+": 
        num3=num1+num2;
        break;

        case "-": 
        num3=num1-num2;
        break;

        case "/": 
        num3=num1/num2;
        break;

        case "*": 
        num3=num1*num2;
        break;

        default:
            alert("Some unexpected error occured. Sorry");
    }
    document.getElementById("output").innerText=num3; 
}
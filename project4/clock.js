
function currentFun(){
const current = new Date();
const hour = current.getHours();
const minute = current.getMinutes();
const second = current.getSeconds();
const day = current.getDate();
const month = current.getMonth();
const year = current.getFullYear();
hour1=addZero(hour);
second1=addZero(second);
minute1=addZero(minute);
day1=addZero(day);
month1=addZero(month);
year1=addZero(year);
document.getElementById('tophalf').innerText= `${day1} , ${month1+1} , ${year1}`;
document.getElementById('bottomhalf').innerText= `${hour1}: ${minute1}: ${second1}`;
console.log(hour1);
console.log(minute1);
console.log(second1);
console.log(day1);
console.log(month1+1);
console.log(year1);
if(month1==='05' && day1==='23'){
    document.getElementById('birthday').innerText="Happy birthday to me!!";
}
}

const intervalid = setInterval(currentFun,1000)
function addZero(x){
    if(x<=9){
        
        return ('0'+Number(x));
    }
    return(Number(x));
}
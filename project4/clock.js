
function currentFun(){
const current = new Date();
console.log(current);
document.getElementById('containerDiv').innerText= current ;
}

const intervalid = setInterval(currentFun,1000)
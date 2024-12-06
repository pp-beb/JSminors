
function submitted(){
let feet=document.getElementById('feet');
let inch=document.getElementById('inch');
let age=document.getElementById('age');
let weight=document.getElementById('weight');
let heightVal,heightVal1;
const gender=document.querySelector('input[name="gender"]:checked');
if(feet)
{feetVal=feet.value;}
else
{alert("Please enter all values appropriately!!");}
if(inch)
    {inchVal=inch.value;}
    else
    {alert("Please enter all values appropriately!!");}
    if(age)
        {ageVal=age.value;}
        else
        {alert("Please enter all values appropriately!!");}
        if(weight)
            {weightVal=weight.value;}
            else
            {alert("Please enter all values appropriately!!");}
            if(gender)
                {genderVal=gender.value;}
            
                else
                {alert("Please enter all values appropriately!!");}
    heightVal=(feetVal*12)+inchVal;
    heightVal1=heightVal*2.54;
    let BMR;
    switch (genderVal) {
    case "male" :
        BMR=10*weightVal+6.25*heightVal1-5*ageVal+5;
        break;

    case "female" :
        BMR=10*weightVal+6.25*heightVal1-5*ageVal-161;
        break;
    }

    let kcal=BMR*1.5;
    document.getElementById('output').innerText="You loose "+Math.round(kcal)+" kcal on average."
    
console.log(ageVal);
console.log(weightVal);
console.log(feetVal);
console.log(inchVal);
console.log(heightVal);
console.log(heightVal1);
}




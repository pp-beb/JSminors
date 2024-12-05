console.log("Quiz.js is loaded");
let count=0;
let subm1=0,subm2=0,subm3=0,subm4=0,subm5=0;
function submitted1() {
    console.log("submitted function called");
    let ans1=document.querySelector('input[name="temple"]:checked');
    if(ans1)
        {
    if(subm1!=0)
    {
        alert("Your answer has already been submitted");
    }
    else{
    subm1++;
    alert("Do you want to submit the answer: "+ans1.value);
    if(ans1.value==="Chandeshwori")
    {
        count++;
    }
    else
    {
        count-=0.25;
    }

}
}
else{
    alert("Enter a value");
}
}

function submitted2() {
    console.log("submitted function called");
    let ans1=document.querySelector('input[name="school"]:checked');
    if(ans1)
        {
    if(subm2!=0)
    {
        alert("Your answer has already been submitted");
    }
    else{
    subm2++;
    alert("Do you want to submit the answer: "+ans1.value);
    if(ans1.value==="Kavre")
    {
        count++;
    }
    else
    {
        count-=0.25;
    }

}
}
else{
    alert("Enter a value");
}
}

function submitted3() {
    console.log("submitted function called");
    let ans1=document.querySelector('input[name="futsal"]:checked');
    if(ans1)
        {
    if(subm3!=0)
    {
        alert("Your answer has already been submitted");
    }
    else{
    subm3++;
    alert("Do you want to submit the answer: "+ans1.value);
    if(ans1.value==="SR")
    {
        count++;
    }
    else
    {
        count-=0.25;
    }

}
}
else{
    alert("Enter a value");
}
}

function submitted4() {
    console.log("submitted function called");
    let ans1=document.querySelector('input[name="ward"]:checked');
    if(ans1)
        {
    if(subm4!=0)
    {
        alert("Your answer has already been submitted");
    }
    else{
    subm4++;
    alert("Do you want to submit the answer: "+ans1.value);
    if(ans1.value==="13")
    {
        count++;
    }
    else
    {
        count-=0.25;
    }

}
}
else{
    alert("Enter a value");
}
}

function submitted5() {
    console.log("submitted function called");
    let ans1=document.querySelector('input[name="pool"]:checked');
    if(ans1)
        {
    if(subm5!=0)
    {
        alert("Your answer has already been submitted");
    }
    else{
    subm5++;
    alert("Do you want to submit the answer: "+ans1.value);
    if(ans1.value==="Jaleshwor")
    {
        count++;
    }
    else
    {
        count-=0.25;
    }

}
}
else{
    alert("Enter a value");
}
}

function score(){
    alert("Your final score is: "+count);
}

function defaul(){
document.body.style.backgroundColor ="white";
}

function light(){
    document.body.style.backgroundColor ="aquamarine";
    }
function dark(){
    document.body.style.backgroundColor ="burlywood";
    }
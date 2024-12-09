function submitted(){
    const c1 = document.getElementById("selection1").value;
    const c2 = document.getElementById("selection2").value;
    let final;
    let finalin=document.getElementById("amount").value;
   switch (c1){
    case "NRS(Re)" :
        switch (c2){
            case "NRS(Re)":
            final=document.getElementById("amount").value;
            break;

            case "USD($)":
            final=(document.getElementById("amount").value)/132.50;
            break;

            case "Euros(£)":
            final=(document.getElementById("amount").value)/144.56;
            break;
    
        }
    break;

    case "USD($)" :
        switch (c2){
            case "NRS(Re)":
            final=(document.getElementById("amount").value)*132.50;
            break;

            case "USD($)":
            final=document.getElementById("amount").value;
            break;

            case "Euros(£)":
            final=(document.getElementById("amount").value)/0.92;
            break;
    
        }
    break;

    case "Euros(£)" :
        switch (c2){
            case "NRS(Re)":
            final=(document.getElementById("amount").value)*144.56;
            break;

            case "USD($)":
            final=(document.getElementById("amount").value)*0.92;
            break;

            case "Euros(£)":
            final=document.getElementById("amount").value;
            break;
    
        }
    break;
   }
   final = final.toFixed(2);
   document.getElementById("outputDiv").innerText=`${c1} ${finalin} = ${c2} ${final}`
}
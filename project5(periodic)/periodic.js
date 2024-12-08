function showElement(element) {
    switch (element) {
        case 'H':
            document.getElementById('outputb').innerText = "Hydrogen \n-Lightest gas\n-No neutrons";
            document.getElementById('outputa').innerText = "Hydrogen \n-Atomic no.: 1 \n-Atomic wt: 1.008";
            break;
        case 'He':
            document.getElementById('outputb').innerText = "Helium \n-Inert gas\n-Used in balloons";
            document.getElementById('outputa').innerText = "Helium \n-Atomic no.: 2 \n-Atomic wt: 4.0026";
            break;
        case 'Li':
            document.getElementById('outputb').innerText = "Lithium \n-Light metal\n-Used in batteries";
            document.getElementById('outputa').innerText = "Lithium \n-Atomic no.: 3 \n-Atomic wt: 6.94";
            break;
        case 'Be':
            document.getElementById('outputb').innerText = "Beryllium \n-Lightweight metal\n-Used in aerospace";
            document.getElementById('outputa').innerText = "Beryllium \n-Atomic no.: 4 \n-Atomic wt: 9.0122";
            break;
        case 'B':
            document.getElementById('outputb').innerText = "Boron \n-Metalloid\n-Used in glassmaking";
            document.getElementById('outputa').innerText = "Boron \n-Atomic no.: 5 \n-Atomic wt: 10.81";
            break;
        case 'C':
            document.getElementById('outputb').innerText = "Carbon \n-Basis of life\n-Forms diamonds and graphite";
            document.getElementById('outputa').innerText = "Carbon \n-Atomic no.: 6 \n-Atomic wt: 12.011";
            break;
        case 'N':
            document.getElementById('outputb').innerText = "Nitrogen \n-Major component of air\n-Used in fertilizers";
            document.getElementById('outputa').innerText = "Nitrogen \n-Atomic no.: 7 \n-Atomic wt: 14.007";
            break;
        case 'O':
            document.getElementById('outputb').innerText = "Oxygen \n-Essential for life\n-Highly reactive";
            document.getElementById('outputa').innerText = "Oxygen \n-Atomic no.: 8 \n-Atomic wt: 15.999";
            break;
        case 'F':
            document.getElementById('outputb').innerText = "Fluorine \n-Most reactive element\n-Used in toothpaste";
            document.getElementById('outputa').innerText = "Fluorine \n-Atomic no.: 9 \n-Atomic wt: 18.998";
            break;
        case 'Ne':
            document.getElementById('outputb').innerText = "Neon \n-Inert gas\n-Used in neon signs";
            document.getElementById('outputa').innerText = "Neon \n-Atomic no.: 10 \n-Atomic wt: 20.180";
            break;
        case 'Na':
            document.getElementById('outputb').innerText = "Sodium \n-Highly reactive metal\n-Found in salt";
            document.getElementById('outputa').innerText = "Sodium \n-Atomic no.: 11 \n-Atomic wt: 22.990";
            break;
        case 'Mg':
            document.getElementById('outputb').innerText = "Magnesium \n-Lightweight metal\n-Used in alloys";
            document.getElementById('outputa').innerText = "Magnesium \n-Atomic no.: 12 \n-Atomic wt: 24.305";
            break;
        case 'Al':
            document.getElementById('outputb').innerText = "Aluminum \n-Light metal\n-Used in packaging";
            document.getElementById('outputa').innerText = "Aluminum \n-Atomic no.: 13 \n-Atomic wt: 26.982";
            break;
        case 'Si':
            document.getElementById('outputb').innerText = "Silicon \n-Metalloid\n-Used in semiconductors";
            document.getElementById('outputa').innerText = "Silicon \n-Atomic no.: 14 \n-Atomic wt: 28.085";
            break;
        case 'P':
            document.getElementById('outputb').innerText = "Phosphorus \n-Nonmetal\n-Used in fertilizers";
            document.getElementById('outputa').innerText = "Phosphorus \n-Atomic no.: 15 \n-Atomic wt: 30.974";
            break;
        case 'S':
            document.getElementById('outputb').innerText = "Sulfur \n-Nonmetal\n-Found in proteins";
            document.getElementById('outputa').innerText = "Sulfur \n-Atomic no.: 16 \n-Atomic wt: 32.06";
            break;
        case 'Cl':
            document.getElementById('outputb').innerText = "Chlorine \n-Reactive nonmetal\n-Used in disinfectants";
            document.getElementById('outputa').innerText = "Chlorine \n-Atomic no.: 17 \n-Atomic wt: 35.45";
            break;
        case 'Ar':
            document.getElementById('outputb').innerText = "Argon \n-Inert gas\n-Used in lighting";
            document.getElementById('outputa').innerText = "Argon \n-Atomic no.: 18 \n-Atomic wt: 39.948";
            break;
        case 'K':
            document.getElementById('outputb').innerText = "Potassium \n-Alkali metal\n-Important for nutrition";
            document.getElementById('outputa').innerText = "Potassium \n-Atomic no.: 19 \n-Atomic wt: 39.098";
            break;
        case 'Ca':
            document.getElementById('outputb').innerText = "Calcium \n-Alkaline earth metal\n-Found in bones";
            document.getElementById('outputa').innerText = "Calcium \n-Atomic no.: 20 \n-Atomic wt: 40.078";
            break;
        default:
            document.getElementById('outputb').innerText = "Unknown Element";
            document.getElementById('outputa').innerText = "No data available";

    
    }
}


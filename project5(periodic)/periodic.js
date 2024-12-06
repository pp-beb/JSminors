function showElement(element) {
    switch(element){
    case 'H':
        document.getElementById('outputb').innerText = `Hydrogen \n-Lightest gas\n -No protons`;
        document.getElementById('outputa').innerText = `Hydrogen \n-Atomic no. : 1 \n -Atomic wt : 1`;
        break;
    case 'He':
        document.getElementById('outputb').innerText = `${element}`;
        document.getElementById('outputa').innerText = `${element}`;
        break;
    case 'Li':
        document.getElementById('outputb').innerText = `${element}`;
        document.getElementById('outputa').innerText = `${element}`;
        break;

    }
}

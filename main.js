let count = 0;

function buttonClicked() {
    count ++;
    let newText = count;    
    let display = document.getElementById('clicked-num');

    display.innerHTML = newText;
    
}
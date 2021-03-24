const width = document.querySelector('#width');
const height = document.querySelector('#height');
const shapes = document.querySelectorAll('.shape');
const draw = document.querySelector('#draw');
const result = document.querySelector('#result');
const helpText = document.querySelectorAll('.helpText');


let w, h;
draw.addEventListener('click', (e) => {
    
    let checkWidth = false;
    let checkHeight = false;

    if(0 < +width.value && +width.value < 800){
        checkWidth = true;
        w = +width.value;
    }
    
    if(0 < +height.value && +height.value < 1000){
        checkHeight = true;
        h = +height.value;
    }
    
    if(checkWidth == false) {
        helpText[0].innerText = "Nhap width sai!";
    } else {
        helpText[0].innerText = "";
    }

    if(checkHeight == false) {
        helpText[1].innerText = "Nhap height sai!";
    } else {
        helpText[1].innerText = "";
    }

    if(shapes[0].checked) {
        console.log(w);
        console.log(h);
        // draw box
        result.style.width = `${w}px`;
        result.style.height = `${h}px`;
        result.style.borderRadius = `0%`;
    }

    if(shapes[1].checked) {
        // draw circle
        result.style.width = `${w}px`;
        result.style.height = `${h}px`;
        result.style.borderRadius = `50%`;

    }

})
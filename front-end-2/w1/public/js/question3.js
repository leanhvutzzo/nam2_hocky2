const listvalue = document.querySelector('#listvalue');
const draw = document.querySelector('#draw');
const result = document.querySelector('.result');
const helpText = document.querySelector('.helpText');

draw.addEventListener('click', (e) => {
    result.innerHTML = "";
    let splitArray = listvalue.value.split(',');

    //#region Kiểm tra giá trị vào    
    if (listvalue.value.split() == '') {
        helpText.innerText = "Vui lòng nhập giá trị !";
        return;
    }
    if(splitArray.length > 8) {
        helpText.innerText = "Phải nhập dưới 8 số !";
        return;
    }
    let checkSpace = splitArray.find((item) => {
        return item === ''
    })
    if (checkSpace === '') {
        helpText.innerText = "Nhập sai định dạng !";
        return;
    }
    //#endregion
    
    // draw chart
    for (let value of splitArray) {    
        let x = 500 * +value / +Math.max(...splitArray);
        const eDiv = document.createElement('div');
        eDiv.textContent = `${+value}`;
        eDiv.style.width = `60px`;
        eDiv.style.height = `${x}px`;
        eDiv.style.borderRadius = `10px`;
        result.appendChild(eDiv);
    }
});
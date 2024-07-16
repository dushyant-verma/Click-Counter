document.addEventListener('DOMContentLoaded', ()=> {
    const countDisplay = document.getElementById('count');
    const clickButton = document.getElementById('clickButton');

    let count = 0;

    clickButton.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
    })
})
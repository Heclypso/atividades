const incrementBtn = document.querySelector('#inc-btn')
const counter = document.querySelector('#counter')
const decrementBtn = document.querySelector('#dec-btn')

counter.textContent = 0;

incrementBtn.addEventListener('click', () => {
    counter.textContent = Number(counter.textContent) + 1; 
})

decrementBtn.addEventListener('click', () => {
    counter.textContent = Number(counter.textContent) - 1;
})
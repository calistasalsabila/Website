const value = document.querySelector('#value');
const decrease = document.querySelector('#decrement');
const increase = document.querySelector('#increment');

let count = 0;

value.textContent = count;

increase.addEventListener('click', ()=>{
    alert('Increase');
    value.textContent = count++;

})


decrease.addEventListener('click', ()=>{
    alert('Decrease');
    value.textContent = count--;
})
const increment = document.querySelector("#increment")
const decrement = document.querySelector("#decrement")
const reset = document.querySelector("#reset")
const screen = document.querySelector("#screen")

let value = 0

increment.addEventListener('click',()=>{
    // console.log('+')
    value = value+1;
    screen.textContent = value;
})

decrement.addEventListener('click',()=>{
   
    value = value-1
    screen.textContent = value
})

reset.addEventListener('click',()=>{
    // console.log('reset')
    value=0
    screen.textContent = value
})

 
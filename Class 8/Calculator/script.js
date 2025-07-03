const boxes = document.querySelectorAll(".box")
const screen = document.querySelector("#screen")



let internalButton = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '+',
    '-',
    '/',
    '*',
    '='
]


let currentValue = '';

let result =''

boxes.forEach((box,i)=>{
    box.addEventListener('click',(e)=>{
       if(internalButton[i]!=="="){
        currentValue = currentValue + internalButton[i]
        screen.textContent = currentValue
       }else if(internalButton[i]==='='){
        console.log(currentValue)
            result = eval(currentValue)
            console.log(result)
            screen.textContent = result
        }

    })
})







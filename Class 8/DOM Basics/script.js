// . Accessing and Selecting DOM Elements...............................................
// const para1 = document.getElementById('para1')
// console.log(para1)

// const para2 = document.getElementsByClassName('para2')
// console.log(para2[0])
// console.log(para2[1])

// const para1 = document.querySelector('#para1')
// console.log(para1)

// const para2 = document.querySelectorAll('.para2')
// console.log(para2[0])
// console.log(para2[1])



//Modifying DOM Elements........................................................
// let Para1data = para1.textContent
// console.log(Para1data)

// console.log(para1.textContent)

// const head1 = document.querySelectorAll('h1')
// console.log(head1[0])


// para1.textContent = 'This is new para by DOM'

// const head1 = document.querySelector('#head1')
// head1.textContent = 'This is new Head by Dom'

// const div1 = document.querySelector('#div1')
// console.log(div1)

// div1.innerHTML = '<h3>This is head 3</h3>'

// div1.textContent = '<h3>This is head 3</h3>'

// console.log(div1)



//Creating and Removing Elements.................................................................
// const head2 = document.createElement('h1')
// console.log(head2)

// head2.textContent = 'this is new content'
// console.log(head2)

// console.log(head2)


// const div1 = document.querySelector('#div1')
// console.log(div1)
// div1.textContent = head2
// div1.innerHTML = head2
// div1.innerHTML = '<h3>this is head </h3>'

// div1.appendChild(head2)
// div1.removeChild(head2)
// head2.remove()



// const head1 = document.querySelector('#head1')
// console.log(head1)

//Adding Style to HTML content by DOM.....................................................................

// head1.style.cssText = "background-color:red; color:lime;";
// head1.style.color='red';




//5. Adding Class to html element...................................................................
// const head1 = document.querySelector('#head1')

// head1.classList.add('headClass')



// Events in DOM..................................................................................
const clickButton = document.querySelector('#clickButton')

const head1 = document.querySelector('#head1')
 
clickButton.addEventListener('click',()=>{
    console.log('Button Clicked')
    head1.textContent = 'Button Clicked'
})
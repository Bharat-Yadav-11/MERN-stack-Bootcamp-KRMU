import React from 'react'
import Counter from './components/Counter'
import Names from './components/Names'

const App = () => {
  let names = ['Ankit', 'Rashmi', 'Jigar','Rahul','Rajesh','Raj','Manav']
  return (
    <div>
      {/* <Counter/> */}

    <Names names={names}/>
    </div>
  )
}

export default App
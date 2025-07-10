import React from 'react'

const Logout = ({logoutFunction}) => {
  return (
    <div>
        <div>Logout page...</div>
        <button onClick={logoutFunction}>Logout</button>
    </div>
  )
}

export default Logout
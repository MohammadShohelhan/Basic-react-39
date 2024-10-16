import React from 'react'


const Friend = ({friend}) => {
  const {name, email} = friend
  console.log(friend)
  return (
    <div className='box'>
      <h4>Name: {name} </h4>
      <p>Email: {email} </p>
    </div>
  )
}

export default Friend
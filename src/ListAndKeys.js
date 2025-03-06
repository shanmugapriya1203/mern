import React from 'react'

const ListAndKeys = () => {
    const players=["Virat kohli","MS Dhoni","Rohit sharma"]
  return (
  <ul>
    {
        players.map((player,index)=>(
            <li key={index}> {index}-{player}</li>
        ))
    }
  </ul>
  )
}

export default ListAndKeys

import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const user=useContext(UserContext)
  return (
    <div>
      <h2>Player:{user}</h2>
    </div>
  )
}

export default Profile

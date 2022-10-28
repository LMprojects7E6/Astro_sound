import { AuthContext } from 'context/AuthProvider';
import React, { useContext } from 'react'


const ImageProfile = () => {
  const {user} = useContext(AuthContext);
  
console.log(user.photoURL);
    return (
      <div>
        <img src={user.photoURL} alt="" className='w-7 h-7 rounded-full mr-3' />
      </div>
    )
  }

export default ImageProfile
import { AuthContext } from 'context/AuthProvider';
import React, { useContext } from 'react'

// const ImageData = ({size}) => {
//   return (
//     <div>
//         <img src="https://picsum.photos/200" className='rounded-2xl mr-3' height={size} width={size}/>
//     </div>
//   )
// }

const ImageProfile = () => {
  const {user} = useContext(AuthContext);
  

    return (
      <>
      <div><img src={user.photoURL} alt="" className='w-7 h-7 rounded-full mr-3' /></div>
      </>
      // <Component size={size} />
    )
  }

export default ImageProfile
import React from 'react'

const ImageData = ({size}) => {
  return (
    <div>
        <img src="https://picsum.photos/200" className='rounded-2xl mr-3' height={size} width={size}/>
    </div>
  )
}

const ImageProfile = ({size, name}) => {
    const imageProfile ={
        userImage:ImageData,
    };

    const Component = imageProfile[name];

    return (
      <Component size={size} />
    )
  }

export default ImageProfile
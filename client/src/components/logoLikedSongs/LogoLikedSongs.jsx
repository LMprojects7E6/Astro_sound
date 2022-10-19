import React from 'react'
import Icons from 'components/icons'

const LogoLikedSongs = () => {
  return (
    <div className='flex items-center justify-center rounded bg-gradient-to-b bg-purpleDark to-blueBG w-64 h-60'>
      <Icons className= 'bg-white' name={'heart'} size={88} />
    </div>
  )
}

export default LogoLikedSongs
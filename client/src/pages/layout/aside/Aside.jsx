import React from 'react';
import { NavLink } from "react-router-dom";
import  Icon  from '../../../components/icons/Icons';


const Aside = () => {
    const style = "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded px-4 hover:text-white";
    const activeStyle = "bg-active text-white";
    return (
    <nav className="px-2 mt-4">
            <ul className="flex flex-col">
                <li>
                    <NavLink to={"/index"} className={({isActive}) => isActive ? activeStyle+" "+style : style } exact>
                        <span>
                            <Icon name={"home"} size={22}/>
                        </span>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/search"} className={({isActive}) => isActive ? activeStyle+" "+style : style }>
                        <span>
                            <Icon name={"search"} size={22} />
                        </span>
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/collection"} className={({isActive}) => isActive ? activeStyle+" "+style : style }>
                        <span>
                            <Icon name={"collection"} size={22} />
                        </span>
                        My Library
                    </NavLink>
                </li>
                <li>
            <NavLink to={'#'} className='py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white'>
              <span className='w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 text-black rounded-sm group-hover:bg-opacity-100'>
                <Icon name="plus" size={12} />
              </span>
              Created Playlist
            </NavLink>
          </li>
          <li>
            <NavLink to={'#'} className='py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white'>
              <span className='w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white to-blue-300 rounded-sm opacity-60 group-hover:opacity-100'>
                <Icon name="heartFilled" size={12} />
              </span>
              Liked Songs
            </NavLink>
          </li>
            </ul>
        </nav>
    )
}

export default Aside;

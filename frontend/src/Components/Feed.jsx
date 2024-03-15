import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const Feed = () => {
  return (
    <div className=''>
        <div className=' min-h-full w-[41.5vw]  '>
            <div className='w-full h-[7vh] border-r flex  border-b border-zinc-700 text-white bg-black'>
                <div className=' flex w-[90%] h-full font-bold '>
                   <div  className='h-full  flex items-center justify-center w-[50%] '>
                    <a href="">For you</a>
                   </div>
                   <div  className='h-full  flex items-center justify-center w-[50%] '>
                    <a href="">Following</a>
                   </div>
                   
                </div>
                <div className='flex items-center  w-[10%]'>
                    <div className=' rounded-full px-2 py-1'>
                        <a href=""><FontAwesomeIcon icon={faGear}/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed
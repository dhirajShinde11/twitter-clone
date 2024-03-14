import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faBell, faEnvelope, faList, faBookmark, faUsers, faUserCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons'; // Import solid icons for Home, Explore, Notification, Messages, List, Bookmarks, Communities, Profile, More
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Info = () => {
  // Define icon mapping for each item
  const iconMap = {
    home: faHome,
    explore: faCompass,
    notification: faBell,
    messages: faEnvelope,
    list: faList,
    bookmarks: faBookmark,
    communities: faUsers,
    premium: faUserCircle,
    profile: faUserCircle,
    more: faEllipsisH,
    // Add more mappings as needed
  };

  return (
    <div className=''>
      <div className='h-screen w-1/4 border-x text-white border-zinc-700'>
        <div className='mr-[9.2vw] pt-[.8vw] flex justify-center'>
          <FontAwesomeIcon className='text-[2.1vw]' icon={faXTwitter} />
        </div>
        <div className='elem  flex justify-center h-[80%] w-[70%]'>
          <div className='flex flex-col mt-[.9vw]  pt-[.5vw]'>
            {["home", "explore", "notification", "messages", "list", "bookmarks", "communities", "premium", "profile", "more"].map((item, index) => {
              const icon = iconMap[item.toLowerCase()]; // Get the icon based on the lowercase item
              return (
                <div key={index} className=' text-[1.4vw]  -mr-[7vw] text-white mb-[1.8vw]'>
                  <a className='capitalize  px-6 py-2 rounded-[2vw]' href=''>
                    {icon && <FontAwesomeIcon icon={icon} className='mr-2' />} {item} {/* Render the icon if available */}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
       <div className=' px-[5vw]'>
       <div className=' flex justify-center items-center  rounded-full  -mt-[3vw]'>
          <button className=' bg-[#1D9BF0] px-[6vw] py-[1.7vh] rounded-full '>Post</button>
        </div>
       </div>
       <div className=' cursor-pointer h-[5vw] w-[15vw] bg-green-600'>
        <div className=' flex justify-between'>
            <div className='h-[5vw] w-[5vw] bg-red-400 rounded-full overflow-hidden  object-cover'>
              <img src="https://images.unsplash.com/photo-1710432157519-e437027d2e8f?q=80&w=1531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
            </div>
            <div>
            <h5>Dhiraj shinde</h5>
            <h5>@Dhirajshinde</h5>
            </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Info;

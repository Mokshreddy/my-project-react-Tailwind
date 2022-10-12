import React from 'react';
import heroim from './heroim.jpg';

const MainBanner = () => {
  return (
    <div className='flex py-10'>
        <div>
            <h1 className='font-krona text-3xl py-10 ml-10 mr-6 '>
                Reacct poc with dsggjdj  cbjbfjr ncjxnksnk scniojeod bjsnkwndkwnknedek.
            </h1>
            <p className='text-sm py-3 ml-10 mr-6'>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

            </p>
            <button className='py-4 px-10 bg-yellow rounded-full ml-8'>
                see more
            </button>
        </div>
        <div>
            <img src={heroim} alt="woman with background"/>
        </div>

    </div>
  )
}

export default MainBanner
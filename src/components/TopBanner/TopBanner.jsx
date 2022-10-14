import React from 'react';
import {Close} from '@material-ui/icons';
import { useState } from 'react';

function TopBanner() {

   const[TopBanner, setTopBanner] =useState('bg-black font-kron font-bold text-white flex items-center justify-center'
    )
    const handleClose = () =>{
        setTopBanner(TopBanner + " hidden")

    }
  return (
    <div className={TopBanner}>
    <h2>Hurry up 30% off now!!  </h2>  
    <Close className ='cursor-pointer' onClick={handleClose}/>
    </div>
  )
  
}

export default TopBanner

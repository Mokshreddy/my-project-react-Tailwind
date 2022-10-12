import React from 'react'
import './Footer.css';

const Footer = () => {
  const links = [
    'about',
    'women',
    'Men',
    'Contact us'
  ]
  return (
    <footer className='bg-dark text-light  px-4 h-40 py-4'>
      <div className='flex justify-between'>
      <a  className ="text-4xl text-yellow "href="/"> Avara Fash</a>
      <div className='flex items-center'>
      { links.map(link =>(
        <a href='/' className='ml-4 px-3 text-xl'>{link}</a>
      ))}
      </div>
      </div>
      <p className='text-dark-grey text-s py-5'>
        This is a small React ecomm clothing store built using tailwand, reacthooks,axios.
      </p>
      {/* <a href="/"> about</a>
      <a href="/">women</a>
      <a href="/"> Men</a>
      <a href="/"> Contact us</a> */}
      
    </footer>
  )
}

export default Footer
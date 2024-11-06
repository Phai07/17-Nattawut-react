import React from 'react'
import Navbar from '../components/Navbar'


export default function Owner() {
  return (
  <>
  <Navbar />
  <div className='text-center text-2xl pt-9 flex flex-col items-center font-bold'>
    <div className='text-center'>
      <h1> Nattawut Phai17 </h1>
    </div>
    <div>
      <img src="https://i.pinimg.com/736x/05/3c/77/053c770d7dfe6990002dbf526b86267e.jpg" alt=""  
      className='h-64 mb-6 mt-6'
      />
    </div>
    <div>
      <span> Don't give up. </span>
      <p>Worry less, Smile more Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto earum consectetur quos eum dolores, nostrum, molestias maiores, odit modi atque sint! Animi obcaecati accusantium ipsa sequi esse cumque voluptas nulla.</p>
    </div>


  </div>
  
  </>
  )
}

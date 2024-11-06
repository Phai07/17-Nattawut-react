import React from 'react'
import Navbar from '../components/Navbar'



//ลิ้งไปที่หน้า owner เมื่อกดที่หน้าและแสดงข้อความ
export default function Owner() {
  return (
  <>
  <Navbar />
  <div>
    <div className='text-center'>
      <h1> Nattawut Phai17 </h1>
    </div>
    <div className='mb-10'>
      <img src="https://i.pinimg.com/736x/05/3c/77/053c770d7dfe6990002dbf526b86267e.jpg" alt="" />
    </div>
    <div>
      <span> Don't give up. </span>
      <p>Worry less, Smile more Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto earum consectetur quos eum dolores, nostrum, molestias maiores, odit modi atque sint! Animi obcaecati accusantium ipsa sequi esse cumque voluptas nulla.</p>
    </div>


  </div>
  
  </>
  )
}

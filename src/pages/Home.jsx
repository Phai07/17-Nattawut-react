import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Home() {

const [showTextUser, setTextShowUser] = useState(false);
const showtextU = () => {
  setTextShowUser(table => !table);
  setShowtextAd(false);
}

const [showTextAd, setShowtextAd ] = useState(false);
const showTextA =() => {
  setShowtextAd(table => !table);
  setTextShowUser(false);

}

  return (
    <>
    <Navbar />

    <div className='h-[1000px] bg-gray-200 pt-5'>
      <div className='text-5xl   font-bold '>
      <h1>Generation Thailand</h1>
      {showTextUser ? (<p>Home - User sector</p>): showTextAd ? (<p> Home - Admin Sector</p>): <p> React - Assessmet</p>}
      </div>

      <div className='flex justify-center  items-center mt-5 text-xl'>
      <div className='w-[600px] flex justify-between font-bold'>
        <button 
        className='p-5 bg bg-neutral-100  drop-shadow-2xl rounded-lg  hover:bg-blue-200'
        onClick={showtextU}>Use Home Sector</button>
        <button 
        className='p-5 bg bg-neutral-100  drop-shadow-2xl rounded-lg hover:bg-blue-200'
        onClick={showTextA}>Use Home Sector</button>
      </div>
      </div>

    </div>
    </>
  )
}

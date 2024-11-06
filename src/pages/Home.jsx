import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Admin from '../components/Admin';
import Users from '../components/Users';

export default function Home() {
  const [mockEmployees, setMockEmployees] = useState([]);
  const [selectedSector , setSelectedSector] = useState('')

const [sector, setSector] = useState("");
  const showTable =() =>{
    if(sector === "Users"){
      return <Users />
    } 
    if(sector === "Admin"){
      return <Admin  />
  }
  
}

  return (
    <>
    <Navbar />

    <div className='h-[1000px] bg-gray-200 pt-5'>
      <div className='text-4xl   font-bold '>
      <h1>Generation Thailand</h1>
      {/* ฟังก์ชั้นแบบ ternary */}
        {/* sectorเท่ากับค่าว่างเป็นture เมื่อคลิกก็จะไม่เป็นค่าว่างและประกาศตัวด้านหลัง */}
      <p>{sector === ""? " React - Assessmet" :  `Home - ${sector} sector`}</p>
      </div>

      <div className='flex justify-center  items-center mt-10 text-xl'>
      <div className='w-[600px] flex justify-between font-bold'>
        <button 
        className='p-5 bg bg-neutral-100  drop-shadow-2xl rounded-lg  hover:bg-blue-200'
        onClick={()=>setSector("Users")}>Use Home Sector</button>
        <button 
        className='p-5 bg bg-neutral-100  drop-shadow-2xl rounded-lg hover:bg-blue-200'
        onClick={()=>setSector("Admin")}>Admin Home Sector</button>
      </div>
      </div>
      {showTable()}
    </div>
    </>
  )
}

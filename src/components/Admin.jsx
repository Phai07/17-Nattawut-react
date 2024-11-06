import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


export default function Admin() {


  return (
    <div className='pt-20 min-h-screen'>
      <h2 className="text-lg font-bold "> Create User Here</h2>
      <div className="flex justify-center p-8">
      <input
          type="text"
          name="name"
          placeholder="Name"
          
          className="p-2 border border-gray-300 rounded m-3"
        />
           <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          
          className="p-2 border border-gray-300 rounded m-3"
        />
            
      
              <input
          type="text"
          name="position"
          placeholder="Position"
        
          className="p-2 border border-gray-300 rounded m-3"
            
        />
        <button 

        className='px-4 py-2 bg-blue-500 text-white rounded m-3'>Save</button>
      </div>

      <h3 className="text-gray-500 mb-2 text-left ml-5">Table 1</h3>
      <table className="w-full bg-white border border-gray-300 rounded">
      <thead> 
          <tr className="border-b">
            <th className="p-2 ">Name</th>
            <th className="p-2 ">Last Name</th>
            <th className="p-2 ">Position</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
       

    </table>
   </div>
  )
 }

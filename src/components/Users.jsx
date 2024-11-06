import React from 'react'

export default function Users() {
  return (

     <table className='border-2 border-solid border-black mt-20 w-[600px] overflow-x-auto  max-w-4xl mx-auto '>
      <thead className='bg-amber-950 text-white  '>
        <tr className='h-10'>
          <th className='w-[200px] border-solid border-2 border-white '>Name</th>
          <th className='w-[200px] border-solid border-2 border-white '>Last Name</th>
          <th className='w-[200px] border-solid border-2 border-white '>Position</th>
        </tr>
      </thead>
      <tbody className='bg-slate-50'>
      </tbody>
     </table>
    
  )
}

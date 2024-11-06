import React, { useState } from 'react';
import Nav from '../component/Nav';
import TableShowUser from '../component/TableShowUser';

const Home = () => {
    // ตาราง user
    const [showTable, setShowTable] = useState(false);
    const toggleTable = () => {
        setShowTable(table => !table);
        setAdminShowTable(false);
    };

    // ตาราง admin
    const [adminShowTable, setAdminShowTable] = useState(false);
    const toggleAdminTable = () => {
        setAdminShowTable(table => !table);
        setShowTable(false);
    };


    

    return (
  <>
        <Nav />
        <div className='flex items-center flex-col bg-slate-200 h-[1000px]'>
            <div className='w-[550px] text-5xl font-bold flex flex-col justify-center items-center p-5 m-10'>
                <h1>Generation Thailand</h1>
                {showTable ? (<p>Home - User sector</p>): adminShowTable ?(<p>Home - Admin Sector</p>):<p>React - Assessment</p>}
            </div>
            <div className='w-[500px] flex justify-between font-bold'>
                <button className='bg-white text-black p-5 text-base drop-shadow-2xl hover:bg-orange-500 hover:text-white rounded-2xl'
                        onClick={toggleTable}>User Home Sector</button>
                <button className='bg-white text-black p-5 text-base  drop-shadow-2xl hover:bg-orange-500 hover:text-white rounded-2xl'
                        onClick={toggleAdminTable}>Admin Home Sector</button>
            </div>


            <TableShowUser 
                showTable={showTable}
                adminShowTable = {adminShowTable}/>


            
        </div>
    </>
    );
}

export default Home;

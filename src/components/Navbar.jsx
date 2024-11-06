import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <>
        <nav className='font-semibold h-16 flex items-center justify-end border-solid bg-cyan-800 text-zinc-50  rounded-lg '>
            <div className=' flex items-center gap-x-20 text-2xl px-20 font-bold'>
                <Link to='/ '>Home</Link>
                <Link to='/owner'>Owner</Link>
            </div>
        </nav>

        </>
    );
}

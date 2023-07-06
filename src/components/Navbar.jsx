import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='flex justify-between items-center my-7 bg-slate-700 p-4 rounded-lg'>
      <Link to='/'>
        <h1 className='text-3xl font-bold text-amber-500 hover:text-amber-200'>Manager Tasks! 🚀</h1>
      </Link>
      <Link to='/task/new' className='bg-zinc-950 italic hover:bg-sky-400 hover:text-zinc-800 font-bold py-2 px-4 rounded-xl'>CREATE</Link>
    </header>
  )
}

export default Navbar;
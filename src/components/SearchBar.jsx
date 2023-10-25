/* eslint-disable react/prop-types */
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';


function SearchBar({ searchHandler, categoryHandler }) {
    const [text, setText] = useState('');
    
    
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mt-20 w-full bg-green-100 rounded-full py-3 lg:py-2 px-4 gap-2">
        <div className='relative w-3/5 lg:w-2/6'>
            <input value={text} onChange={(e) => setText(e.target.value)} type="search" className="py-2 px-3 w-full rounded-full opacity-70 outline-none" placeholder="Search By Name"/>
            <div className='absolute top-[3px] right-1 cursor-pointer bg-green-100 hover:bg-green-200 transition text-lg p-2 rounded-full'>
              <BsSearch onClick={() => searchHandler(text)} />
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
            <button onClick={() => searchHandler('')} className="btn bg-darkshadow-100 text-white text-sm">All</button>
            <button onClick={() => categoryHandler("jewelery")} className="btn bg-darkshadow-100 text-white text-sm">jewelery</button>
            <button onClick={() => categoryHandler("men's clothing")} className="btn bg-darkshadow-100 text-white text-sm">men&#39;s clothing</button>
            <button onClick={() => categoryHandler("women's clothing")} className="btn bg-darkshadow-100 text-white text-sm">women&#39;s clothing</button>
            <button onClick={() => categoryHandler("electronics")} className="btn bg-darkshadow-100 text-white text-sm">Electronic</button>
        </div>
    </div>
  )
}

export default SearchBar;
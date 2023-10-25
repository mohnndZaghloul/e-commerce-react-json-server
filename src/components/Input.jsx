import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
function Input({ type, placeholder, id, isInput, onchange}) {
  const [value,setValue] = useState('');
  const label = useRef();

  const handleBlur = () => {
    if(value){
      label.current.classList.add('text-green-100');
      label.current.classList.add('-translate-x-2');
      label.current.classList.add('text-sm');
      label.current.classList.add('-translate-y-[32px]');
      label.current.classList.remove('text-redorange-200');
    }
    if (value === ''){
      label.current.classList.remove('text-green-100');
      label.current.classList.remove('-translate-x-2');
      label.current.classList.remove('text-sm');
      label.current.classList.remove('-translate-y-[32px]');
      label.current.classList.add('text-redorange-200');
    }
  }
  return (
    <div className='relative group w-full font-semibold text-darkshadow-100'>
      <label ref={label} className='absolute opacity-80 w-full px-3 py-2 my-4 group-focus-within:-translate-y-[32px] group-focus-within:text-sm group-focus-within:-translate-x-2 group-focus-within:text-green-100 transition cursor-text' htmlFor={id}>{placeholder}</label>
      {isInput 
      ?
      <input id={id} onBlur={handleBlur} onInput={(e) => setValue(e.target.value)} onChange={onchange} value={value} className='px-3 py-2 my-4 w-full bg-gray-100 outline-none rounded-2xl group-focus-within:border-green-100 border-[1px]' type={type} required/>
      :
      <textarea id={id} rows={5} onBlur={handleBlur} onChange={(e) => setValue(e.target.value)} value={value} className="w-full px-3 py-2 my-4 bg-gray-100 rounded-2xl group-focus-within:border-green-100 border-[1px] outline-none" type={type}/>
      }
    </div>
  )
}

export default Input;
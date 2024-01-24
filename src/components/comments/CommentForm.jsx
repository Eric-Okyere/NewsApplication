import React, { useState } from 'react'
import {ImCancelCircle} from "react-icons/im"
const CommentForm = ({btnLabel, formSubmitHandler, formCancelHandler =null,
  initialText = "",
}) => {
    const [value, setvalue] = useState(initialText)

const submitHandler=(e) => {
e.preventDefault();
formSubmitHandler(value);
setvalue("");
}



  return (
    <form onSubmit={submitHandler}>
        <div className='flex flex-col items-end border rounded-lg p-4'>
        <textarea className='w-full focus:outline-none  bg-transparent'  rows="5"
        placeholder='Add your comment here..........' 
        value={value}
        onChange={(e)=>setvalue(e.target.value)}/>

        <div className=' flex items-center pt-2 gap-x-20'>
          {formCancelHandler &&(
          <button onClick={formCancelHandler} className='px-6 py-3 rounded-lg border-red-500 text-red-500' >
            <ImCancelCircle className='w-7 h-7'  />
          </button>
        )}
        <button type='submit' className='text-whitepx-6 py-2.5 rounded-lg font-serif'>
      {btnLabel}</button>
        </div>

    
        </div>
    </form>
  )
}

export default CommentForm
import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 text-amber-50 flex-col justify-between'>
    <h2 className='bg-black rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold' >{props.id}</h2>
    <div className='mt-8'>
        <p className='text-lg leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quos.</p>
        <div className='flex justify-between mt-20'>
            <button className='bg-blue-600 text-white font-medium px-2 py-3 rounded-full '>{props.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full '><i className="ri-arrow-right-line">
                </i></button>
        </div>
    </div>
</div>

  )
}

export default RightCardContent
import React from 'react'

const AcceptTask = () => {
    return(
        <div className="h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta velit, veritatis id accusamus dolores excepturi.
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-xs'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
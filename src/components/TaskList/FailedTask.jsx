import React from 'react'

const FailedTask = () => {
    return(
        <div className="h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta velit, veritatis id accusamus dolores excepturi.
            </p>
            <div className="mt-2">
                <button className="bg-red-500 py-1 px-2 text-xs w-full">Failed</button>
            </div>
        </div>
    )
}

export default FailedTask
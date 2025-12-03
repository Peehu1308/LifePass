import React from 'react'


const HomeScreen = () => {
  return (
    <div>
        <div className='flex items-center justify-between gap-5'>
            {/* <Home/> */}
            <div className='flex flex-row'>
                <p className='bg-linear-to-r from-pink-500 to-red-100 p-2 rounded-xl m-3'>L</p>
            <p  className="font-semibold text-lg">LifePass</p>
            </div>
            <div className='flex items-center gap-6'>
                <p>Home it works</p>
                <p>Pricing</p>
                <p>Sign in</p>
            </div>

        </div>
        <div>
            <p>Your Life. Verified.</p>
            <p>One trusted timeline for skills, achievements, and life events. Build proof-backed credibility that replaces traditional resumes.</p>
        </div>
    </div>
  )
}

export default HomeScreen
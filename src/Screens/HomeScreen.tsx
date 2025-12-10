import React from 'react'
import { ArrowBigRight, ArrowRightIcon, CheckCircle, User } from "lucide-react";


const HomeScreen = () => {
  return (
    <div>
        <div className='flex items-center justify-between gap-5'>
            
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
        <div className='flex justify-start flex-col'>
            <div  className='bg-blue-300 px-4 py-2 rounded-2xl text-blue-700 inline-block w-fit'>
                <p>
                Trusted by 50,000+ professionals
            </p>
            </div>
            
            <p className='text-3xl text-left'>Your Life. Verified.</p>
            <p className='text-sm text-gray-400 text-left'>One trusted timeline for skills, achievements, and life events. Build proof-backed credibility that replaces traditional resumes.</p>
        </div>
        <div>
            <button className='flex flex-row bg-gradient-to-right from-blue-400 to-green-700'>
                Create My LifeProof
                <ArrowRightIcon/>
            </button>
        </div>
    </div>
  )
}

export default HomeScreen
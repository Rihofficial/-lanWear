import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <section className='mx-auto max-w-[1440px]'>
      <div className='flexBetween bg-white '>
        {/* Left side */}
        <div className='hidden lg:block flex-1 px-6 xl:px-12'>
          <h2 className='h2 uppercase'> Affordable Styles, Timeless Appeal</h2>
          <h3 className='h4 uppercase '> Transform Your closet Today</h3>
          <div className='flex mt-5'>
            <Link to={"/collection"} className='btn-secondary !py-0 !pr-0 rouneded-full flexCenter gap-x-2 group '>
              Explore Collections
              <FaArrowRight className=' bg-white text-tertiary rounded-e-full h-9 w-9 p-3 m-[3px] group-hover:-rotate-[20deg] transition-all duration-500 '/>
            </Link>
          </div>
        </div>
        {/* image side */}
        <div className='flex-1'>
          <img src={banner} alt="" className='rounded-tl-3xl rounded-bl-3xl' />
        </div>
      </div>
    </section>
  );
}

export default Banner    


import React from 'react'
import Header from './Header'
const Hero = () => {
  return (
    <div>
      <div className='bg-primary relative xl:pb-[322px] lg:pb-60 sm:pb-56 pb-[175px]'>
        <img className='xl:max-w-[364px] lg:max-w-[240px] max-w-[180px] w-full absolute left-0 pointer-events-none' src='./assets/image/png/left-img.png.png' alt="left-img" />
        <img className='bottom-0 absolute right-0 max-lg:hidden lg:block max-w-[534px]' src='./assets/image/png/right-bottom.png' alt="right-img " />
        <Header />
        <div className='max-w-[1140px] mx-auto w-full px-4 pt-[39px] relative'>
          <h1 className='xl:text-[120px] lg:text-8xl md:text-7xl font-bold sm:text-6xl text-5xl font-sohne uppercase text-center text-white !leading-[104%] max-w-[1400px] w-full mb-3 mx-auto'>Make marketing <br></br>a <span className='relative'>growth</span> machine</h1>
          <img className='absolute xl:left-[20.5rem] lg:left-[17.5rem] md:bottom-[9rem] min-[425px]:left-[6rem] left-[4rem] bottom-[9.5rem] min-[425px]:bottom-[8rem] md:left-[15rem] max-lg:max-w-[146px]  lg:bottom-[10rem] lg:max-w-[256px]' src="./assets/image/png/green-line.png" alt="green line" />
          <p className='text-white !leading-[125%] mx-auto text-center max-w-[656px] lg:text-2xl md:text-xl text-base  font-light mb-7'>We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
          <form className='lg:py-[22px] py-[18.5px] flex justify-between border-[2px] border-white rounded-full max-w-[448px] mx-auto lg:ps-[34px] lg:pe-[37px] max-lg:px-6'>
            <input type="text" required placeholder='Enter Your Website' className='placeholder:text-white placeholder:opacity-[60%] outline-none text-white opacity-[60%] bg-transparent' />
            <button className='text-white font-semibold text-[15px] '>Analyze</button>
          </form>
        </div>
      </div>
      <img className='xl:max-w-[924px] max-w-[800px] sm:block max-sm:hidden w-full mx-auto xl:-translate-y-64 lg:-translate-y-48 -translate-y-44' src='./assets/image/png/hero-sec.png' alt="hero-img" />
      <img className='xl:max-w-[924px] max-w-[800px] sm:hidden max-sm:block max-h-[335px] max-sm:max-w-[328px] w-full mx-auto -translate-y-[127px]' src='./assets/image/png/sm-hero-sec.png' alt="sm-hero-img" />
    </div>
  )
}

export default Hero
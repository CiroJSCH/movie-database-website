import React, { ReactNode } from 'react'

const MoviesLayout = ({children}: {children: ReactNode}) => {
  return (
    <section className='flex flex-col justify-center pb-7 pt-[100px] md:pt-[150px] lg:pt-[100px] px-3 md:px-5 xl:px-0 max-w-[1440px] m-auto '>
      {children}
    </section>
  )
}

export default MoviesLayout;
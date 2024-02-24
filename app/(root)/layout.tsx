'use client'
import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='root'>

      <Sidebar/>
      <div className='md:hidden'>

      <MobileNav/>
      </div>
        <div className='root-container'>
            <div className="wrapper">

        {children}

            </div>
        </div>
        </div>
  )
}

export default Layout
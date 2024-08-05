import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoadingSpinner from '../components/LoadingSpinner'
import { AuthContext } from '../contexts/AuthProvider'

const Main = () => {
  const {loading} = useContext(AuthContext);
  return (
    <div className='bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%'>
       {loading ? (
        <LoadingSpinner/>
      ) : (
    <div className='bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%'>
    
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      )}
    </div>
  )
}

export default Main
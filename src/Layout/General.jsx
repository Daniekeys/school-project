import React from 'react'
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";

const General = ({children}) => {
  return (
      <div className='w-full flex flex-col h-screen min-h-screen flow-hide'>
          <MainHeader />
          <div className="bg-blue-600 h-full">
              
          {children}
          
          </div>


          <Footer />
    </div>
  )
}

export default General
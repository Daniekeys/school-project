import React from 'react'
import General from '../Layout/General'
const TestPage = () => {
  return (
      <General>
          <div className="grid grid-cols-2 h-full">
              <div className="h-full bg-white"></div>
              <div className="h-full bg-cyan-500"></div>
              <div className="h-full bg-slate-800"></div>
              <div className="h-full bg-red-500"></div>
          </div>
    </General>
  )
}

export default TestPage
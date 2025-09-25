import React, { Suspense } from 'react'
import Dashboard from './page'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'

const DashboardLayout = () => {
  return (
    <div className='px-5'>
      <h1 className="text-6xl bg-gradient-to-br from-blue-900 to-blue-600 font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text">
        Dashboard
      </h1>
      {/* {} */}
      <Suspense fallback={<BarLoader className='mt-4 width={100%}'/>}>
        <DashboardPage />
      </Suspense>
    </div>
  )
}

export default DashboardLayout
import { Button } from '@/components/ui/button'
import React from 'react'

function Dashboard() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <Button>+ Create New</Button>
      </div>
    </div>
  )
}

export default Dashboard
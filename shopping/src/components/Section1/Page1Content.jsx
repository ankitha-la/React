import React from 'react'
import Lcontent from './Lcontent'
import RightContent from './RightContent'




const Page1Content = (props) => {
  return (
      <div className='flex justify-center items-center gap-10 h-[90vh] px-18'>
        
        
        <Lcontent />
        <RightContent users={props.users} />

      

        </div>
  )
}

export default Page1Content
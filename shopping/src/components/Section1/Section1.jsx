import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'
import Section2 from '../Section2/Section2'

const Section1 = (props) => {
  return (
   <div className='h-screen w-full bg-blue-200'>
     Section1
    <Navbar/>
    <Page1Content users={props.users}/>
    <Section2/>
</div>
   
   

   
  )
}

export default Section1
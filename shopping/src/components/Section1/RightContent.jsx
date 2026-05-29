import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
     <div className='h-[70vh] flex  overflow-x-auto  rounded-4xl gap-6 p-6 w-[500px] '>

      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
       
        
        </div>
  )
}

export default RightContent
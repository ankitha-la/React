import React from 'react'
import Section1 from './components/Section1/Section1'
// import Section2 from './components/Section2/Section2'



const App = () => {

  const users =[
    {
      img:'https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Satisfied'

    },
    {
      img:'https://images.unsplash.com/photo-1623461487986-9400110de28e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Undererved'
    },
    {
      img:'https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Underbanked'
    }
  ]
  return (
    <div >
     <Section1 users={users}/>

     {/* <Section2/> */}
    </div>
  )
}

export default App
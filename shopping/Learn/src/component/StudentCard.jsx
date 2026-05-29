const StudentCard = ({ name, course, college }) => {
  return (
    <div className='StudentCard'>
      <h1>Name: {name}</h1>
      <h1>Course: {course}</h1>
      <h1>College: {college}</h1>
    </div>
  )
}

export default StudentCard
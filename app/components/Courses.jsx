import Link from "next/link"

async function fetchCourses(){
    const response = await fetch("http://localhost:3000/api/courses")
    const courses = await response.json()
    return courses
}

const Courses = async () => {
    const courses = await fetchCourses()

    // console.log(courses);

  return (
    <div className="courses">
        {
            courses?.map((course, ind) => 
                <div key={ind} className="card">
                    <h3>{course.title}</h3>
                    <small>{course.level}</small>
                    <p>{course.description}</p>
                    <Link href={course.link} target="_blank" className="btn">Go To Course</Link>
                </div>)
        }
    </div>
  )
}

export default Courses
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import background from "../src/assets/background.jpg"
import Home from './Components/Home/Home'
import Tasks from './Components/Tasks/Tasks'

const taskList= [
  {
    name: "Child Support",
    img: "../src/assets/images/child.png",
    id: 1 
  },
  {
    name: "Refuge Shelter",
    img: "../src/assets/images/refuse.png",
    id: 2  
  },
  {
    name: "Food Charity",
    img: "../src/assets/images/food.png",
    id: 3 
  },
  {
    name: "Host a Clothing Swap",
    img: "../src/assets/images/cloth.png",
    id: 4  
  },
  {
    name: "Host a River Clean-up",
    img: "../src/assets/images/river.png",
    id: 5  
  },
  {
    name: "Clean water for all",
    img: "../src/assets/images/clean.png",
    id: 6  
  },
  {
    name: "Good Education",
    img: "../src/assets/images/education.png",
    id: 7  
  },
  {
    name: "New Book for Children",
    img: "../src/assets/images/new.png",
    id: 8  
  },
  {
    name: "Host a Study Group for Children",
    img: "../src/assets/images/study.png",
    id: 9  
  },
  {
    name: "Build Birdhouses for Rescue Bird",
    img: "../src/assets/images/bird.png",
    id: 10  
  },
  {
    name: "Organize Books at Library Volunteer",
    img: "../src/assets/images/library.png",
    id: 11  
  },
  {
    name: "Give seminar on Driving Safety",
    img: "../src/assets/images/driving.png",
    id: 12  
  },
  {
    name: "Give free Music Lessons every week",
    img: "../src/assets/images/music.png",
    id: 13 
  },
  {
    name: "Teach how to register to Vote",
    img: "../src/assets/images/vote.png",
    id: 14  
  },
  {
    name: "Clean up Local Park and free for all",
    img: "../src/assets/images/park.png",
    id: 15  
  },
  {
    name: "Give IT helps and Training Program",
    img: "../src/assets/images/it.png",
    id: 16  
  },
  {
    name: "Foster a shelter animal Volunteer",
    img: "../src/assets/images/shelter.png",
    id: 17  
  },
  {
    name: "Babysit during PTA meeting",
    img: "../src/assets/images/babySit.png",
    id: 18  
  },
  {
    name: "Collect and Rescue stuffed animal ",
    img: "../src/assets/images/stuffed.png" ,
    id: 19 
  },
  {
    name: "Collect School Supplies once a week",
    img: "../src/assets/images/school.png",
    id: 20  
  }
]

function App() {

  return (
    <>
    <div style={{height: '500px', backgroundImage: `url(${background})`}} className='bg-cover bg-bottom'>
    <Navbar/>
    <Home></Home>
    </div>
    <div className="btn no-animation flex justify-center items-center mt-2 text-2xl font-bold hover:cursor-default">Select as a Volunteer</div>
    <div className="grid grid-cols-4">
    {taskList.map(task=> <Tasks task={task}></Tasks>)}
    </div>
    </>
  )
}

export default App

import {BsFillMoonStarsFill} from 'react-icons/bs';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";



function App() {


  return (
   <main className='bg-white px-10'>
    <section>
      <nav className='py-10 mb-12 flex justify-around'>
        <h1 className='text-xl'>Henry</h1>
        <ul className='flex items-center space-x-4'>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li onClick={() => console.log('swtich to light / dark')}><BsFillMoonStarsFill /></li>
        </ul>
      </nav>
    </section>

    <section>
      <div className='text-center'>
        <h2 className='text-blue-500'>Junior Software Developer</h2>
        <h3>Hello! I'm a recent graduate from Northcoders</h3>
        
        <div className='flex items-center justify-center text-2xl'>
        <BsGithub />
        <BsLinkedin />
        </div>


      </div>
    </section>
   </main>
  )
}

export default App

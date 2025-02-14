import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import About from "./Routes/About";
import Homepg from "./Routes/Home";
import Experience from "./Routes/Experience";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepg/>}></Route>
          <Route path='/' element={<Layout />}>
            <Route path='/Homepg' element={<Homepg />} />
            <Route path='/About' element={<About />} />
            <Route path='/Experience' element={<Experience />} />
            <Route path='/Project' element={<Project />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='*' element={<Kidhar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-col md:flex-row h-[10vh] px-5 py-3 place-content-between items-center '>
      <div className='flex items-center justify-between w-full md:w-auto'>
        <Link to="/Homepg" className='text-2xl'>Siddhant Das</Link>
        <button onClick={() => setIsOpen(!isOpen)} className='text-2xl md:hidden'>
          ☰
        </button>
      </div>
      <div className={`flex-col md:flex-row md:flex gap-5 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <Link to="/About">About</Link>
        <Link to="/Experience">Experience</Link>
        <Link to="/Project">Project</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className='flex place-content-center h-[10vh]'>
      <p>Copyright by No one</p>
    </div>
  );
}

function Layout() {
  return (
    <div className="flex flex-col ">
      <TopNav />
      <div className='flex-grow h-[85vh]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function Kidhar() {
  return (
    <div className='flex justify-center items-center h-full'>
      <h1>Yes kis line main chale aye ap ?</h1>
    </div>
  );
}

export default App;
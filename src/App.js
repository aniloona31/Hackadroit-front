import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Carousal from './Components/Carousal';
import FrontButtons from './Components/FrontButtons';
import Footer from './Components/Footer';
import EventPage from './Components/EventPage';
import Search from './Components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Carousal/>} path="/"/>
        <Route element={<EventPage/>} path="/events/:place"/>
        <Route element={<Search/>} path="/place" />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
    // <div className="App">
    //   <Navbar />
    //   <Carousal />
      // <div className="front">
      //   <FrontButtons />
      // </div>
    //   <div className='fle'>
    //     <Footer />
    //   </div>
    //   {/* <Login/> */}
    //   {/* <EventPage/> */}
    //   {/* <Search/> */}
    // </div>
  );
}

export default App;

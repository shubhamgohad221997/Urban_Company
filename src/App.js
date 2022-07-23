import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogpPage from './components/BlogpPage';

import Citypage from './components/Citypage';

import Home from './components/Home';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/city" element={<Citypage/>}/>
        <Route path="/blog" element={<BlogpPage/>}/>
      </Routes>
     {/* <Home/> */}
     {/* <Citypage/> */}
     {/* <BlogpPage/> */}
  
    </div>
  );
}

export default App;

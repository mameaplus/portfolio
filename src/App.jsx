import './App.css';
import './Layout/Contents/Header/Header';

import Header from './Layout/Contents/Header/Header';
import MainWrapper from "./Layout/MainWrapper";
 
import { projects,skills} from './data';
import ProjectDetail from './Layout/Contents/ProjectDetail/ProjectDetail';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Portfolio from './Layout/Contents/Portfolio/Portfolio';
import Aboutme from './Layout/Contents/Aboutme/Aboutme';
import Contact from './Layout/Contents/Contact/Contact';
function App() {
  return (
    <>
       
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={  <MainWrapper/>  }>
                    <Route path="/" element={<Aboutme skills={skills}/>}/>
                    <Route path="/portfolio" element={<Portfolio projects={projects} />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
     
    </>
    
  );
}

export default App;

import "./App.css";
import React, {useState} from "react";
import NavBar from "./components/NavBar";
import NewsCom from "./components/NewsCom";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
 const apiKey = process.env.REACT_APP_NEWS_API
 const pageSize = 5
 
const [progress, setProgress] = useState(0)
  
  
    return (
      <div>
        <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<NewsCom setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<NewsCom setProgress={setProgress} key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<NewsCom setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<NewsCom setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<NewsCom setProgress={setProgress} key="health" apiKey={apiKey} pageSize={pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<NewsCom setProgress={setProgress} key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<NewsCom setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<NewsCom setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  
}

export default App

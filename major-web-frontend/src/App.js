import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import InpaintApp from './pages/InpaintApp/InpaintApp';
import ProjectInfo from './pages/ProjectInfo';
import GetReview from './pages/GetReview/GetReview';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/inpaint-app" element={<InpaintApp />} />
        <Route path="/project-info" element={<ProjectInfo />} />
        <Route path="/provide-review" element={<GetReview />} />
      </Routes>
    </Router>
  );
}

export default App;

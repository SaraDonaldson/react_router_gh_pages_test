
import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import DashboardPage from './Pages/DashboardPage';
import ProjectsPage from './Pages/ProjectsPage';
import ProfilePage from './Pages/ProfilePage';
import HomePage from './Pages/HomePage';




function App() {
  return (

    <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          <Footer />
    </HashRouter>

  );
}

export default App;

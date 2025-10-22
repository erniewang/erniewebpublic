import { Header } from "./components/header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects/Projects";
import Creative from "./pages/Creative/Creative";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen">
        <Header />
        <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/creative" element={<Creative />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
import { Header } from "./components/header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog/Blog";
import Music from "./pages/Music/Music";
import Photography from "./pages/Photography";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen">
        <Header />
        <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/music" element={<Music />} />
        <Route path="/photography" element={<Photography />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
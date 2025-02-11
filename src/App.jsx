import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts/:postId" element={<Post />} />
          </Routes>
      </Router>
  )
}

export default App

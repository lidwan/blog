import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Post from "./pages/Post/Post.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

export default function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts/:postId" element={<Post />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
  )
}
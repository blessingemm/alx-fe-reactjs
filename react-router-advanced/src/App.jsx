import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="space-x-4 p-4 bg-gray-200">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/blog/101">Blog Example</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

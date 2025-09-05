import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/admin/Profile";
import SinglePost from "./pages/SinglePost";
import Post from "./pages/admin/Post";
import ViewPost from "./pages/admin/ViewPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post/:id" element={<SinglePost />} />
        {/* admin */}
        <Route path="/admin/post" element={<Post />} />
        <Route path="/admin/post/:id" element={<ViewPost />} />
        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

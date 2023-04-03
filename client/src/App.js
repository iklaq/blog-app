import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./components/CreatePost";
import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage";
import Post from "./components/Post";
import RegisterPage from "./components/RegisterPage";

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Post />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;

import "./App.css";
import Post from "./components/Post";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Post />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Route>
    </Routes>
  );
};

export default App;

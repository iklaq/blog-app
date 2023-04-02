import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage";
import Post from "./components/Post";
import RegisterPage from "./components/RegisterPage";
import { UserContextProvider } from "./UserContext";

const App = () => {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Post />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
    </UserContextProvider>
  );
};

export default App;
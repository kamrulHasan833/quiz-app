import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/global.css";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
import Signup from "./components/pages/Signup";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<PublicRoute />}>
              <Route path="" element={<Signup />} />
            </Route>
            <Route path="/login" element={<PublicRoute />}>
              <Route path="" element={<Login />} />
            </Route>
            <Route path="/quiz" element={<PrivateRoute />}>
              <Route path=":id" element={<Quiz />} />
            </Route>
            <Route path="/result" element={<PrivateRoute />}>
              <Route path=":id" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

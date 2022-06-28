import { Routes, Route } from "react-router-dom";
import { SignUpPage } from "./pages/SignUp";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { HomeLayout } from "./components/layout/HomeLayout";

import "./styles/styles.scss";

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
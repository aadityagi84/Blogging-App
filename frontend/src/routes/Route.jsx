import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Users from "../pages/Users";
import TableData from "../pages/Table";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="table" element={<TableData />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="login" element={<Login />} />

      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default Router;

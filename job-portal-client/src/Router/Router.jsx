import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import JobDetails from "../Pages/JobDetails";
import Signup from "../components/Signup";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";
import Dashboard from "../components/Dashbord";
import LoginAdmin from "../components/LoginAdmin";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/Home", element: <Home /> },
      { path: "/post-job", element: <CreateJob /> },
      { path: "/my-job", element: <MyJobs /> },
      { path: "/salary", element: <SalaryPage /> },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-jobs/${params.id}`),
      },
      { path: "/job/:id", element: <JobDetails /> },
      { path: "/signup", element: <Signup /> },

      { path: "/loginadmin", element: <LoginAdmin /> },
      { path: "/forgotPassword", element: <ForgotPassword /> },
      { path: "/resetPassword/:token", element: <ResetPassword /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

export default router;

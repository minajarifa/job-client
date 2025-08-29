import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplicationJob from "../Pages/MyApplicationJob/MyApplicationJob";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/JobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "/My_Application_Jobs",
        element: (
          <PrivateRoute>
            <MyApplicationJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/MyPostedJob",
        element: (
          <PrivateRoute>
            <MyPostedJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/ViewApplications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://sob-server.vercel.app/job-applications/jobs/${params.job_id}`),
      },
      {
        path: "/Add_Job",
        element: (
          <PrivateRoute>
            <AddJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://sob-server.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;

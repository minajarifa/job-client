import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";

export default function MyPostedJob() {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios.get(`https://sob-server.vercel.app/jobs?email=${user.email}`,{withCredentials:true})
      .then((res) => {
        setJobs(res.data);
      });
  }, []);
  console.log(jobs)
  return (
    <div>
      <h1>{jobs.length}</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Job title</th>
                <th>Deadline</th>
                <th>application count</th>
                <th>Applications</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {jobs.map((job, index) => (
                <tr key={job._id}>
                  <th>{index+1}</th>
                  <td>{job.title}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>{job.applicationCount}</td>
                  <td><Link className="btn btn-link" to ={`/ViewApplications/${job._id}`}>View Application</Link></td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

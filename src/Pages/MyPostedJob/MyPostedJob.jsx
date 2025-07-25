import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { Link } from "react-router-dom";

export default function MyPostedJob() {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:1000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
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

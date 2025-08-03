import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";

export default function MyApplicationJob() {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:1000/job-application?email=${user.email}`, {
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data);
        setJobs(res?.data);
      });

    // fetch(`http://localhost:1000/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });
  }, [user?.email]);
  console.log(jobs);
  const handleDeleteButton = (id) => {
    fetch(`http://localhost:1000/deleteApplication/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount === 1) {
          Swal.fire("Deleted successfully!");
        }
      });
  };
  return (
    <div>
      MuApplicationJob {jobs.length}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {jobs.map((job) => (
                <tr key={job._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img
                            src={job?.company_logo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{job.title}</div>
                        <div className="text-sm opacity-50">{job.location}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {job.company}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {job.jobType}
                    </span>
                  </td>
                  <td>Details</td>
                  <th>
                    <button
                      onClick={() => handleDeleteButton(job._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      <AiFillDelete className="text-xl" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

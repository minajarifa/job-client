import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";

export default function MyApplicationJob() {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:1000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user?.email]);
  return <div>MuApplicationJob {jobs.length}</div>;
}

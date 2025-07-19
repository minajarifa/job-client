import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";


export default function MyPostedJob() {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:1000/jobs?email=careers@knowledgebridge.com`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div>
      <h1></h1>
    </div>
  );
}
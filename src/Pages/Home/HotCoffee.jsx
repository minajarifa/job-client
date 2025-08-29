import { useEffect, useState } from "react";
import HotCoffeeCard from "./HotCoffeeCard";
import axios from "axios";

export default function HotCoffee() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get(`https://sob-server.vercel.app/jobs`,{withCredentials:true}).then((res) => {
      console.log(res.data);
      setJobs(res.data);
    });
  }, []);
  console.log(jobs);
  return (
    <div className="my-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
        {jobs?.map((job) => (
          <HotCoffeeCard key={job?._id} job={job}></HotCoffeeCard>
        ))}
      </div>
    </div>
  );
}

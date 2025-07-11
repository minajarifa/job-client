import { useEffect, useState } from "react";
import HotCoffeeCard from "./HotCoffeeCard";

export default function HotCoffee() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:1000/jobs`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setJobs(data);
      });
  }, []);
//   console.log(jobs);
  return (
    <div>
      {jobs.map((job) => (
        <HotCoffeeCard key={job._id} job={job}>ari</HotCoffeeCard>
      ))}
    </div>
  );
}

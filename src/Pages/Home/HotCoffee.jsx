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
    <div className="my-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
        {jobs?.map((job) => (
          <HotCoffeeCard key={job._id} job={job}></HotCoffeeCard>
        ))}
      </div>
    </div>
  );
}

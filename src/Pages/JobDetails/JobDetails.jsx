import { FaMapMarkerAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

export default function JobDetails() {
  const job = useLoaderData();
  console.log(job);
  return (
    <div className="shadow-sm card bg-base-100 ">
      <div className="flex gap-2 m-2">
        <figure className="px-10 pt-10">
          <img src={job.company_logo} alt="Shoes" className="w-12 rounded-xl" />
        </figure>
        <div className="mt-10">
          <h4 className="text-2xl">{job.company}</h4>
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt />
            {job.location}
          </p>
        </div>
      </div>
      <div className="items-center text-center card-body">
        <h2 className="card-title">
          {job.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{job.description}</p>
        <div className="flex items-center gap-2">
          {job.requirements?.map((skill, index) => (
            <p
              key={index}
              className="border rounded-md hover:text-blue-500 hover:bg-gray-400"
            >
              {job.skill}
            </p>
          ))}
        </div>
        <div className="flex items-center card-actions">
          <p>
            Salary: {job.salaryRange.min}-{job.salaryRange.max}
            {job.salaryRange.currency}
          </p>

          <button className="btn btn-primary">Apply</button>
        </div>
      </div>
    </div>
  );
}

import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HotCoffeeCard({ job }) {
  console.log(job);
  const {
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    hr_email,
    hr_name,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange,
    status,
    title,
    _id,
  } = job;
  return (
    <div className="shadow-sm card bg-base-100 ">
      <div className="flex items-center gap-2 m-2 ">
        <figure className="px-10 pt-10 ">
          <img src={company_logo} alt="Shoes" className="w-12 rounded-xl" />
        </figure>
        <div className="mt-10">
          <h4 className="text-2xl">{company}</h4>
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt/>
            {location}
          </p>
        </div>
      </div>
      <div className="items-center text-center card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex items-center gap-2">
          {requirements?.map((skill ,index) => (
            <p key={index} className="border rounded-md hover:text-blue-500 hover:bg-gray-400">
              {skill}
            </p>
          ))}
        </div>
        <div className="flex items-center card-actions">
          <p>
            Salary: {salaryRange.min}-{salaryRange.max}
            {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
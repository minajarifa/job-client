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
  } = job;
  return (
    <div className="shadow-sm card bg-base-100 w-96">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="items-center text-center card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

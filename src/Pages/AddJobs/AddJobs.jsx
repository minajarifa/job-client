import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";

export default function AddJobs() {
  const { user } = useAuth();
  const handleFormSubmitButton = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split(" ");
    newJob.responsibilities = newJob.responsibilities.split(" ");
    fetch("http://localhost:1000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Job post added successfully!");
        }
      });
  };
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center">Post a new job</h1>
      <form
        onSubmit={handleFormSubmitButton}
        className="shadow-2xl card bg-base-100 shrink-0"
      >
        <div className=" card-body">
          <fieldset className=" fieldset">
            {/* title */}
            <div>
              <label className="label">title</label>
              <input
                type="text"
                className="w-full input"
                placeholder="title"
                name="title"
                required
              />
            </div>
            {/* location */}
            <div className="">
              <label className="label">location</label>
              <input
                type="text"
                className="w-full input"
                placeholder="location"
                name="location"
                required
              />
            </div>
            {/* jobType */}
            <div className="">
              <label className="label">job Type</label>
              <select
                type="text"
                className="w-full input"
                placeholder="jobType"
                name="jobType"
                required
              >
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contractual">Contractual</option>
                <option value="Intern">Intern</option>
                <option value="Full-Time">Full-Time</option>
              </select>
            </div>
            {/* category */}
            <div className="">
              <label className="label">category</label>
              <select
                type="text"
                className="w-full input"
                placeholder="category"
                name="category"
                required
              >
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Teaching">Teaching</option>
                <option value="Management">Management</option>
                <option value="Data Science">Data Science</option>
                <option value="Design">Design</option>
                <option value="Engineering">Engineering</option>
                <option value="Development">Development</option>
              </select>
            </div>
            {/* requirements */}
            <div className="">
              <label className="label">requirements</label>
              <input
                type="text"
                className="w-full input"
                placeholder="requirements"
                name="requirements"
                required
              />
            </div>
            {/* applicationDeadline */}
            <div className="">
              <label className="label">application Deadline</label>
              <input
                type="text"
                className="w-full input"
                placeholder="application Deadline"
                name="applicationDeadline"
                required
              />
            </div>
            {/* salaryRange" start */}

            <div className="grid items-end grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="">
                <label className="label">salary Range</label>
                <input
                  type="number"
                  className="w-full input"
                  placeholder="min"
                  name="min"
                  required
                />
              </div>
              <div className="">
                <input
                  type="number"
                  className="w-full input"
                  placeholder="max"
                  name="max"
                  required
                />
              </div>
              <div className="">
                <select
                  type="text"
                  className="w-full input"
                  placeholder="currency"
                  name="currency"
                  required
                >
                  <option value="BDT">BDT</option>
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                </select>
              </div>
            </div>
            {/* salaryRange" end */}
            {/* job destription */}
            <div className="">
              <label className="label">Job Destription</label>
              <textarea
                className="w-full textarea textarea-bordered"
                name="destription"
                placeholder="Job Destription"
              ></textarea>
            </div>
            {/* company */}
            <div className="">
              <label className="label">company</label>
              <input
                type="text"
                className="w-full input"
                placeholder="company"
                name="company"
                required
              />
            </div>
            {/* status */}
            <div className="">
              <label className="label">status</label>
              <input
                type="text"
                className="w-full input"
                placeholder="status"
                name="status"
                required
              />
            </div>
            {/* company_logo */}
            <div className="">
              <label className="label">Company logo</label>
              <input
                type="text"
                className="w-full input"
                placeholder="company_logo"
                name="company_logo"
                required
              />
            </div>
            {/*HR email */}
            <div className="">
              <label className="label">HR Email</label>
              <input
                defaultValue={user?.email}
                type="text"
                className="w-full input"
                placeholder="hr_email"
                name="hr_email"
                required
              />
            </div>
            {/*HR Name */}
            <div className="">
              <label className="label">HR Name</label>
              <input
                defaultValue={user?.name}
                type="text"
                className="w-full input"
                placeholder="hr_name"
                name="hr_name"
                required
              />
            </div>
            {/* job responsibilities */}
            <div className="">
              <label className="label-text">Job Responsibilities</label>
              <textarea
                className="w-full textarea textarea-bordered"
                name="responsibilities"
                placeholder="Wright each Responsibilities in a new line"
              ></textarea>
            </div>
            <button type="submit" className="mt-4 btn btn-neutral">
              Login
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
}

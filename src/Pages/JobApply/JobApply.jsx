import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";

export default function JobApply() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate()
  console.log(user);
  const submitjobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const LinkedIn = form.LinkedIn.value;
    const Github = form.Github.value;
    const Resume = form.Resume.value;
    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      LinkedIn,
      Github,
      Resume,
    };
    console.log(jobApplication);
    fetch('http://localhost:1000/job-application',{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(jobApplication)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire("Jobs application added successfully!");
        navigate('/My_Application_Jobs')
      }
    })
  };
  return (
    <div className="flex-col hero-content lg:flex-row-reverse">
      <div className="shadow-2xl bg-base-100 shrink-0">
        <h1 className="my-5 text-5xl font-bold text-center">
          Apply job And Good Luck!
        </h1>
        <form onSubmit={submitjobApplication} className="card-body">
          <fieldset className="fieldset">
            <div>
              <label className="label">LinkedIn URL</label>
              <input
                type="url"
                name="LinkedIn"
                className="w-full input"
                placeholder="LInkedIn URL"
                required
              />
            </div>
            <div>
              <label className="label">Github URL</label>
              <input
                type="url"
                name="Github"
                className="w-full input"
                placeholder="Github URL"
                required
              />
            </div>
            <div>
              <label className="label">Resume URL</label>
              <input
                type="url"
                name="Resume"
                className="w-full input"
                placeholder="Resume URL"
                required
              />
            </div>
            <button type="submit" className="mt-4 btn btn-neutral">
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

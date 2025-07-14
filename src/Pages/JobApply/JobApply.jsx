import { useParams } from "react-router-dom";

export default function JobApply() {
  const { id } = useParams();
  console.log(id);
  const submitjobApplication=(e)=>{
    e.preventDefault()
  const form = e.target;
  const LinkedIn= form.LinkedIn.value;
  const Github= form.Github.value;
  const Resume= form.Resume.value;
  console.log(LinkedIn,Github,Resume)
  }
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
          <h1 className="">Apply job And Good Luck</h1>
          <form onSubmit={submitjobApplication} className="card-body">
            <fieldset className="fieldset">
              <div>
                <label className="label">LinkedIn URL</label>
                <input
                  type="url"
                  name="LinkedIn"
                  className="input"
                  placeholder="LInkedIn URL"
                  required
                />
              </div>
              <div>
                <label className="label">Github URL</label>
                <input
                  type="url"
                  name="Github"
                  className="input"
                  placeholder="Github URL"
                  required
                />
              </div>
              <div>
                <label className="label">Resume URL</label>
                <input
                  type="url"
                  name="Resume"
                  className="input"
                  placeholder="Resume URL"
                  required
                />
              </div>
              <button type="submit" className="mt-4 btn btn-neutral">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

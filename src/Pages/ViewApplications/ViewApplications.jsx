import { useLoaderData } from "react-router-dom";

export default function ViewApplications() {
  const applications = useLoaderData();
  console.log(applications);
  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:1000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  
  return (
    <div>
      <h2>ViewApplications : {applications?.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>status</th>
                <th>Update status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {applications.map((app, index) => (
                <tr key={app._id}>
                  <th>{index + 1}</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <select
                      onChange={(e) => handleStatusUpdate(e, app._id)}
                      defaultValue={app.status || "Change Status"}
                      className="select select-xs"
                    >
                      <option disabled={true}>Change Status</option>
                      <option>Under Review</option>
                      <option>Set Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

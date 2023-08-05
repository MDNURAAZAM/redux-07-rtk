import React from "react";
import { useDispatch } from "react-redux";
import { editingActive, removeJob } from "../../features/jobs/jobsSlice";
import { useNavigate } from "react-router-dom";

const JobsListItem = ({ job }) => {
  const { title, type, salary, deadline, id } = job;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // decide the color of the type
  let color = "";
  if (type === "Internship") color = "#FF5757";
  if (type === "Full Time") color = "#FF8A00";
  if (type === "Remote") color = "#56E5C4";

  const handleDeleteClick = () => {
    dispatch(removeJob(id));
  };

  const handleEditClick = () => {
    navigate("/jobform");
    dispatch(editingActive(job));
  };
  return (
    <div class="lws-single-job">
      <div class="flex-1 min-w-0">
        <h2 class="lws-title">{title}</h2>
        <div class="job-footers">
          <div class="lws-type">
            {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
            <i class={`fa-solid fa-stop !text-[${color}]`}></i>
            {type}
          </div>
          <div class="lws-salary">
            <i class="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {salary}
          </div>
          <div class="lws-deadline">
            <i class="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <span class="hidden sm:block">
          <button
            type="button"
            class="lws-edit btn btn-primary"
            onClick={handleEditClick}
          >
            <i class="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
            Edit
          </button>
        </span>

        <span class="sm:ml-3">
          <button
            type="button"
            class="lws-delete btn btn-danger "
            onClick={() => handleDeleteClick()}
          >
            <i class="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default JobsListItem;

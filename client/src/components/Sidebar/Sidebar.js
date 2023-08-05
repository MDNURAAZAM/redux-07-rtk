import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFilter } from "../../features/filter/filtersSlice";
import { editingInActive } from "../../features/jobs/jobsSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleFilterClick = (filter) => {
    dispatch(addFilter(filter));
  };

  const handleAddJob = () => {
    dispatch(editingInActive());
  };
  return (
    <div class="sidebar">
      <nav>
        <ul class="space-y-4">
          <li>
            <Link
              to={"/"}
              class="main-menu menu-active"
              id="lws-alljobs-menu"
              onClick={() => handleFilterClick("")}
            >
              <i class="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </Link>
            <ul class="space-y-6 lg:space-y-2 ">
              <li onClick={() => handleFilterClick("Internship")}>
                <Link class="sub-menu" to={"./"} id="lws-internship-menu">
                  <i class="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </Link>
              </li>
              <li onClick={() => handleFilterClick("Full Time")}>
                <Link class="sub-menu" to={"/"} id="lws-fulltime-menu">
                  <i class="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </Link>
              </li>
              <li onClick={() => handleFilterClick("Remote")}>
                <Link to={"/"} class="sub-menu" id="lws-remote-menu">
                  <i class="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to={"/jobform"}
              class="main-menu"
              id="lws-addJob-menu"
              onClick={handleAddJob}
            >
              <i class="fa-solid fa-file-circle-plus"></i>
              <span>Add New Job</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

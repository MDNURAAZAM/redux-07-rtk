import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createJob, updateJob } from "../../features/jobs/jobsSlice";

const JobForm = () => {
  const { editing } = useSelector((state) => state.jobs);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reset = () => {
    setTitle("");
    setType("");
    setSalary("");
    setDeadline("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { title, type, salary, deadline };
    if (editing?.id > 0) {
      dispatch(updateJob({ id: editing.id, body }));
    } else {
      dispatch(createJob(body));
    }

    reset();
    navigate("/");
  };

  useEffect(() => {
    if (editing?.id > 0) {
      const { title, type, salary, deadline } = editing || {};
      setTitle(title);
      setType(type);
      setSalary(salary);
      setDeadline(deadline);
    } else {
      reset();
    }
  }, [editing]);
  return (
    <div class="lg:pl-[14rem] mt-[5.8125rem]">
      <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 class="mb-10 text-center lws-section-title">
          {editing?.id ? "Edit" : "Add New"} Job
        </h1>

        <div class="max-w-3xl mx-auto">
          <form class="space-y-6" onSubmit={handleSubmit}>
            <div class="fieldContainer">
              <label
                for="lws-JobTitle"
                class="text-sm font-medium text-slate-300"
              >
                Job Title
              </label>
              <select
                id="lws-JobTitle"
                name="lwsJobTitle"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="" hidden selected>
                  Select Job
                </option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Full Stack Developer">
                  Full Stack Developer
                </option>
                <option value="MERN Stack Developer">
                  MERN Stack Developer
                </option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="QA Engineer">QA Engineer</option>
                <option value=">Product Manager">Product Manager</option>
                <option value="Social Media Manager">
                  Social Media Manager
                </option>
                <option value="Senior Executive">Senior Executive</option>
                <option value="Junior Executive">Junior Executive</option>
                <option value="Android App Developer">
                  Android App Developer
                </option>
                <option value="IOS App Developer">IOS App Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
              </select>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobType">Job Type</label>
              <select
                id="lws-JobType"
                name="lwsJobType"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" hidden selected>
                  Select Job Type
                </option>
                <option value="Full Time">Full Time</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobSalary">Salary</label>
              <div class="flex border rounded-md shadow-sm border-slate-600">
                <span class="input-tag">BDT</span>
                <input
                  type="number"
                  name="lwsJobSalary"
                  id="lws-JobSalary"
                  required
                  class="!rounded-l-none !border-0"
                  placeholder="Please Enter Salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobDeadline">Deadline</label>
              <input
                type="date"
                name="lwsJobDeadline"
                id="lws-JobDeadline"
                required
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div class="text-right">
              <button
                type="submit"
                id="lws-submit"
                class="cursor-pointer btn btn-primary w-fit"
              >
                {editing?.id ? "Edit" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default JobForm;

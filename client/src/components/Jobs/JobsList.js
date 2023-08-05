import React, { useEffect } from "react";
import JobsListItem from "./JobsListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/jobs/jobsSlice";

const JobsList = () => {
  const { jobs, isLoading } = useSelector((state) => state.jobs);
  const {
    filter,
    search,
    sort: sortOption,
  } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs(filter));
  }, [dispatch, filter]);

  let content;
  if (jobs?.length === 0) {
    content = <p style={{ color: "white" }}>No Jobs Available</p>;
  } else {
    content = jobs
      ?.filter((job) => job.title.toLowerCase().includes(search.toLowerCase()))
      ?.sort((a, b) => {
        if (sortOption === "asc") {
          return a.salary > b.salary ? 1 : -1;
        }
        if (sortOption === "desc") {
          return a.salary < b.salary ? 1 : -1;
        }
        return true;
      })
      ?.map((job) => <JobsListItem key={job.id} job={job} />);
  }
  return (
    <div class="jobs-list">
      {/* <!-- Single Job 1--> */}
      {content}

      {/* <!-- Single Job 1--> */}
    </div>
  );
};

export default JobsList;

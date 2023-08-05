import React from "react";
import Filter from "../Filter/Filter";
import JobsList from "../Jobs/JobsList";

const JobsContainer = () => {
  return (
    <div class="lg:pl-[14rem]  mt-[5.8125rem]">
      <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <Filter />

        <JobsList />
      </main>
    </div>
  );
};

export default JobsContainer;

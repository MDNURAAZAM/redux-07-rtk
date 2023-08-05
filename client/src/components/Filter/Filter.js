import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearch, addSort } from "../../features/filter/filtersSlice";

const Filter = () => {
  const { filter } = useSelector((state) => state.filters);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSearch(search));
  }, [dispatch, search]);

  useEffect(() => {
    dispatch(addSort(sortBy));
  }, [dispatch, sortBy]);
  return (
    <div class="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 class="lws-section-title">
        {filter.length > 0 ? filter : "All Available Jobs"}
      </h1>
      <div class="flex gap-4">
        <div class="search-field group flex-1">
          <i class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search Job"
            class="search-input"
            id="lws-searchJob"
          />
        </div>
        <select
          id="lws-sort"
          name="sort"
          autocomplete="sort"
          class="flex-1"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value={""}>Default</option>
          <option value={"asc"}>Salary (Low to High)</option>
          <option value={"desc"}>Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

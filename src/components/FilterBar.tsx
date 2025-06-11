import React from "react";

type Props = {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
};

const FilterBar: React.FC<Props> = ({ currentFilter, onFilterChange }) => {
  const filters = ["All", "To Do", "Done"];

  return (
    <div className="flex space-x-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-3 py-1 w-full rounded ${
            currentFilter === filter
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;

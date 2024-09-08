import React, { useState } from "react";

function SearchOpportunities({ opportunities, onFilter }) {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = opportunities.filter((opportunity) =>
      opportunity.location.toLowerCase().includes(value) || 
      opportunity.title.toLowerCase().includes(value) ||
      opportunity.description.toLowerCase().includes(value)
    );

    onFilter(filtered); 
  };

  return (
    <input
      type="text"
      placeholder="Search events" 
      value={searchTerm}
      onChange={handleSearch}
      className="border rounded-full px-6 py-4 w-full md:w-1/2 mb-4"
    />
  );
}

export default SearchOpportunities;


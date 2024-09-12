import React, { useState, useEffect } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import SearchOpportunities from "./SearchOpportunities";
import MapOpportunities from "./MapOpportunities";
import OpportunityItem from "./OpportunityItem";

function Opportunities() {
  const [opportunities, setOpportunities] = useState([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All Issues");
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch data from the server
    const fetchOpportunities = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/v1/events`
        );
        const data = await response.json();

        // Map the API data to match with our structure
        const mappedData = data.map((item) => ({
          id: item._id,
          title: item.title,
          date: new Date(item.startDate).toLocaleDateString(),
          location: item.address,
          description: item.description,
          mainImageUrl:
            item.eventImages[0] || "placeholder-image-url.jpg",
          latitude: item.coordinates[0],
          longitude: item.coordinates[1],
          category: item.category,
        }));

        setOpportunities(mappedData);
        setFilteredOpportunities(mappedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOpportunities();
  }, []);

  // Sorting opportunities by id
  opportunities.sort((a, b) => b.id - a.id);

  // Extracting categories from the fetched opportunities
  const categories = Array.from(
    new Set(opportunities.map((item) => item.category))
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredOpportunities.length / itemsPerPage);
  const displayedOpportunities = filteredOpportunities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All Issues") {
      setFilteredOpportunities(opportunities);
    } else {
      setFilteredOpportunities(
        opportunities.filter((opportunity) => opportunity.category === category)
      );
    }
    setCurrentPage(1);
  };

  return (
    <>
      <section className="bg-slate-200 text-center py-10">
        <div className="container items-center mx-auto max-w-5xl px-4 py-4">
          {/* Search functionality */}
          <SearchOpportunities
            opportunities={opportunities}
            onFilter={setFilteredOpportunities}
          />
          {/* Category selection */}
          <div className="space-x-2 space-y-2">
            <button
              type="button"
              className={`px-6 py-3 border-2 ${
                selectedCategory === "All Issues"
                  ? "bg-slate-300 text-grey"
                  : "border-slate-300"
              } font-medium rounded-full`}
              onClick={() => handleCategorySelect("All Issues")}
            >
              All Issues
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                type="button"
                className={`px-6 py-3 border-2 ${
                  selectedCategory === category
                    ? "bg-slate-300 text-grey"
                    : "border-slate-300"
                } font-medium rounded-full`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container flex flex-col md:flex-row mx-auto max-w-5xl px-4 py-6 justify-between items-start space-x-0 md:space-x-8">
        <div className="w-full md:w-2/3">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold">
              {filteredOpportunities.length === 1
                ? `${filteredOpportunities.length} event available`
                : `${filteredOpportunities.length} events available`}
            </h2>
            <span className="text-slate-500">
              Showing {(currentPage - 1) * itemsPerPage + 1}-
              {Math.min(currentPage * itemsPerPage, filteredOpportunities.length)}
            </span>
          </div>
          <div className="mb-6">
            {displayedOpportunities.map((opportunity, index) => (
              <OpportunityItem
              key={index}
              opportunity={opportunity}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch space-y-4 md:space-y-0">
            <div className="md:flex-1 flex items-center md:justify-start">
              <span className="text-slate-500">
                Showing {(currentPage - 1) * itemsPerPage + 1}-
                {Math.min(currentPage * itemsPerPage, filteredOpportunities.length)}
              </span>
            </div>

            {filteredOpportunities.length > itemsPerPage && ( // Conditionally render buttons if more than 10 items
              <div className="flex justify-center space-x-4">
                {currentPage > 1 && (
                  <button
                    className="flex bg-slate-200 rounded-full px-5 py-2 space-x-2"
                    onClick={handlePrevPage}
                  >
                    <span>
                      <ArrowLongLeftIcon aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <span className="font-medium">Prev</span>
                  </button>
                )}
                {currentPage < totalPages && (
                  <button
                    className="flex bg-slate-200 rounded-full px-5 py-2 space-x-2"
                    onClick={handleNextPage}
                  >
                    <span className="font-medium">Next</span>
                    <span>
                      <ArrowLongRightIcon aria-hidden="true" className="h-6 w-6" />
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:block w-1/3">
          <MapOpportunities
            opportunities={displayedOpportunities}
          />
        </div>
      </div>
    </>
  );
}

export default Opportunities;

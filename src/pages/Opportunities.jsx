import React from "react";
import { opportunities } from "../util/data";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

function Opportunities() {
  opportunities.sort((a, b) => b.id - a.id);

  const categories = Array.from(
    new Set(opportunities.map((item) => item.category))
  );

  return (
    <>
      <section className="bg-slate-200 text-center py-10">
        <div className="container items-center mx-auto max-w-5xl px-4 py-4">
          <input
            type="text"
            placeholder="Default Location"
            className="border rounded-full px-6 py-4 w-full md:w-1/2 mb-4"
          />
          <div className="space-x-2 space-y-2">
            <button
              type="button"
              className="bg-slate-300 px-6 py-3 border-2 border-slate-300 font-medium rounded-full"
            >
              All Issues
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                type="button"
                className="px-6 py-3 border-2 border-slate-300 font-medium rounded-full"
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
              {opportunities.length} volunteers are needed
            </h2>
            <span className="text-slate-500">Showing 1-10</span>
          </div>
          <div className="mb-6">
            {opportunities.map((el, index) => (
              <div
                className="flex flex-col md:flex-row mb-8 border-b pb-8"
                key={index}
              >
                <div className="mb-4 md:mb-0 w-full md:w-48 md:h-32 flex-shrink-0 md:mx-0 md:mr-4">
                  <a href={`/opportunities/${el.id}`}>
                    <img
                      src={el.mainImageUrl}
                      alt={`Opportunity ${el.id}`}
                      className="w-full h-full max-w-xs max-h-48 mx-auto md:max-w-full md:max-h-full object-cover rounded"
                    />
                  </a>
                </div>
                <div>
                  <h4>
                    <a
                      href={`/opportunities/${el.id}`}
                      className="underline text-lg text-blue-500 hover:text-blue-400"
                    >
                      {el.title}
                    </a>
                  </h4>
                  <div className="text-sm text-slate-500">
                    <span>{el.date}, </span>
                    <span>{el.location}</span>
                  </div>
                  <p className="mb-2">
                    <a href={`/opportunities/${el.id}`}>{el.description}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch space-y-4 md:space-y-0">
            <div class="md:flex-1 flex items-center md:justify-start">
              <span class="text-slate-500">Showing 1-10</span>
            </div>
            <div class="flex justify-center space-x-4">
              <button class="flex bg-slate-200 rounded-full px-5 py-2 space-x-2">
                <span>
                  <ArrowLongLeftIcon aria-hidden="true" class="h-6 w-6" />
                </span>
                <span className="font-medium">Prev</span>
              </button>
              <button class="flex bg-slate-200 rounded-full px-5 py-2 space-x-2">
                <span className="font-medium">Next</span>
                <span>
                  <ArrowLongRightIcon aria-hidden="true" class="h-6 w-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-1/3">MAP</div>
      </div>
    </>
  );
}

export default Opportunities;

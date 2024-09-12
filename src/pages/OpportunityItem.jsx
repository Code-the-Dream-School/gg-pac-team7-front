import React from 'react';
import { Link } from 'react-router-dom';

function OpportunityItem({ opportunity }) {
  return (
    <Link
      to={`/opportunities/${opportunity.id}`}
      state={{ opportunityData: opportunity }}
      className="block mb-8"
    >
      <div className="flex flex-col md:flex-row border-b pb-8">
        <div className="mb-4 md:mb-0 w-full md:w-48 md:h-32 flex-shrink-0 md:mx-0 md:mr-4">
          <img
            src={opportunity.mainImageUrl}
            alt={`Opportunity ${opportunity.id}`}
            className="w-full h-full max-w-xs max-h-48 mx-auto md:max-w-full md:max-h-full object-cover rounded"
          />
        </div>
        <div>
          <h4 className="underline text-lg text-blue-500 hover:text-blue-400">
            {opportunity.title}
          </h4>
          <div className="text-sm text-slate-500">
            <span>{opportunity.date}, </span>
            <span>{opportunity.location}</span>
          </div>
          <p className="mb-2">{opportunity.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default OpportunityItem;

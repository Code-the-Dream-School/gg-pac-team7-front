import React from 'react';

function ContentContainer({ heading, className, children }) {
  return (
    <div className={`container mx-auto max-w-3xl px-4 py-8 ${className}`}>
      {heading && <h1 className="text-3xl font-bold mb-6">{heading}</h1>}
      {children}
    </div>
  );
}

export default ContentContainer;
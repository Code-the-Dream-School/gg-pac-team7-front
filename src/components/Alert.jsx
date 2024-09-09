import React from "react";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

function Alert({ type, title, children }) {
  return (
    <div
      className={`${
        type === "error"
          ? "bg-red-50 text-red-700"
          : "bg-green-50 text-green-700"
      } p-4 rounded-md mb-4`}
    >
      <div className="flex">
        <div className="flex-shrink-0 relative" style={{ top: "-2px" }}>
          {type === "error" ? (
            <XCircleIcon aria-hidden="true" className="h-6 w-6 text-red-400" />
          ) : (
            <CheckCircleIcon aria-hidden="true" className="h-6 w-6 text-green-400" />
          )}
        </div>
        <div className="ml-3 space-y-2">
          {title && <h3 className="text-sm font-medium">{title}</h3>}
          {children && <div className="text-sm">{children}</div>}
        </div>
      </div>
    </div>
  );
}

export default Alert;

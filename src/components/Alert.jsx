import React from "react";
import { XCircleIcon, CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

function Alert({ type, title, children }) {
  const styles = {
    error: {
      container: "bg-red-50 text-red-700",
      icon: <XCircleIcon aria-hidden="true" className="h-6 w-6 text-red-400" />,
    },
    success: {
      container: "bg-green-50 text-green-700",
      icon: <CheckCircleIcon aria-hidden="true" className="h-6 w-6 text-green-400" />,
    },
    info: {
      container: "bg-blue-50 text-blue-700",
      icon: <InformationCircleIcon aria-hidden="true" className="h-6 w-6 text-blue-400" />,
    },
  };

  const currentStyle = styles[type] || styles.info; // 'info' by default

  return (
    <div className={`${currentStyle.container} p-4 rounded-md mb-4`}>
      <div className="flex">
        <div className="flex-shrink-0 relative" style={{ top: "-2px" }}>
          {currentStyle.icon}
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

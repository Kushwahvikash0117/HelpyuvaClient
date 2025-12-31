import React from "react";
export default function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#2E5658]">
        {title}
      </h1>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

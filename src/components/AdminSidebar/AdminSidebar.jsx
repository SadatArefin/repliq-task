import React from "react";

const AdminSidebar = () => {
  return (
    // Admin Sidebar with tailwind
    <div className="flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Admin Dashboard"
            />
          </div>
          <div className="ml-2 text-xl font-semibold text-gray-700">
            Admin Dashboard
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 h-0 overflow-y-auto">
        {/* Navigation sidebar with react router links and dashboard home, admin products and admin customers */}
        <nav className="flex-1 px-2 py-4 bg-white">
          <a
            href="/admin"
            className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-800 transition-colors duration-150 hover:text-gray-800 hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5 mr-3"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ></svg>
            <span>Dashboard</span>
          </a>
          <a
            href="/admin/products"
            className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-800 transition-colors duration-150 hover:text-gray-800 hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5 mr-3"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ></svg>
            <span>Products</span>
          </a>
          <a
            href="/admin/customers"
            className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-800 transition-colors duration-150 hover:text-gray-800 hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5 mr-3"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ></svg>
            <span>Customers</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;

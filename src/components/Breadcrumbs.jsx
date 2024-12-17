import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumbs = ({ links }) => {
  return (
    <nav className="mt-8" aria-label="breadcrumb">
      <ol className="flex space-x-2 text-gray-600">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            {index !== links.length - 1 ? (
              <>
                <Link to={link.path} className="text-txtColor text-xs hover:underline">
                  {link.label}
                </Link>
                <span className="mx-2"><MdKeyboardArrowRight /></span>
              </>
            ) : (
              <span className="text-blue-500 text-xs ">{link.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

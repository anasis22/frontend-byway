import React, { useState } from "react";
import { useData } from "../contexts/DataContexts";

const CartCount = () => {
  const { buyedCoursesCount } = useData();
  return (
    <div className="absolute bottom-2 left-4">
      <span className="text-xs font-light bg-red-500 text-white px-1 py-0.5 rounded-md">{buyedCoursesCount}</span>
    </div>
  );
};

export default CartCount;

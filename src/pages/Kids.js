import React from "react";
import { Market } from "../components/Market";
import { useSelector } from "react-redux";

export const Kids = () => {
  const items = useSelector((state) => state.items);

  return (
    <div>
      <Market items={items} />
    </div>
  );
};

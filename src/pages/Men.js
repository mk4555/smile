import React from "react";
import { Market } from "../components/Market";
import { useSelector } from "react-redux";
export const Men = () => {
  const items = useSelector((state) => state.items);

  console.log(items);
  return (
    <div>
      <Market />
    </div>
  );
};

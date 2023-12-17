import React from "react";
import "./Category.css";

const Category = ({ category }) => {
  const { category_name, availability, logo } = category;
  return (
    <div className="category text-left">
      <img src={logo} alt="" className="mb-5 p-2" />
      <h2>{category_name}</h2>
      <p>{availability}</p>
    </div>
  );
};

export default Category;

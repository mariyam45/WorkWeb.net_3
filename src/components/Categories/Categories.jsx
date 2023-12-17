import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import "./Categories.css";
// import url from "../../../public/data/categories.json";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="md:w-4/6  mx-auto mt-14 text-center cate">
      <h1>Job Category List</h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="categories mt-4 grid-cols-4">
        {categories.map((category) => (
          <Category category={category} key={category.id}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;

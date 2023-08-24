import React from "react";

const Category = ({ handleCategoryClick }) => {
  return (
    <div className="navbar navbar-light">
      <ul className="nav nav-pills">
        <li>
          <button onClick={() => handleCategoryClick("all")}>Tümü</button>
        </li>
        <li>
          <button onClick={() => handleCategoryClick("0")}>Sıcak İçecekler</button>
        </li>
        <li>
          <button onClick={() => handleCategoryClick("1")}>Soğuk İçecekler</button>
        </li>
      </ul>
    </div>
  );
};

export default Category;

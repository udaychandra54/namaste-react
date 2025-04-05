import React from "react";

const RestaurantCard = (props) => {
  const recipe = props.recipe;
  const { image, name, rating, ingredients, cookTimeMinutes } = recipe;
  return (
    <div className="res-container">
      <img src={image} className="res-image" alt="res-image" />
      <h3>{name}</h3>
      <h4 style={{ marginBottom: "1px" }}>Ingredients : </h4>
      <p style={{ wordWrap: "break-word" }}>{ingredients.join(",")}</p>
      <p>Time : {cookTimeMinutes} mins</p>
      <p>Rating : {rating}</p>
    </div>
  );
};

export default RestaurantCard;

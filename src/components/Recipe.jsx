import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const params = useParams();
  console.log("params", params);

  useEffect(() => {
    if (!params.id) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/recipes/${params.id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data", data);
        // setRecipe(data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("recipe component");
  return <div style={{ margin: "10px" }}>Recipe component</div>;
};

export default Recipe;

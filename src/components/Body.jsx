import React, { useEffect, useState, useMemo } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data.recipes);
        setFilteredData(data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const topRatedData = useMemo(() => {
    if (!data) return [];
    return [...data].sort((a, b) => b.rating - a.rating);
  }, [data]);

  const handleSearch = () => {
    setFilteredData((prevData) => {
      console.log("searchInput", searchInput);
      return prevData.filter((d, i) => {
        console.log("enter", d);
        return d.name.toLowerCase().includes(searchInput.toLowerCase());
      });
    });
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setFilteredData(data);
    } else {
      setFilteredData((prevData) => {
        console.log("changing");
        return prevData.filter((d, i) => {
          return d.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
      });
    }
  };
  useEffect(() => {
    console.log("filteredData", filteredData);
  }, [filteredData]);
  return (
    <div className="main-div">
      <div id="search-div">
        <input
          type="text"
          name="search"
          id="search"
          value={searchInput}
          onChange={handleChange}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={() => setData(topRatedData)}>
          Top Rated Recipes
        </button>
      </div>
      <div className="body">
        {loading && <h3>Loading.....</h3>}
        {filteredData?.map((d, i) => {
          return <RestaurantCard recipe={d} key={i + "recipe"} />;
        })}
      </div>
    </div>
  );
};

export default Body;

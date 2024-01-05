import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  // Setting state with useState hook
  const [inputValue, setInputValue] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // Initial API call to fetch data using useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const cats = await response.json();
        setMonsters(cats);
        console.log(cats);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once, equivalent to componentDidMount

  // Filter the monsters array only when search input or monsters array state changes!
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, inputValue]);

  // Search input change handler
  const onSearchChange = (event) => {
    console.log(event.target.value);

    const searchFieldString = event.target.value;

    setInputValue(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Cats Rolodex (Hooks)</h1>

      <SearchBox
        className="monsters-search-box"
        placeholder="Search cats..."
        onSearchChange={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

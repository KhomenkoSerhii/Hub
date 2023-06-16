"use client";
import { useState } from "react";
import { SearchManufacturer } from "./";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>("");

  const heandleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("search");
  };
  return (
    <form className="searchbar__item" onSubmit={heandleSearch}>
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    </form>
  );
};

export default SearchBar;

import React, { useState, useEffect } from "react";

const Search = () => {
  const data = [
    { name: "sanchit", age: 21, job: "berozgar" },
    { name: "arun", age: 21, job: "berozgar" },
    { name: "monu", age: 21, job: "berozgar" },
    { name: "tiku", age: 21, job: "berozgar" },
    { name: "chiku", age: 21, job: "berozgar" },
    { name: "nonu", age: 21, job: "berozgar" },
  ];

  const [filteredData, setFilteredData] = useState('');
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredData(data);
  }, []);

  const handleSearch = (e) => {
    const searchWord = e.target.value;
    setSearchTerm(searchWord);
    const newFilter = data.filter((value) =>
      value.name.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFilteredData(newFilter);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onClick={handleSearch}
      />
      <div>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index}>
              <h2>{item.name}</h2>
              <p>Age: {item.age}</p>
              <p>Job: {item.job}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </>
  );
};

export default Search;
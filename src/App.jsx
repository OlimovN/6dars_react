import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);
  const boshlangichRef = useRef();
  const tugashRef = useRef();

  async function api(url) {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        console.error("error");
        return [];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  useEffect(() => {
    api("https://jsonplaceholder.typicode.com/photos")
      .then((data) => {
        setUser(data);
        setFilteredUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFilter = () => {
    const boshlangichId = boshlangichRef.current.value;
    const tugashId = tugashRef.current.value;
    const filtered = user.filter(
      (item) => item.id >= boshlangichId && item.id <= tugashId
    );
    setFilteredUser(filtered);
  };

  return (
    <div className="App">
      <div className="filter">
        <input
          type="number"
          placeholder="Boshlangich Id"
          ref={boshlangichRef}
        />
        <input type="number" placeholder="Tugash Id" ref={tugashRef} />
        <button onClick={handleFilter}>Filter</button>
      </div>
      <div className="cards">
        {filteredUser.slice(0, 60).map((item) => (
          <div className="user-card" key={item.id}>
            <img src={item.thumbnailUrl} alt={item.title} />
            <div className="card-content">
              <h1>AlbumId: {item.albumId}</h1>
              <h1>{item.title}</h1>
              <p>Id: {item.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Heading from "./commponent/Heading";

function App() {
  const [iplData, setIplData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
      );
      const data = await response.json();
      setIplData(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="mydiv m-auto mt-5 text-center">
        <h1>TEAM STATUS</h1>
        <Heading iplTeam={iplData} />
      </div>
    </>
  );
}

export default App;

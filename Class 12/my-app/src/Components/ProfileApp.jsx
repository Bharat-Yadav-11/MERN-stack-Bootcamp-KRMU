import React, { useEffect, useState } from "react";
import Card from "./Card";

import "./style.css";

const ProfileApp = () => {
  const [loading, setLoading] = useState(false);

  let apiUrl = "https://jsonplaceholder.typicode.com/users";

  const [userData, setUserData] = useState([]);

  async function getUser() {
    setLoading(true);
    console.log(loading);
    let response = await fetch(apiUrl);
    let data = await response.json();
    // console.log(data);
    setUserData(data);
    setLoading(false);
  }

  useEffect(() => {
    getUser();
  }, []);

  console.log(loading);

  return (
    <div>
      <h1>Profile App...</h1>
      <div className="parent">
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          userData.map((element, i) => {
            return <Card {...element} key={i} />;
          })
        )}
        
      </div>
    </div>
  );
};

export default ProfileApp;

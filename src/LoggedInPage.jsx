import React from "react";
import TempCard from "./TempCard";

function LoggedInPage() {
  const username = sessionStorage.getItem("username");
  // Correct data structure with consistent keys
  const data = [
    { name: "Jan" },
    { name: "Feb"},
    { name: "Mar"},
    { name: "Apr"},
    { name: "May"},
    { name: "Jun"},
    { name: "Jul"},
  ];

  return (
    <div style={{ backgroundColor: "#432E54", color: "#FFFFFF", minHeight: "100vh", padding: "2rem" }}>
      <h1>Welcome, {username}!</h1>
      {
        data.map(item =>{
            return <TempCard {...item} />
        })
      }
    </div>
  );
}

export default LoggedInPage;





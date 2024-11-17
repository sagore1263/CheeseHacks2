import React, {useState, useEffect} from "react";
import TempCard from "./TempCard";
import {Row, Button} from "react-bootstrap";

function LoggedInPage() {
  const [data2, setData] = useState([])
  const username = sessionStorage.getItem("username");
  const [days, setDays] = useState(0)
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

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:8000/dayinc?x=1'); 
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/listdatasets'); 
        const jsonData = await response.json();
        let toSet = [{name: jsonData[0]}]
        for (let i = 1; i<jsonData.length; i++){
            toSet.push({name: jsonData[i]});
        }
        console.log("Reached")
        console.log(jsonData)
        setData(toSet);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "#432E54", color: "#FFFFFF", minHeight: "100vh", padding: "2rem" }}>
     <Row> 
      <h1>Welcome, {username}!</h1> 
      <Button  
      variant="primary"
      onClick={() => setDays(days + 1)}
      className="w-100 mt-3">
        Step Through Days :
        Currently on day {days}
      </Button>
     </Row>
      {data2.map((item) => (
          <TempCard {...item} />
        ))}
    </div>
  );
}

export default LoggedInPage;





import React, {useState, useEffect} from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function LoggedInPage(props) {
  const [data2, setData] = useState([])
  const username = sessionStorage.getItem("username");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/${props.name}`); 
        const jsonData = await response.json();
        let toSet = [{name: jsonData.Close[0]}]
        for (let i = Object.values(jsonData.Close).length-100; i<Object.values(jsonData.Close).length-1; i++){
            toSet.push({name: jsonData.Close[i]});
        }
        console.log("Reached")
        console.log(jsonData.Close)
        let clo= jsonData.Close;
        console.log(Object.values(clo))
        setData(toSet);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "#432E54", color: "#FFFFFF", padding: "2rem" }}>
      <p>Here is your predicted stock performance chart for {props.name.replace(".csv","")}:</p>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data2}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis stroke="#FFFFFF" />
          <YAxis stroke="#FFFFFF" />
          <CartesianGrid strokeDasharray="3 3" stroke="#4A4A65" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="name"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />

        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LoggedInPage;
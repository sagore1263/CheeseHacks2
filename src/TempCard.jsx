import React, { useState } from 'react';
import { Card, Button, Modal, Row, Col } from 'react-bootstrap';
import Chart from "./Chart.jsx"

export default function TempCard(props){
  const [showGraph, setShowGraph] = useState(false);

  function handleGraph(){
    setShowGraph(!showGraph)
  }

    return <Card style={{ backgroundColor: '#2a2a3d', padding: '1rem' } }>
    <Card.Body >
      <Card.Title style={{ color: '#8B5DFF' }}>{props.name}</Card.Title>
      <Button
        variant="success"
        style={{
          background: 'linear-gradient(145deg, #4caf50, #388e3c)',
          border: 'none',
          borderRadius: '10px',
          padding: '10px 20px',
          fontWeight: 'bold',
          transition: 'transform 0.2s ease',
        }}
        onClick={handleGraph}
      >
         {showGraph ? 'Hide Graph' : 'View Graph'}
      </Button>
    </Card.Body>
    {showGraph && <Chart />}
  </Card>

}

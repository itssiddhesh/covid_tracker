import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'

export default function OutlinedCard(props) {
  
  const time = new Date(props.update).toLocaleDateString();

  return (
      <div className={`card ${props.color}`}>
          <h2>{props.type}</h2>
          <h3>{props.loading ? <Spinner animation="border" />:props.status}</h3>
          <p>Last updated :  {time}</p>
      </div>
  );
}


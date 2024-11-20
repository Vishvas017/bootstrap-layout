import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';




import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row className="bg-dark text-white p-3 ">
        <Col>
          <h1>Header</h1>
        </Col>
      </Row>

      <Row className="">
        

        <Col xs={9} className="p-3">
          <Card className="bg-dark text-white p-3 mb-3 h-50">
          </Card>

          <Row>
            {Array.from({ length: 8 }).map((_, index) => (
              <Col xs={3} className="mb-3" key={index}>
                <Card>
                  <Card.Body> {index + 1}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        <Col xs={3} className="bg-light p-3 ">
          <Card className="bg-dark text-white p-3 mb-3 h-50">
            <Card.Body></Card.Body>
          </Card>
          <Card className="bg-dark text-white p-3 mb-3">
            <Card.Body></Card.Body>
          </Card>
          {Array.from({ length: 2 }).map((_, index) => (
              <Col xs={12} className="mb-3" key={index}>
                <Card>
                  <Card.Body> {index + 1}</Card.Body>
                </Card>
              </Col>
            ))}
        </Col>
        
        
        
      </Row>
      
    </Container>
  );
}

export default App;


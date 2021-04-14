import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup } from 'react-bootstrap';
import './App.css';
import rock from "./images/rock.png";
import paper from "./images/paper.png";
import scissors from "./images/scissors.png";




const ChoiceCard = (props) => {
  console.log("Props:", props);
  return (
    <div className={`choice-card ${props.winner === "win"
      ? "border-success"
        ? props.winner === "loss"
        : "border-danger"
      : "border-dark"
      }`}>
      <p>{props.title}</p>
      <img src={props.shape === 'rock' ? rock : props.shape === 'paper' ? paper : scissors} alt={props.shape} />
      <p>{props.winner === 'win' ? 'WIN' : props.winner === 'tie' ? 'TIE' : 'LOSS'}</p>
      <p>{props.score}</p>
    </div >
  );
};




function Navigationbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Rock Paper Scissors</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}




function App() {
  const shapes = ["rock", "paper", "scissors"];
  const [playerName, setplayerName] = useState("Player")
  const [playerChoice, setPlayerChoice] = useState("");
  const [playerResult, setPlayerResult] = useState("tie");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState("");
  const [computerResult, setComputerResult] = useState("tie");
  const [computerScore, setComputerScore] = useState(0);

  const randomMove = (move) => {
    const newComputerChoice = shapes[Math.floor(Math.random() * 3)];
    // const newPlayerChoice = shapes[Math.floor(Math.random() * 3)];
    setPlayerChoice(move);
    setComputerChoice(newComputerChoice);
    calculateWinner(newComputerChoice, move);
  };

  const calculateWinner = (computerChoice, playerChoice) => {
    if (computerChoice === playerChoice) {
      setComputerResult("tie");
      setPlayerResult("tie");
    } else if (computerChoice === 'rock') {
      if (playerChoice === 'paper') {
        setComputerResult("loss");
        setPlayerResult("win");
        setPlayerScore(playerScore + 1);
      } else {
        setComputerResult("win");
        setComputerScore(computerScore + 1);
        setPlayerResult("loss");
      }
    } else if (computerChoice === 'paper') {
      if (playerChoice === 'scissors') {
        setComputerResult("loss");
        setPlayerResult("win");
        setPlayerScore(playerScore + 1);
      } else {
        setComputerResult("win");
        setComputerScore(computerScore + 1);
        setPlayerResult("loss");
      }
    } else {
      if (playerChoice === 'rock') {
        setComputerResult("loss");
        setPlayerResult("win");
        setPlayerScore(playerScore + 1);
      } else {
        setComputerResult("win");
        setComputerScore(computerScore + 1);
        setPlayerResult("loss");
      }
    }
  };

  const handleChange = (event) => {
    setplayerName(event.target.value)
  }

  const restart = () => {
    setplayerName("Player")
    setPlayerChoice("");
    setPlayerResult("tie");
    setPlayerScore(0);
    setComputerChoice("");
    setComputerResult("tie");
    setComputerScore(0);
  };


  return (
    <div className="App">
      <Navigationbar />
      <input className="m-4" onChange={(event) => handleChange(event)}></input>
      <div className="d-flex justify-content-center flex-wrap">
        <ChoiceCard title={playerName} winner={playerResult} shape={playerChoice} score={playerScore} />
        <ChoiceCard title="Computer" winner={computerResult} shape={computerChoice} score={computerScore} />
      </div>
      <ButtonGroup>
        <Button onClick={() => randomMove('rock')}>Rock</Button>
        <Button onClick={() => randomMove('paper')}>Paper</Button>
        <Button onClick={() => randomMove('scissors')}>Scissors</Button>
        <Button onClick={restart}>Restart</Button>
      </ButtonGroup>

    </div >
  );
}

export default App;

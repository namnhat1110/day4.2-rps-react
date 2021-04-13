import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
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
      <img src={props.shape === 'rock' ? rock : props.shape === 'paper' ? paper : scissors} alt={props.shape} />
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

  let computerChoice = 'rock';
  let playerChoice = 'paper';
  let computerResult = 'loss';
  let playerResult = 'win';

  const randomMove = () => {
    computerChoice = shapes[Math.floor(Math.random() * 3)];
    playerChoice = shapes[Math.floor(Math.random() * 3)];
    console.log("Computer: ", computerChoice);
    console.log("Player: ", playerChoice);
  };

  const calculateWinner = () => {
    if (computerChoice === playerChoice) {
      computerResult = 'tie';
      playerResult = 'tie';
    } else if (computerChoice === 'rock') {
      if (playerChoice === 'paper') {
        computerResult = 'loss';
        playerResult = 'win';
      } else {
        computerResult = 'win';
        playerResult = 'loss';
      }
    } else if (computerChoice === 'paper') {
      if (playerChoice === 'scissors') {
        computerResult = 'loss';
        playerResult = 'win';
      } else {
        computerResult = 'win';
        playerResult = 'loss';
      }
    } else {
      if (playerChoice === 'rock') {
        computerResult = 'loss';
        playerResult = 'win';
      } else {
        computerResult = 'win';
        playerResult = 'loss';
      }
    }
  };

  const play = () => {
    randomMove();
    calculateWinner();
  };

  play();


  return (
    <div className="App">
      <Navigationbar />
      <div className="d-flex justify-content-center flex-wrap">
        <ChoiceCard title="You" winner={playerResult} shape={playerChoice} />
        <ChoiceCard title="Computer" winner={computerResult} shape={computerChoice} />
      </div>
      <Button onClick={play}>Random</Button>
    </div >
  );
}

export default App;

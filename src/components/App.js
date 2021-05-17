import React, { useState, useEffect } from "react";
import Map from "./Map";
import socket from "./Socket";
import Chat from "./Chat";
import{ Container, Row, Col, Table, Button, Form, InputGroup  } from "react-bootstrap";


const App = () => {

  const [flightsInfo, setFlightsInfo] = useState([]);

  const [user, setUser] = useState('');

  const [name, setName] = useState('');

  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket.emit("FLIGHTS");
    return ()=>{socket.off()};
  }, []);

  useEffect(() => {
      socket.on("FLIGHTS", data => {
          setFlightsInfo((the_flights) => {
            let new_flights = [];
            for (let index = 0; index < data.length; index++) {
              let element = data[index];
              element.positions =[element.origin];
              element.color = "#"+ Math.floor(Math.random()*16777215).toString(16);
              new_flights.push(element);
            }
            return new_flights
          });
      });
      return ()=>{socket.off()};
  }, []);

  const login = (e) => {
    setUser(name);
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    socket.emit("CHAT", {name: user, message: newMessage});
    setNewMessage('');
    e.preventDefault();
  }

  
  return (
    <Container fluid>
      <Row>
        <Col>
          <h3> Mapa en vivo</h3>
        </Col>
        <Col>
          <h3>Chat en vivo. Usuario en línea: {user || "No hay usuario"} </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          {flightsInfo.length !== 0 ? (<Map flights={flightsInfo}/>): null}
        </Col>
        <Col className="d-flex flex-column">
        <Chat user={user}/>
        {user ? (
          <Form onSubmit={(e)=>{handleSubmit(e)}}>
            <Form.Group className="m-2">
              <InputGroup>
                  <Form.Control
                  as="textarea"
                  required
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                  style={{ height: '75px', resize: 'none' }}
                  />
                  <InputGroup.Append>
                      <Button type="submit">Enviar</Button>
                  </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
          ) : (
          <Form onSubmit={login} title="Login">
            <Form.Group className="m-2">
              <InputGroup>
                  <Form.Control
                  as="textarea"
                  required
                  value={name}
                  onChange={ e => setName(e.target.value)}
                  placeholder="Escriba su nombre para poder participar en el chat"
                  style={{ height: '75px', resize: 'none' }}
                  />
                  <InputGroup.Append>
                      <Button type="submit">Login</Button>
                  </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>)}
        </Col>
      </Row>
      <Row>
        <Button variant="primary" onClick={(e)=>{socket.emit("FLIGHTS");}}>
          Obtener Información de los vuelos
        </Button>
        {flightsInfo?(       
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Vuelo</th>
                <th>Aerolinea</th>
                <th>Origen</th>
                <th>Destino</th>
                <th>Avión</th>
                <th>Cantidad de Asientos</th>
                <th>Pasajeros</th>
              </tr>
            </thead>
            <tbody>
            {flightsInfo.map(f=>{
              return(
                <tr>
                  <td>{f.code}</td>
                  <td>{f.airline}</td>
                  <td>Latitud:{f.origin[0]}, Longitud:{f.origin[1]}</td>
                  <td>Latitud:{f.destination[0]}, Longitud:{f.destination[1]}</td>
                  <td>{f.plane}</td>
                  <td>{f.seats}</td>
                  <td colspan={f.passengers.length}>
                    {f.passengers.map((p)=>{
                      return(
                        <td><tr>Nombre {p.name}</tr><tr>Edad: {p.age}</tr></td>
                      )
                    })}
                  </td>
                </tr>
              )
            })}
            </tbody>
            </Table>):null}

      </Row>
    </Container>
  );
}

export default App;

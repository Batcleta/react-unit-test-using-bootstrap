import "./App.css";
import AppService from "./App.service";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [calcular, contatenarNumero, Soma, Subtracao, Divisao, Multiplicacao] =
    AppService();

  const [txtNumeros, setTxtNumeros] = useState("0");
  const [numero1, setNumero1] = useState("0");
  const [numero2, setNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null);

  const adicionarNumero = (e) => {
    const numero = e.target.innerHTML;
    let resultado;
    if (operacao === null) {
      resultado = contatenarNumero(numero1, numero);
      setNumero1(resultado);
    } else {
      resultado = contatenarNumero(numero2, numero);
      setNumero2(resultado);
    }
    setTxtNumeros(resultado);
  };

  const definirOperação = (operador) => {
    const op = operador.target.innerHTML;
    if (operacao === null) setOperacao(op);
    if (numero2 !== null) {
      const resultado = calcular(+numero1, +numero2, operacao);
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado.toString());
    }
  };

  const acaoCalcular = () => {
    if (numero2 === null) {
      return;
    }
    const resultado = calcular(+numero1, +numero2, operacao);
    setTxtNumeros(resultado.toString());
  };

  const apagarTudo = () => {
    setTxtNumeros("0");
    setNumero1("0");
    setNumero2(null);
    setOperacao(null);
  };

  return (
    <div
      className="container-fluid text-light p-2 m-1"
      style={{
        background: "transparent !important",
        backgroundColor: "#007bff",
        width: "340px",
      }}
    >
      <Container className="p-1">
        <Row>
          <Col xs="3">
            <Button variant="danger" onClick={apagarTudo}>
              C
            </Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              name="txtNumeros"
              data-testid="txtNumeros"
              className="text-right"
              readOnly
              value={txtNumeros}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={adicionarNumero}>
              7
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={adicionarNumero}>
              8
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={adicionarNumero}>
              9
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={definirOperação}>
              /
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={adicionarNumero}>
              4
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={adicionarNumero}>
              5
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={adicionarNumero}>
              6
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={definirOperação}>
              *
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={adicionarNumero}>
              1
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={adicionarNumero}>
              2
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={adicionarNumero}>
              3
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={definirOperação}>
              -
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={adicionarNumero}>
              0
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={adicionarNumero}>
              .
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={acaoCalcular}>
              =
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={definirOperação}>
              +
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

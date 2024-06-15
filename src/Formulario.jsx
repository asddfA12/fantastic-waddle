import React from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Row, 
  Col 
} from 'reactstrap';

function Formular() {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="introduce tu Email"
              type="email"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="introduce la contraseña">
              Contraseña
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Introduce la contraseña"
              type="password"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">
          Direccion
        </Label>
        <Input
          id="exampleAddress"
          name="address"
          placeholder="Incluye tu direccion para la entrega de tu pedido"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">
          Detalles
        </Label>
        <Input
          id="exampleAddress2"
          name="address2"
          placeholder="Por favor introduce detalles para hacer más sencillo tu pedido"
        />
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">
              Ciudad
            </Label>
            <Input
              id="De que ciudad haces tu pedido?"
              name="city"
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">
              Municipio
            </Label>
            <Input
              id="por favor introduce tu municipio"
              name="state"
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">
              Telefono/Celular
            </Label>
            <Input
              id="exampleZip"
              name="zip"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup check>
        <Input
          id="exampleCheck"
          name="check"
          type="checkbox"
        />
        <Label
          check
          for="exampleCheck"
        >
          Checa tu pedido por favor
        </Label>
      </FormGroup>
      <Button>
        Estoy de acuerdo con todo mi pedido
      </Button>
    </Form>
  );
}

export default Formular;

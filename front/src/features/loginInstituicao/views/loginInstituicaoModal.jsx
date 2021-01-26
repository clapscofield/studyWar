import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal
} from "reactstrap";
import classnames from "classnames";

const LoginInstituicaoModal = (props) => {
  const {
    modalAberto,
    setModalAberto,
    usuario,
    setUsuario,
    senha,
    setSenha
  } = props;

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <Modal
      modalClassName="modal-black"
      isOpen={modalAberto}
      toggle={() => setModalAberto(false)}
    >
      <div className="modal-header justify-content-center">
        <button className="close" onClick={() => setModalAberto(false)}>
          <i className="tim-icons icon-simple-remove text-white" />
        </button>
        <div className="text-muted text-center ml-auto mr-auto">
          <h3 className="mb-0">Login Instituição</h3>
        </div>
      </div>
      <div className="modal-body">
        <div className="text-center text-muted mb-4 mt-3">
          <small>Entre com suas credenciais</small>
        </div>
        <Form role="form">
          <FormGroup className="mb-3">
            <InputGroup
              className={classnames("input-group-alternative", {
                "input-group-focus": emailFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-email-85" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Usuário"
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                onFocus={(e) => setEmailFocus(true)}
                onBlur={(e) => setEmailFocus(false)}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup
              className={classnames("input-group-alternative", {
                "input-group-focus": passwordFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-key-25" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                onFocus={(e) => setPasswordFocus(true)}
                onBlur={(e) => setPasswordFocus(false)}
              />
            </InputGroup>
          </FormGroup>
          <div className="text-center">
            <Button className="my-4" color="primary" type="button">
              Entrar
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default LoginInstituicaoModal;

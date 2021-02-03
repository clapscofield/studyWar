import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const ModalCancelamento = (props) => {
  const { modalAberto, setModalAberto, acaoSair } = props;

  return (
    <>
      <Modal isOpen={modalAberto} toggle={() => setModalAberto(!modalAberto)}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Atenção!
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-hidden="true"
            onClick={() => setModalAberto(false)}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </div>
        <ModalBody>
          <p>
            Deseja mesmo parar o cronômetro de estudo? Suas horas de estudo até
            agora serão perdidas!
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => setModalAberto(false)}>
            Continuar a estudar
          </Button>
          <Button
            color="danger"
            onClick={() => {
              acaoSair(false);
              setModalAberto(false);
            }}
          >
            Interromper estudo
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default ModalCancelamento;

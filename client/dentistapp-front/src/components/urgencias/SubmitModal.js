import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "../../assets/styles/modal.css";
import { createData } from "../../crud/createData";
import { apiUrl } from "../../datahelpers/apiURL";
import { FormattedMessage } from "react-intl";

const customStyles = {
  content: {
    width: "auto",
    height: "auto",

  },
};
if (process.env.NODE_ENV !== "test") {
  Modal.setAppElement("#root");
}
export const SubmitModal = ({ modalOpen, setModalOpen, emergencyData }) => {
  const [data, setData] = useState({ loading: true, error: null, data: {} });
  const closeModal = () => {
    console.log("Fuiiiira");
  };

  const dispatchCreat = async () => {
    const resp = await createData(emergencyData.current, apiUrl.emergency);

    setData(resp);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      isOpen={modalOpen}
      onAfterOpen={dispatchCreat}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
      ariaHideApp={false}
    >
      {data.error && <h1>
        <FormattedMessage
          id="message.serverError"
          defaultMessage="Ha ocurrido un error conectando con el servidor"
        />
      </h1>}

      {data.loading ? (
        <h1>
          <FormattedMessage
            id="message.loading"
            defaultMessage="Cargando..."
          />
        </h1>
      ) : data.data.ok ? (
        <div className="modal-content">
          {" "}
          <h1>
          <FormattedMessage
            id="message.processed"
            defaultMessage="Sus datos han sido procesados"
          />
            </h1>
          <div className="processed-modal-img-cont"></div>
          <button className="btn-next modal-btn">
            <Link to="/">Cerrar</Link>
          </button>
        </div>
      ) : (
        <div className="modal-content">
          {" "}
          <h1>
          <FormattedMessage
            id="message.error"
            defaultMessage="Ha ocurrido un error"
          />
          </h1>
          <div className="error-modal-img-cont"></div>
          <button className="btn-next modal-btn error" onClick={handleCloseModal}>
          <FormattedMessage
            id="message.return"
            defaultMessage="Volver"
          />
          </button>
        </div>
      )}
    </Modal>
  );
};

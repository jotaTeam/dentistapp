import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "../../assets/styles/modal.css";
import { createData } from "../../crud/createData";
import { apiUrl } from "../../datahelpers/apiURL";

const customStyles = {
  content: {
    width: "50vw",
    height: "50vh",
    position: "absolute",
    left: "25%",
    top: "25%",
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
      {data.error && <h1>Ha ocurrido un error conectando con el servidor</h1>}

      {data.loading ? (
        <h1> Aquí va el cargando...</h1>
      ) : data.data.ok ? (
        <div>
          {" "}
          <h1>Su urgencia ha sido procesada</h1>
          <button className="btn-next">
            <Link to="/">Cerrar</Link>
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <h1>Ha ocurrido un error</h1>
          <button className="btn-next" onClick={handleCloseModal}>
            Volver
          </button>
        </div>
      )}
    </Modal>
  );
};

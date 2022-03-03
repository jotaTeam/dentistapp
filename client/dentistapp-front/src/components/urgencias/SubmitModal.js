import Modal from "react-modal";
import {Link} from "react-router-dom";
import '../../assets/styles/modal.css';

const customStyles = {
  content: {
    width: "50vw",	
    height: "50vh",
    position: "absolute",
    left: "25%",
    top: "25%",

/*     background: "white", */
/*     margin: "auto" */

/*         top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)', */
  },
};
if(process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root');
}
export const SubmitModal = ({modalOpen}) => {
  const closeModal = () => {
    console.log("Fuiiiira");
  };

  const handleClose = () => {

  }


  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
      ariaHideApp={false}
    >

      <h1>Su urgencia ha sido procesada</h1>



	<button className="btn-next"><Link to="/">Cerrar</Link></button>
    </Modal>

  );
};

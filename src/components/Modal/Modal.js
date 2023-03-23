import './Modal.css';

const Modal = ({ handleClose, handleComplete, show, children, isCompleted }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const buttonText = isCompleted ? "Mark as not clear" : "Mark as understood";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="close-btn" type="button" onClick={handleClose}>
          &times;
        </button>
        <button className="complete-btn" type="button" onClick={handleComplete}>
        {buttonText}
        </button>
      </section>
      
    </div>
  );
};

export default Modal;
function Modal({ children, onClose }) {
    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button
                    className="modal-close"
                    onClick={onClose}
                >
                    X
                </button>

                {children}
            </div>
        </div>
    );
}

export default Modal;
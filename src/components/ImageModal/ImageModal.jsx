import Modal from 'react-modal';
import styles from './ImageModal.module.css';

function ImageModal({ image, onClose }) {
    if (!image) {
        return null;
    }

    return (
        <Modal
            isOpen={Boolean(image)}
            onRequestClose={onClose}
            className={styles.modal}
            overlayClassName={styles.overlay}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            ariaHideApp={false} // Відключаємо, якщо StrictMode створює проблеми
        >
            <div className={styles.content}>
                <img src={image.urls.regular} alt={image.alt_description} className={styles.image} />
                <button onClick={onClose} className={styles.closeButton}>✖</button>
            </div>
        </Modal>
    );
}

export default ImageModal;

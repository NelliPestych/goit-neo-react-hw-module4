import Modal from 'react-modal';
import styles from './ImageModal.module.css';

function ImageModal({ image, onClose }) {
    console.log("Rendering ImageModal with image:", image);

    if (!image) {
        console.log("ImageModal is NOT rendering because image is null.");
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

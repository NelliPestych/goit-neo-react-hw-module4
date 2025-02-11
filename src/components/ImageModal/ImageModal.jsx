import styles from './ImageModal.module.css';

function ImageModal({ image, onClose }) {
    if (!image) {
        return null;
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <img src={image.urls.regular} alt={image.alt_description} className={styles.image} />
                <button onClick={onClose} className={styles.closeButton}>✖</button>
            </div>
        </div>
    );
}

export default ImageModal;

import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) {
    return (
        <ul className={styles.gallery}>
            {images.map((image, index) => (
                <li key={image.id || `${image.urls.small}-${index}`} className={styles.item}>
                    <ImageCard image={image} onClick={onImageClick} />
                </li>
            ))}
        </ul>
    );
}

export default ImageGallery;

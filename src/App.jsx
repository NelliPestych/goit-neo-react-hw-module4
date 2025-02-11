import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import './App.css';

const API_KEY = 'usUhLQgXI4M3M-mwrzj1nXmpJuO0Yf00lZuSG3ZoYLo';
const API_URL = 'https://api.unsplash.com/search/photos';

// Запобігаємо повторному виклику setAppElement
import Modal from 'react-modal';
if (!Modal.__appElementSet) {
    Modal.setAppElement('#root');
    Modal.__appElementSet = true;
}

function App() {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        if (!query) return;
        fetchImages(query, page);
    }, [query, page]);

    const fetchImages = async (searchQuery, page) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${API_URL}?query=${searchQuery}&page=${page}&client_id=${API_KEY}`);
            setImages(prevImages => [...prevImages, ...response.data.results]);
        } catch (err) {
            setError('Ошибка загрузки изображений');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = newQuery => {
        if (newQuery.trim() === '') {
            toast.error('Введите текст для поиска!');
            return;
        }
        setQuery(newQuery);
        setImages([]);
        setPage(1);
    };

    const openModal = (image) => {
        if (modalImage) {
            return;
        }
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className="App">
            <Toaster />
            <SearchBar onSubmit={handleSearch} />
            {error && <ErrorMessage message={error} />}
            <ImageGallery images={images} onImageClick={openModal} />
            {loading && <Loader />}
            {images.length > 0 && !loading && <LoadMoreBtn onClick={() => setPage(page + 1)} />}
            <ImageModal image={modalImage} onClose={closeModal} />
        </div>
    );
}

export default App;

import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleChange = event => {
        setQuery(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (query.trim() === '') {
            toast.error('Введите текст для поиска!');
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <header className={styles.searchBar}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Search</button>
            </form>
        </header>
    );
}

export default SearchBar;

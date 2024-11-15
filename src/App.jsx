import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { useEffect, useState } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchImages } from './gallery-api';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/ImageCard/Loader/Loader';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleClick = () => {
    setPage(prev => prev + 1);
  };
  
  const handleSearch = (value) => {
    setSearchValue(value);
    setPage(1);
  }

  useEffect(() => {
    if (!searchValue) {
      return;
    };
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const { results, total_pages } = await fetchImages(searchValue, page);
        setGalleryData(prev => page === 1 ? results : [...prev, ...results]);
        setTotalPages(total_pages);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, searchValue]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {galleryData.length > 0 && <ImageGallery data={galleryData} />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page or change your request!</p>
      )}
      {loading && <Loader />}
      {page < totalPages && <LoadMoreBtn handleClick={handleClick} />}
    </div>
  )
}

export default App

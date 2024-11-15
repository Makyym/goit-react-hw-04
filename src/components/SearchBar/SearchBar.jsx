import toast from "react-hot-toast";
import s from "./SearchBar.module.css"
const toastOptions = {
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
}

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const searchValue = evt.target.search.value.trim();
        if (searchValue === "") {
            toast.error("Please enter a search query", toastOptions);
            return
        }
        onSubmit(searchValue);
        evt.target.reset();
    }
    return (
        <header>
            <form onSubmit={handleSubmit} className={s.form}>
                <input
                    name="search"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

export default SearchBar
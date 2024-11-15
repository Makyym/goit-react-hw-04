import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const key = "rbC2DUtfmmg8PhOJ55MMlK8zGs8dhxWsEJ9yA3h3nYA";

export const fetchImages = async (value, page) => {
    const response = await axios.get(`?client_id=${key}&query=${value}&page=${page}&per_page=15&orientation=landscape`);
    return response.data;
}
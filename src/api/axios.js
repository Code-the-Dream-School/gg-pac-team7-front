import axios from "axios";

export default axios.create({
    baseURL: `${import.meta.env.REACT_APP_BACKEND_URL}/api/v1`
});

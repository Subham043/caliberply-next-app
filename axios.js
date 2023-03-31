import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://calibreply.jurysoftprojects.com/backend/api/api.php',
    headers: {
        post: {
            "Accept": 'application/json',
            "Content-Type": "application/json",
        },
        get: {
            "Accept": 'application/json',
            "Content-Type": "application/json",
        },
    },
    withCredentials: false,
})

export default instance;
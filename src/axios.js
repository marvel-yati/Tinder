import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend.up.railway.app'
})

export default instance;
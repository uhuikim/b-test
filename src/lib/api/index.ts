import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5173',
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.response.use(
    (response) => {
        console.log('***********interceptor!!!!*******************')
        console.log(response.data)
        return response
    },
    (error) => {
        return Promise.reject(error)
    },
)

export default api

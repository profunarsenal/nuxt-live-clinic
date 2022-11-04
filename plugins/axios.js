export default function ({ $axios }) {
    $axios.interceptors.response.use(null, error => {
        return Promise.reject(error)
    })
}
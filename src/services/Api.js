const API_KEY = 'api_key=b75cb860cbfad4e3e72cf9144d03b3b9';
const GEN_URL = 'https://api.themoviedb.org/3/'

const apiHandler = (endpoint) => {
    return fetch(`${ GEN_URL }${endpoint}${API_KEY}`)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(new Error('Something went wrong'))
            }
    })
}

export default apiHandler;
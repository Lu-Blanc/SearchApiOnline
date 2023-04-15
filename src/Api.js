import axios from "axios";

export const getMovieList = async() =>{
    const baseURL = process.env.REACT_APP_BASE_URL
    const apiKey = process.env.REACT_APP_APIKEY
    
    // mengambil daftar film populer dari API The Movie Database (TMDb) dengan menggunakan Axios. 
    const movie = await axios.get(`${baseURL}/movie/popular?page=1&api_key=${apiKey}`)
    
    // mengembalikan hasil data daftar film populer dalam bentuk array of objects. Hasil tersebut diperoleh dari atribut data.results dari objek movie yang dihasilkan dari pemanggilan Axios.
    return movie.data.results
}

export const searchMovie = async(q) =>{
    const baseURL = process.env.REACT_APP_BASE_URL
    const apiKey = process.env.REACT_APP_APIKEY
    const search = await axios.get(`${baseURL}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return search.data
}
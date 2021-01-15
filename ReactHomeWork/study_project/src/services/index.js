import axios from "axios";

const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGIwZGQxNTUzZjk4MTE0MzVkMWEyMGRlZDcyMTc0NSIsInN1YiI6IjYwMDA4NTU5OTBjZjUxMDAzZTUwODRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ulBdYEyeZ_0X30x8XY9bQw9VygqXo4AlIBxSxsx46pA'
    }
})
class MovieService {
    getMovies() {
        return AXIOS.get('/discover/movie')
    }
    getMovieDetailsById(movieId){
        return AXIOS.get('/movie/76341')
    }
}
export const movieService = new MovieService();

export const fetchSomeData = () => {
    return AXIOS.get('/movie/76341')
}
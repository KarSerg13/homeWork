import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGIwZGQxNTUzZjk4MTE0MzVkMWEyMGRlZDcyMTc0NSIsInN1YiI6IjYwMDA4NTU5OTBjZjUxMDAzZTUwODRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ulBdYEyeZ_0X30x8XY9bQw9VygqXo4AlIBxSxsx46pA'
    }
})
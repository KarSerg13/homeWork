import React,{useEffect, useState} from 'react'
import {FilmList} from "../components";
import {moviesService} from '../services'

export const Home = () => {
    const [movieList, setMovieList] = useState([])
    const [isLoading, setIsLoading] = useState(null);

    const fetchMovies = async () => {
       const  {results,page, total_pages, total_results} = await moviesService.getMovies();

       console.log(results);
    }
    useEffect(() => {

    },[])

    return(
        <FilmList/>
    )
}

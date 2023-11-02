"use client"
import { useState, useEffect } from 'react';
import { MovieCardProps } from './Fetchmoviecard';

 export type Movie = {
  id: number;
  poster_path: string;
    original_title: string;
    title: string;
    overview: string;
    release_date: string;

};

const MovieCard: React.FC<Movie> = ({
    poster_path,
    title,
    release_date,
  }) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500/";
  
    return (
      <div>
        <img src={API_IMG + poster_path} alt={title} className="w-60 h-70 object-cover rounded-t-lg pt-5" />
        <div className="flex items-center gap-20">
          <p>{release_date}</p>
        </div>
        <h4 className="text-2 font-semibold">{title}</h4>
      </div>
    );
  };

const FetchMovie: React.FC = () => {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=d423dc476a5e7c2559dab6541f8dd4dc"
  const [movies, setMovies] = useState<MovieCardProps[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
        //   console.log(data.results)
          setMovies(data.results);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchMovies();
  }, [API_URL]);

  console.log(movies)

  return (
    <div className="w-full h-700 bg-gray-900 text-white">
      <div className="grid ml-5 grid-cols-4 justify-center">
        {movies.map((moviereq) => (
          <MovieCard key={moviereq.id}
          id={moviereq.id}
          title={moviereq.title}
          overview={moviereq.overview}
          poster_path={moviereq.poster_path}
         release_date={moviereq.release_date}
         original_title={moviereq.original_title}
         />
        ))}
      </div>
    </div>
  );
};

export default FetchMovie;
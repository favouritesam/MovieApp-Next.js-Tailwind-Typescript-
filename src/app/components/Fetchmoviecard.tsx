export interface MovieCardProps {
    poster_path: string;
    original_title: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    id: number,
  }

import { Movie } from "./FetchMovie";

  
  const Fetchmoviecard: React.FC<Movie> = ({
    poster_path,
    title,
    release_date,
    
  }) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500/";
  
    return (
      <div>
        <img src={API_IMG + poster_path} alt={title} className="w-80 h-70 object-cover rounded-t-lg pt-5" />
        <div className="flex items-center gap-10">
          <p>{release_date}</p>
        </div>
        <h2 className="text-sm font-normal">{title}</h2>
      </div>
    );
  };
  
  export default Fetchmoviecard;
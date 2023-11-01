import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the state and context
interface MovieContextData {
  movies: Movie[];
  handleSearch: (query: string) => void;
}

interface Movie {
  id: number;
  // Add other properties here as needed
}

const MovieContext = createContext<MovieContextData | undefined>(undefined);

export function useMovieContext() {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
}

interface MovieProviderProps {
  children: ReactNode;
}

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  // Define your searchMovies function or import it from your service
  async function searchMovies(query: string): Promise<Movie[]> {
    // Implement your search logic here
    return [];
  }

  return (
    <MovieContext.Provider value={{ movies, handleSearch }}>
      {children}
    </MovieContext.Provider>
  );
}

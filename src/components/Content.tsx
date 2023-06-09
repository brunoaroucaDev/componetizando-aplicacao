import { useState, useEffect } from "react";
import { MovieProps, GenreResponseProps } from "../types/DataProps";
import { MovieCard } from "./MovieCard";
import { Header } from "./Header";

import '../styles/content.scss';

interface ContentProps{
  movies: MovieProps[],
  selectedGenre: GenreResponseProps; 
}

export function Content({movies, selectedGenre}: ContentProps) {

  return (
    <div className="container">

        <Header title={selectedGenre.title} />

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  );
}
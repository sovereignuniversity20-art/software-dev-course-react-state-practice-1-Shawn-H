import { useState } from "react";
import { movies } from "./mock-data/movies";
import MovieList from "./Components/MovieList";
import GenreList from "./Components/GenreList";

import './App.css';


function App() {
	const [currentGenre, setCurrentGenre] = useState('');

	const filteredMovies = currentGenre ? movies.filter(movie => movie.genre === currentGenre) : movies;

	return (
		<div>
			<GenreList onGenreClick={setCurrentGenre} />
			<MovieList movies={filteredMovies} />
		</div>
	);
};

export default App;

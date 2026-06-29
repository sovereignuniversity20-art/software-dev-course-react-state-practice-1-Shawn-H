import { movies } from '../mock-data/movies';
import Movie from './Movie';

function MovieList () {
	const renderedMovies = movies.map((movie) => {
        return <Movie key={movie.id} movieObj={movie} />
    });
    
    return(
        <div>
            <h1>Movie List</h1>
                {renderedMovies}
        </div>
    )
};

export default MovieList;
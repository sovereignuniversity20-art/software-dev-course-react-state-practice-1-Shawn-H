//import { movies } from '../mock-data/movies';
import Movie from './Movie';

const MovieList = ({ movies }) => {

	const renderedMovies = movies.map((movie) => {
        return <Movie movieObj={movie} />
    });
    
    return(
        <div>
            <h1>Movie List</h1>
                {renderedMovies}
        </div>
    );
};

export default MovieList;
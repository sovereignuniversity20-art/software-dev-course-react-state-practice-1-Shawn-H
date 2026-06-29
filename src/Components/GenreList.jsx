import { genres } from '../mock-data/genres';

function GenreList({ genres }) {
    const renderedGenres = genres.map((genre) => {
        return <li key={genre.id}>{genre.name}</li>
    });

	return(
        <div>
            <h1>Genre List</h1>
            <ul>{renderedGenres}</ul>
        </div>
    )
}

export default GenreList;
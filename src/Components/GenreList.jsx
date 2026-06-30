import { genres } from "../mock-data/genres";

const GenreList = ({ onGenreClick }) => {
    const renderedGenres = genres.map((genre) => {
        return <li key={genre.id} onClick={() => onGenreClick(genre.name)}>{genre.name}</li>
    });

	return(
        <div>
            <h1>Genre List</h1>
            <ul>{renderedGenres}</ul>
        </div>
    );
};

export default GenreList;
const Movie = ({ movieObj }) => {
    const {title, genre, director, yearReleased} = movieObj;
    return (
        <div>
            <h1>{title}</h1>
            <p>Genre: {genre}</p>
            <p>Director: {director}</p>
            <p>Year: {yearReleased}</p>
        </div>
    );

};

export default Movie;
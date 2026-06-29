const Movie = ({ movieObj }) => {
    return(
        <div>
            <h1>{ movieObj.title }</h1>
            <p>{ movieObj.genre }</p>
            <p>{ movieObj.director }</p>
            <p>{ movieObj.yearReleased }</p>
        </div>
    )

};

export default Movie;
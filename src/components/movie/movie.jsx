import './movie.css'
const Movie = ({ poster, title, type, year }) => {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === 'N/A' ? (
          <img
            className="activator"
            src="https://via.placeholder.com/300x450?text=Visit+Blogging.com+NowC/O"
            alt="poster"
          />
        ) : (
          <img className="activator" src={poster} alt="poster" />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>{type}</p>
        <p>{year}</p>
      </div>
    </div>
  )
}
export default Movie

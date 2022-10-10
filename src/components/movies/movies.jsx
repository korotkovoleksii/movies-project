import Movie from '../movie/movie'
import './movies.css'
const Movies = ({ movies }) => {
  console.log(movies)
  const movieList = movies.map((item) => (
    <Movie
      key={item['imdbID']}
      poster={item['Poster']}
      title={item['Title']}
      type={item['Type']}
      year={item['Year']}
    ></Movie>
  ))

  return <div className="movieList">{movieList}</div>
}
export default Movies

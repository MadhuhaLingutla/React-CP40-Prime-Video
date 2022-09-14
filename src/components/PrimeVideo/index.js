// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="banner-image"
      />
      <div className="responsive-container">
        <h1 className="movie-genre-title">Action Movies</h1>
        <MoviesSlider genreSpecificMovieList={actionMoviesList} />
        <h1 className="movie-genre-title">Comedy Movies</h1>
        <MoviesSlider genreSpecificMovieList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo

// Write your code here

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const movieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="movie-item-container">
      <Popup
        className="popup-content"
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="thumbnail-image"
            />
          </button>
        }
      >
        {close => (
          <div className="popup-content-container">
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <div className="video-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default movieItem

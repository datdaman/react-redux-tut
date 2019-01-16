import React from 'react';
import { connect } from 'react-redux'

const SongDetail = ({song}) => {
    return(
      <div className="ui container">
        <h4>Song Detail</h4>
        <p>Title: {song && song.title}</p>
        <p>Duration: {song && song.duration}</p>
      </div>
    )

}

const mapStateToProps = (state) => {
  return {song : state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);
import {connect} from 'react-redux'
import {chooseSong} from "../actions/index";
import SongListing from "../components/SongListing/SongListing";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return {
    chooseSong: (songId) => dispatch(chooseSong(songId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongListing)
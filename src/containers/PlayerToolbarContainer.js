import {connect} from 'react-redux'
import {getActiveSong} from "../reducers/player";
import PlayerToolbar from "../components/PlayerToolbar/PlayerToolbar";

const mapStateToProps = state => ({
  song: getActiveSong(state),
});

const mapDispatchToProps = dispatch => {
  return {
    // chooseSong: (songId) => dispatch(chooseSong(songId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerToolbar);

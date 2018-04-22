import {connect} from 'react-redux'
import OpenButton from "../components/OpenButton";
import {openSongsRequest, openSongsSuccess} from "../actions/index";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return {
    openSongsRequest: () => dispatch(openSongsRequest),
    openSongsSuccess: (songs) => dispatch(openSongsSuccess(songs)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenButton)
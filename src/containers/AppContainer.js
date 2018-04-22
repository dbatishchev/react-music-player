import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as PlayerActions from '../actions'
import App from "../components/App/App";

const mapStateToProps = state => ({
  songs: state.player.songs,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PlayerActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
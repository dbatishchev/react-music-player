import find from 'lodash/find';
import {CHOOSE_SONG, OPEN_SONGS_FAILURE, OPEN_SONGS_REQUEST, OPEN_SONGS_SUCCESS} from "../actions/index";

export const getActiveSong = (state) => {
  return find(state.player.songs, s => s.id === state.player.activeSongId);
};

const player = (state = [], action) => {
  switch (action.type) {
    case OPEN_SONGS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case OPEN_SONGS_SUCCESS:
      return {
        ...state,
        songs: [...state.songs, ...action.songs],
        isLoading: false,
      };
    case OPEN_SONGS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case CHOOSE_SONG:
      return {
        ...state,
        activeSongId: action.songId,
      };
    default:
      return state
  }
};

export default player;
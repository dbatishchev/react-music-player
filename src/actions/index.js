export const OPEN_SONGS_REQUEST = 'OPEN_SONGS_REQUEST';
export const OPEN_SONGS_SUCCESS = 'OPEN_SONGS_SUCCESS';
export const OPEN_SONGS_FAILURE = 'OPEN_SONGS_FAILURE';
export const CHOOSE_SONG = 'CHOOSE_SONG';

export const openSongsRequest = () => ({
  type: OPEN_SONGS_REQUEST,
});

export const openSongsSuccess = (songs) => ({
  type: OPEN_SONGS_SUCCESS,
  songs
});

export const openSongsFailure = (error) => ({
  type: OPEN_SONGS_FAILURE,
  error
});

export const chooseSong = (songId) => ({
  type: CHOOSE_SONG,
  songId
});
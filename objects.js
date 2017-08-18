var playlist = {
  Blink182: "First Date",
  AFI: "Anxious",
  The1975: "Somebody else"
};

var obj = new Object();

obj[playlist];

function updatePlaylist(playlist, artist, song){
  playlist.artist = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist;
  return playlist;
}

updatePlaylist(playlist, U2, "Vertigo");

removeFromPlaylist(playlist, U2);

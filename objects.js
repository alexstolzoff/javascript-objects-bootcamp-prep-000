var playlist = {
  Blink182: "First Date",
  AFI: "Anxious",
  The1975: "Somebody else"
};

var obj = new Object();

obj[playlist];

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]= songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}

updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi");

removeFromPlaylist(playlist, U2);

var playlist = {};



function updatePlaylist({}, artistName, songTitle){
  var artist = artistName
  playlist.artist = songTitle;
  return playlist;
}

// function removeFromPlaylist(playlist, artistName){
//   delete playlist.artistName;
//   return playlist;
// }

updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi");
//
// removeFromPlaylist(playlist, U2);

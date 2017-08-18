var playlist = {Kanye: "Gold Digger"};



function updatePlaylist({}, artistName, songTitle){
  var artist = artistName
  playlist[artist] = songTitle;
  return playlist.artist;
}

// function removeFromPlaylist(playlist, artistName){
//   var artist = artistName;
//   delete playlist[artist];
//   return playlist;
// }

updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi");

// removeFromPlaylist(playlist, Kanye);

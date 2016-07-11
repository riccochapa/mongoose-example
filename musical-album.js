const mongoose = require('mongoose');
mongoose.connect('localhost', 'test');

const PlaylistSchema = new mongoose.Schema({
  playlistId: { type: Number, required: true },
  playlistLink: { type: String, required: true },
  info: [{
    trackName: String,
    artist: String,
    albumName: String,
  }],
});

const Song = mongoose.model('Song', PlaylistSchema);

const addTrack = function entry(playlist, link, trackName, artist, albumName) {
  const track = new Song({
    playlistId: playlist,
    playlistLink: link,
    info: [{
      trackName,
      artist,
      albumName,
      link,
    }],
  });
  track.save();
};

addTrack(1, 'https://open.spotify.com/user/1216673685/playlist/1kasNO3CSpYmnq61AcGfUf', 'All Star', 'Smash Mouth', 'All Star Smash Mouth');
addTrack(1, 'https://open.spotify.com/user/1216673685/playlist/1kasNO3CSpYmnq61AcGfUf', 'Glow', 'Alien Aunt Farm', 'The Best Of Alien Ant Farm Twentyth Century Masters');
addTrack(1, 'https://open.spotify.com/user/1216673685/playlist/1kasNO3CSpYmnq61AcGfUf', 'Across the Universe', 'Fiona Apple', 'Pleasantville');
addTrack(2, 'https://open.spotify.com/user/1216673685/playlist/2dxxcmcFVKwh8ltB42YNdt', 'Bridge Burning', 'Foo Fighters', 'Wasting Light');
addTrack(2, 'https://open.spotify.com/user/1216673685/playlist/2dxxcmcFVKwh8ltB42YNdt', 'Howlin for you', 'Black Keys', 'Brothers');
addTrack(2, 'https://open.spotify.com/user/1216673685/playlist/2dxxcmcFVKwh8ltB42YNdt', 'The Pretender', 'Foo Fighters', 'Patience and Grace');

var mongoose = require('mongoose');
mongoose.connect('localhost', 'test');

var PlaylistSchema = mongoose.Schema({
  playlist_id: {type: Number, required: true},
  info: [{
    song_name: String,
    artist: String,
    album_name: String
  }]
});

var Song = mongoose.model('Song', PlaylistSchema);

var one = new Song({
  playlist_id: 1,
  info: [{
    song_name: 'All Star',
    artist: 'Smash Mouth',
    album_name: 'All Star Smash Mouth'
  }]
});
one.save();

var one = new Song({
  playlist_id: 1,
  info: [{
    song_name: 'Glow',
    artist: 'Alien Aunt Farm',
    album_name: 'The Best Of Alien Ant Farm Twentyth Century Masters'
  }]
});
one.save();

var one = new Song({
  playlist_id: 1,
  info: [{
    song_name: 'Across the Universe',
    artist: 'Fiona Apple',
    album_name: 'Pleasantville'
  }]
});
one.save();

var one = new Song({
  playlist_id: 2,
  info: [{
    song_name: 'Bridge Burning',
    artist: 'Foo Fighters',
    album_name: 'Wasting Light'
  }]
});
one.save();

var one = new Song({
  playlist_id: 2,
  info: [{
    song_name: 'Howlin for you',
    artist: 'Black Keys',
    album_name: 'Brothers'
  }]
});
one.save();

var one = new Song({
  playlist_id: 2,
  info: [{
    song_name: 'The Pretender',
    artist: 'Foo Fighters',
    album_name: 'Patience and Grace'
  }]
});
one.save();

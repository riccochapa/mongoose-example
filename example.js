var mongoose = require('mongoose');
mongoose.connect('localhost', 'test');

var schema = mongoose.Schema({
  name: String
});

var Cat = mongoose.model('Cat', schema);

var kitty = new Cat({ name: 'Meow' });
kitty.save(function(err){
  if (err) console.error(err);
  console.log('meow!');
});

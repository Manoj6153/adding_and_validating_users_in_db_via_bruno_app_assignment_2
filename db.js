const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://manojb6153:Manoj6153*@class0.oq4l6.mongodb.net/?retryWrites=true&w=majority&appName=Class0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected to Atlas'))
  .catch(err => console.log(err));

module.exports = mongoose;
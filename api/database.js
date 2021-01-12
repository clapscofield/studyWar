var mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb://clarisse:dcc2021@cluster0-shard-00-00.qwfov.mongodb.net:27017,cluster0-shard-00-01.qwfov.mongodb.net:27017,cluster0-shard-00-02.qwfov.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-5zfvqz-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true});

var conn = mongoose.connection;

conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})

conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;
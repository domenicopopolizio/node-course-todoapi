const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser:true},(err, client) => {

    if (err)
        return console.log('Unable to connect to MongoDB server');
    
    console.log('Conneted to MongoDB server');
    
    const db = client.db('TodoApp');

    db.collection('Todos').find({comleted: false}).toArray()
    .then(docs => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log('Unable to fetch todos', err);
    })

    client.close();
});
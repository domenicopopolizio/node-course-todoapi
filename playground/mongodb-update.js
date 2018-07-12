const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser:true},(err, client) => {

    if (err)
        return console.log('Unable to connect to MongoDB server');
    
    console.log('Conneted to MongoDB server');
    
    const db = client.db('TodoApp');

    //findOneAndUpdate
    
    db.collection('Todos').findOneAndUpdate(
        {_id:new ObjectID("5b47cae3643dc5e4ff962808")},
        { $set : { completed : false } },
        {returnOriginal:true}
    ).then(res => console.log(res));

    db.collection('Users').findOneAndUpdate(
        {name:'Nome'},
        {$inc:{age:1}},
        {returnOriginal:true}
    ).then(res => console.log(res));
    //client.close();
});